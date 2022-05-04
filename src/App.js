import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [apiTest, setApiTest] = useState("");

  useEffect(() => {
    fetchFromAPI();
  }, []);

  const fetchFromAPI = async () => {
    try {
      const response = await fetch("/api");
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const json = await response.json();
      setApiTest(json.message);
    } catch (error) {}
  };

  const apiTestPrint = apiTest.length
    ? apiTest
    : "awaiting API...";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<h3>{apiTestPrint}</h3>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Routes>
          <Route path="*" element={<h1>this is the react app</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
