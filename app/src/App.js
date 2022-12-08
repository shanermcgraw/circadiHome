import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Dashboard-container">
          <div className="Devices-container">
            <div className="Devices-header">
              <h3 className="Device-container-item">Device Name</h3>
              <h3 className="Device-container-item">Status</h3>
            </div>
            <div className="Device-container">
              <p className="Device-container-item">Bedroom 1</p>
              <p className="Device-container-item">Connected</p>
            </div>
          </div>
          <div className="Devices-container">
            <div className="Devices-header">
              <h3 className="Device-container-item">Device Name</h3>
              <h3 className="Device-container-item">Status</h3>
            </div>
            <div className="Device-container">
              <p className="Device-container-item">Bedroom 1</p>
              <p className="Device-container-item">Connected</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
