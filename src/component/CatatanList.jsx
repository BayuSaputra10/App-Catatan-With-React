/* eslint-disable react/prop-types */
const CatatanList = ({ catatanList, onDelete, onArchive }) => {

    const sortedCatatanList = [...catatanList].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (

    <div className="catatan-list">
      <h1 className="flex justify-center items-center min-h-16 bg-slate-800 text-white text-xl p-4">
        List Catatan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {sortedCatatanList.length > 0 ? (
        
        catatanList.map((catatan) => (
          <div
            className="catatan-item bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            key={catatan.id}
          >
            <h3 className="text-lg font-semibold mb-2">{catatan.title}</h3>
            <p className="text-gray-700">{catatan.body}</p>
            <div className="flex gap-2 mt-4">
              <button
                type="button"
                className="text-red-400 border border-red-400 rounded px-4 py-1 hover:bg-red-400 hover:text-white"
                onClick={() => onDelete(catatan.id)}
              >
                Delete
              </button>
              <button
                type="button"
                className="text-yellow-400 border border-yellow-400 rounded px-4 py-1 hover:bg-yellow-400 hover:text-white"
                onClick={() => onArchive(catatan.id)}
              >
                Archive
              </button>
            </div>
          </div>
        ))
    ): (
        <div className="flex justify-center items-center text-gray-500 w-screen">Catatan kosong...</div>
    )}
      </div>
    </div>
  );
};

export default CatatanList;
