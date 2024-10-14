import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React from 'react';
// import Folder from './components/Folder';
import FolderStructure from './components/Folder';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
        {/* 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Windows Explorer</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Folders</a>
                  </li>
                </ul>
              </div>
            </nav>
        */}  
      {/* Layout with Bootstrap Grid */}
      <div className="container mt-4">
        <div className="row">
          {/* Left Panel - Folder Structure */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                FIle Explorer
              </div>
              <div className="card-body">
                <FolderStructure />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
