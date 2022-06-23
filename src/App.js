import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import SocketProvider from "./contextProviders/SocketProvider.js";
import NavBar from "./containers/NavBar.js";
import Chat from "./containers/Chat.js";

import TestPage from "./pages/TestPage.js";

import "./App.scss";

const App = () => {
  const [apiTest, setApiTest] = useState({
    pages: [],
    message: ""
  });

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
      setApiTest(json);
    } catch (error) {}
  };

  const apiTestPrint = apiTest.message.length ? apiTest.message : "awaiting API...";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavBar pages={apiTest.pages} message={apiTestPrint} />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<h1>this is the react app</h1>} />
          <Route path="/tests/:id" element={<TestPage/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      <SocketProvider>
        <Chat/>
      </SocketProvider>
    </div>
  );
};

export default App;
