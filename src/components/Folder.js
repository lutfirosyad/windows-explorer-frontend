import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileList from './FileList'; // Import FileList

function FolderStructure() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [subfolders, setSubfolders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('/api/folders')
      .then(response => {
        setFolders(response.data);
      })
      .catch(error => {
        console.error('Error fetching folders:', error);
      });
  }, []);

  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
    setLoading(true);

    // Fetch subfolders based on selected folder
    axios.get(`/api/folders/${folderId}/subfolders`)
      .then(response => {
        setSubfolders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching subfolders:', error);
        setLoading(false);
      });
  };

  return (
    <div className="row">
      {/* Folder Structure */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Folder</div>
          <div className="card-body">
            <ul className="list-group">
              {folders.map(folder => (
                <li
                  key={folder.id}
                  className="list-group-item folder-utama"
                  onClick={() => handleFolderClick(folder.id)}
                >
                  <i className="bi bi-folder-fill" style={{ marginRight: '10px', color: '#ffc107' }}></i> 
                  {folder.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Subfolders */}
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Subfolders</div>
            <div className="card-body">
                {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
                ) : (
                subfolders.length > 0 ? (
                    <ul className="list-group">
                        {subfolders.map(subfolder => (
                            <li key={subfolder.id} className="list-group-item">
                                <i className="bi bi-folder-fill me-2 text-warning"></i>  
                                {subfolder.name}
                            </li>
                        ))}

                        {/* Menampilkan File List */}
                        {selectedFolder && <FileList folderId={selectedFolder} />}
                        
                    </ul>
                    
                ) : (
                    <p>Select a folder to see subfolders.</p>
                )
                )}

                

                

            </div>
        </div>

        
      </div>
    </div>
  );
}

export default FolderStructure;
