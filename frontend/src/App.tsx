import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/Home/Home";
// import { Client, ValleeBackendApi } from "./util/gen/api/dist";
// import AllJobsPage from "./components/pages/Jobs/allJobs";
// import OutReachEditorPage from "./components/pages/OutReach/OutReach";
import Header from "./components/common/Header/Header";
import TopNav from "./components/common/TopNav/TopNav";

const baseURI = "http://127.0.0.1:8000/api";
// const apiService = new ValleeBackendApi(undefined, baseURI);

function App() {
  // const initialClient: Client = { name: "", jobs: [], id: 0 };
  // const [client, setClient] = useState(initialClient); // not necessary in this iteration of the project

  return (
    <div className="app__root">
      <Router>
        <TopNav />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
