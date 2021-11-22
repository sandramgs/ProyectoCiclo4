import React from "react";
import Predios from './componentes/paginas/Predios';
import Sidebar from './componentes/navegacion/Sidebar';
import Header from './componentes/navegacion/Header';
import Login from './componentes/paginas/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Header/>
        <div className="row">
        
          <div className="col-auto">
            <Sidebar/>
          </div>
          <div className="col">
          <Login/>
          </div>
          <div className="col">
          <Predios/>
          </div>
      </div>
      
    </Router>
  );
}

export default App;
