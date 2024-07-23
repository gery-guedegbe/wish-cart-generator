import "./App.css";
import Header from "./components/Header";
import Card1 from "./components/Cards/Card1/Card1";
import Card2 from "./components/Cards/Card2/Card2 ";
import Card3 from "./components/Cards/Card3/Card3";
import Card4 from "./components/Cards/Card4/Card4";
import Card5 from "./components/Cards/Card5/Card5";
import Card6 from "./components/Cards/Card6/Card6";
import { GlobalStateProvider } from "./GlobalStateContext";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Header />
        <main>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
        </main>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
