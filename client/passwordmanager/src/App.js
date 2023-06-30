import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Title"> Password Manager</div>
      <div className="AddPassword">
        <input type="text" placeholder="Company/Account" />
        <input type="text" placeholder="Password" />
        <button> Add Password </button>
      </div>
    </div>
  );
}

export default App;
