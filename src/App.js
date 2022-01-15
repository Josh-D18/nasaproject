import "./App.css";
import API from "./components/API/API";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <>
        <Routes>
          <Route path="/" element={<API />}></Route>
        </Routes>
      </>
    </section>
  );
}

export default App;
