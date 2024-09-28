    import { useState } from "react";
    import CatatanList from "./CatatanList";
    import CatatanArchive from "./CatatanArchive";
    import Navbar from "./Navbar";
    import { getInitialData } from "../utils";

    const CatatanMain = () => {
    const initialState = {
        title: '',
        body: '',
        archived: false,
        createdAt: new Date().toISOString()
    };

    const [catatan, setCatatan] = useState(initialState);
    const [catatanList, setCatatanList] = useState(getInitialData);
    const [archivedList, setArchivedList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [maxLength] = useState(50)

    const handleChange = (e) => {
        setCatatan({
        ...catatan,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCatatan = { ...catatan, id: catatanList.length + archivedList.length + 1 };
        setCatatanList([...catatanList, newCatatan]);
        setCatatan(initialState);
    };

    const handleDelete = (id) => {
        setCatatanList(catatanList.filter(catatan => catatan.id !== id));
        setArchivedList(archivedList.filter(catatan => catatan.id !== id));
    };

    const handleArchive = (id) => {
        const updatedCatatanList = catatanList.map(catatan => {
        if (catatan.id === id) {
            return {
            ...catatan,
            archived: true
            };
        }
        return catatan;
        });

        const archivedCatatan = updatedCatatanList.find(catatan => catatan.id === id);
        
        setCatatanList(updatedCatatanList.filter(catatan => !catatan.archived));
        setArchivedList([...archivedList, archivedCatatan]);
    };

    const handleUnarchive = (id) => {
        const updatedArchivedList = archivedList.map(catatan => {
        if (catatan.id === id) {
            return {
            ...catatan,
            archived: false
            };
        }
        return catatan;
        });

        const unarchivedCatatan = updatedArchivedList.find(catatan => catatan.id === id);
        
        setArchivedList(updatedArchivedList.filter(catatan => catatan.archived));
        setCatatanList([...catatanList, unarchivedCatatan]);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };


    const filteredCatatanList = catatanList.filter(catatan =>
        catatan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        catatan.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <Navbar onSearch={handleSearch} />

        <div className="catatan-section">
            <h1 className="flex justify-center items-center min-h-16 bg-slate-800 text-white text-xl p-4">
            Buat Catatan
            </h1>
            <div className="input-catatan flex justify-center items-center my-6">
            <form
                className="flex flex-col gap-4 p-4 bg-gray-300 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <p className="flex justify-end font-light">sisa karakter : {maxLength - catatan.title.length}</p>
                <input
                type="text"
                name="title"
                id="title"
                placeholder="Judul Catatan"
                value={catatan.title}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                maxLength={maxLength}
                />
                <textarea
                name="body"
                id="body"
                placeholder="Isi Catatan"
                className="border rounded-lg p-2 w-full h-32"
                value={catatan.body}
                onChange={handleChange}
                ></textarea>
                <button
                type="submit"
                className="bg-white text-black rounded-lg p-2 w-full hover:bg-black hover:text-white transition"
                >
                Buat
                </button>
            </form>
            </div>
        </div>

        <CatatanList 
            catatanList={filteredCatatanList}
            onDelete={handleDelete}
            onArchive={handleArchive} 
        />

        <CatatanArchive 
            archivedList={archivedList} 
            onUnarchive={handleUnarchive}
            onDelete={handleDelete}
        />
        </>
    );
    };

    export default CatatanMain;
