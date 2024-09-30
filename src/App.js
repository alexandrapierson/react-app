import Counter from "./components/Counter";
import Profile from "./components/Profile";
import "./styles/App.css";
import { FetchData } from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello!</p>
        <Profile name="Lexi" />
        <Counter />
        <FetchData />
      </header>
    </div>
  );
}

export default App;
