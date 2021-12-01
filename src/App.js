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

    switch(evt.target.name) {
      case "inicio":
        setCompDinamico(<Inicio />);
        break;
      case "admin":
        setCompDinamico(<AdminUsuarios />);
        break;
      case "predios":
        setCompDinamico(<Predios />);
        break;
      case "tiposc":
        setCompDinamico(<TiposCultivo />);
        break;
      case "insumosv":
        setCompDinamico(<InsumosValor />);
        break;
      default:
        setCompDinamico(<Cultivos />);   
        break;
    }
  }

  return (
    <Fragment>
      <Header/>
      <div className="row">
        <div className="col-auto">
          <Sidebar onOptionClicked={ onOptionClicked } />
        </div>
        <div className="col fondo">
          { compDinamico }
        </div>
      </div>
    </Fragment>
  );
}
export default App;