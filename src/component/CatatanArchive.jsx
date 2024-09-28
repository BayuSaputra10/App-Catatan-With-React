/* eslint-disable react/prop-types */
const CatatanArchive = ({ archivedList = [], onUnarchive, onDelete }) => {
    
    const sortedArchivedList = [...archivedList].sort((a, b) => new Date(b.archivedAt) - new Date(a.archivedAt));
  
    return (
      <div className="catatan-archive">
        <h1 className="flex justify-center items-center min-h-16 bg-slate-800 text-white text-xl p-4">
          Arsip Catatan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {sortedArchivedList.length > 0 ? (
            sortedArchivedList.map((catatan) => (
              <div
                className="catatan-item bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                key={catatan.id}
              >
                <h3 className="text-lg font-semibold mb-2">{catatan.title}</h3>
                <p className="text-gray-700 mb-4">{catatan.body}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    type="button"
                    className="text-green-500 border border-green-500 rounded px-4 py-1 hover:bg-green-500 hover:text-white"
                    onClick={() => onUnarchive(catatan.id)}
                  >
                    Unarchive
                  </button>
                  <button
                    type="button"
                    className="text-red-500 border border-red-500 rounded px-4 py-1 hover:bg-red-500 hover:text-white"
                    onClick={() => onDelete(catatan.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center text-gray-500 w-screen">Arsip kosong...</div>
          )}
        </div>
      </div>
    );
  };
  
  export default CatatanArchive;
  