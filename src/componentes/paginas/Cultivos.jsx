import DataTable from "react-data-table-component";
import FormCultivos from "../formularios/FormCultivos";
import FormConfirmar from "../formularios/FormConfirmar";
import { Card } from "react-bootstrap";
import { get } from "../../api/http"
import { useState, useEffect } from "react";

function Cultivos() {
  const [filas,setFilas] = useState([])

  const columns = [
    {
      name: "Predio",
      selector: "descri_predio",
      sortable: true
    },
    {
      name: "Tipo Cultivo",
      selector: "descri_tipoc",
      sortable: true
    },
    {
      name: "Area (Has)",
      selector: "area_has",
      sortable: true
    },
    {
      name: "Inicio Cultivo",
      selector: "inicio_cultivo",
      sortable: true
    },
    {
      name: "Fin Cosecha",
      selector: "fin_cosecha",
      sortable: true
    },
    {
      name: "Valor Total",
      selector: "valor_cultivo",
      sortable: true,
      right: true
    }
  ];

  useEffect(() => {
    get("cultivos/todos").then((respuesta) => {
      setFilas(respuesta)
    })
  },[]
  );
  
  let filasTabla = [];

  if (filas.length > 0) {
    filasTabla = filas.map((cultivo) => {
    const fila = { ...cultivo, 
      editar: <FormCultivos title="Editar" 
      item={{id: cultivo.id,
        predio: cultivo.descri_predio,
        tipoCultivo: cultivo.descri_tipoc,
        area: cultivo.area_has,
        inicioCultivo: cultivo.inicio_cultivo,
        finCosecha: cultivo.fin_cosecha,
        valorCultivo: cultivo.valor_cultivo}}
      setFilas= {setFilas} filas={filas}/>,
      eliminar: <FormConfirmar endpoint="cultivos/borrar" 
      id={cultivo._id} setFilas= {setFilas} filas={filas}/>}
    return fila;
  })};
  
  return (
    <Card className="transparente">
      <Card.Body>
        <Card.Title>
          <h2>Cultivos</h2>
        </Card.Title>
        <FormCultivos title="Nuevo" setFilas= {setFilas} filas={filas}/>
        <div className="row"></div>
        <div className="card mt-5">
          <DataTable
            columns={columns}
            data={filasTabla}
            defaultSortField="title"
            FixedHeader="true"
            striped= "true"
            pagination
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cultivos;