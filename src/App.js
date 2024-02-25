import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="bg-indigo-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Replace the following with your project components */}
            <div className="bg-purple-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Project 1</h2>
              <p>Description of Project 1.</p>
            </div>
            <div className="bg-purple-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Project 2</h2>
              <p>Description of Project 2.</p>
            </div>
            {/* Add more project components as needed */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
