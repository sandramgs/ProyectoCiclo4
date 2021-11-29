import DataTable from "react-data-table-component";
import BottonNew from "../navegacion/BottonNew";

const columns = [
    {
      name: "Codigo",
      selector: "codigo",
      sortable: true
    },
    {
      name: "Hectareas",
      selector: "hectareas",
      sortable: true
    },
    {
      name: "Latitud",
      selector: "latitud",
      sortable: true
    },
    {
      name: "Longitud",
      selector: "longitud",
      sortable: true
    },
    {
      name: "Descripción",
      selector: "descripcion",
      sortable: true
    },
    {
      name: "Gestor",
      selector: "gestor",
      sortable: true,
      right: true
    }
  ];

  const filas = [
    {
        id: 1,
        codigo: '0001',
        hectareas: '200',
        latitud: '1,22,33,0',
        longitud: '2,34,55,6',
        descripcion: "Predio Prueba 1",
        gestor: "msalcedo"
    },
    {
      id: 2,
      codigo: '0002',
      hectareas: '3000',
      latitud: '1,00,33,0',
      longitud: '4,34,99,0',
      descripcion: "Predio Prueba 2",
      gestor: "opulido"
    }
  ]

  function Predios(props) {
    return (
      <>
        <BottonNew />
        <div className="App">
          <DataTable
            title="Predios"
            columns={columns}
            data={filas}
            defaultSortField="title"
            pagination
            selectableRows />
        </div></>
    );
  }
  export default Predios;