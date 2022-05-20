import Header from "./components/Header";
import Prompt from "./components/Prompt";
import SavedPrompts from "./components/SavedPrompts";

function App() {
  return (
    <div className="App">
      <Header />
      <Prompt />
      <SavedPrompts />
    </div>
  );
}

export default App;
