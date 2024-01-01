import logo from './logo.svg';
import './App.css';

function App() {
  const loginwithgoogle = () => {
    window.open("http://localhost:8080/auth/google/callback", "_self");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Google_Chrome_icon_%28March_2011%29.svg/1024px-Google_Chrome_icon_%28March_2011%29.svg.png" className="App-logo" alt="logo" />
        <p>
          *******Sample web page........
        </p>
        <a
          className="App-link"
          href="#"
          onClick={loginwithgoogle}
          target="_blank"
          rel="noopener noreferrer"
        >
          Login with Google
        </a>
      </header>
    </div>
  );
}

export default App;
