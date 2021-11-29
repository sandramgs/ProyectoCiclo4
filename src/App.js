import React from "react";
import Sidebar from './componentes/navegacion/Sidebar';
import Header from './componentes/navegacion/Header';
import Inicio from './componentes/paginas/Inicio';
//import Login from './componentes/paginas/Login';
import AdminUsuarios from "./componentes/paginas/AdminUsuarios";
import Predios from './componentes/paginas/Predios';
import TiposCultivo from "./componentes/paginas/TiposCultivo";
import Cultivos from "./componentes/paginas/Cultivos";
import InsumosValor from "./componentes/paginas/InsumosValor";

//import {BrowserRouter as Router} from "react-router-dom";
import { Fragment, useState } from 'react';


function App() {

  const [ compDinamico, setCompDinamico ] = useState(<Inicio />);
  
  const onOptionClicked = function(evt) {
    evt.preventDefault();

    if (evt.target.name==="inicio") {
      setCompDinamico(<Inicio />);}
    else {
      if (evt.target.name ==="admin") { setCompDinamico(<AdminUsuarios />); }
      else { 
        if (evt.target.name==="predios") {setCompDinamico(<Predios />);}
        else {
          if (evt.target.name==="tiposc") {setCompDinamico(<TiposCultivo />);}
          else {
            if (evt.target.name==="insumosv") {setCompDinamico(<InsumosValor />);}
            else
              setCompDinamico(<Cultivos />);
              
          }
        }
      }
    }
  }

  return (
    <Fragment>
      <Header/>
      <div className="row">
        <div className="col-auto">
          <Sidebar onOptionClicked={ onOptionClicked } />
        </div>
        <div className="col">
          { compDinamico }
        </div>
      </div>
    </Fragment>
  );
}
export default App;


/*
function App() {
  
  return (
    <Router>
    
      <Header/>
      <div className="row">
        
          <div className="col-auto">
            <Sidebar/>
          </div>
          <div className="col">
            <Predios/>
          </div>
        
      </div>
      
    </Router>
  );
  }
  export default App;
*/

