import DataTable from "react-data-table-component";
import FormTiposC from "../formularios/FormTiposC";
import { Card } from "react-bootstrap"

const columns = [
    {
      name: "Descripcion",
      selector: "descripcion",
      sortable: true
    },
    {
      name: "Semilla",
      selector: "semilla",
      sortable: true
    },
    {
      name: "Cant. Semilla",
      selector: "cntSemilla",
      sortable: true
    },
    {
      name: "Fertilizante",
      selector: "fertilizante",
      sortable: true
    },
    {
      name: "Cant. Fertilizante",
      selector: "cntFertilizante",
      sortable: true
    },
    {
      name: "Cant. Agua",
      selector: "cntAgua",
      sortable: true,
      right: true
    }
  ];

  const filas = [
    {
        id: 1,
        descripcion: 'Maiz popocho',
        semilla: 'MP020',
        cntSemilla: '30',
        fertilizante: 'Triple 15',
        cntFertilizante: "5",
        cntAgua: "20"
    },
    {
      id: 2,
      descripcion: 'Frijol rojo',
      semilla: 'FR001',
      cntSemilla: '25',
      fertilizante: 'Triple 18',
      cntFertilizante: "6",
      cntAgua: "18"
    }
  ]

  function TiposCultivo(props) {
    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Tipos de Cultivo</h2>
          </Card.Title>
          <FormTiposC />
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data={filas}
              defaultSortField="title"
              pagination
            />
          </div>
        </Card.Body>
      </Card>
    );
  }
  export default TiposCultivo;