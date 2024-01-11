import React from 'react';
import './App.css';

function App() {
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:6005/auth/google/callback"; // Redirect to Google login
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Google_Chrome_icon_%28March_2011%29.svg/1024px-Google_Chrome_icon_%28March_2011%29.svg.png"
          className="App-logo"
          alt="logo"
        />
        <p>***Sample web page........</p>
        <form>
          <button type="button" onClick={loginWithGoogle}>
            Login with Google
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
