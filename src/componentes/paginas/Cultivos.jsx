import DataTable from "react-data-table-component";
import FormCultivos from "../formularios/FormCultivos";
import { Card } from "react-bootstrap";

const columns = [
    {
      name: "Predio",
      selector: "predio",
      sortable: true
    },
    {
      name: "Tipo Cultivo",
      selector: "tipoCultivo",
      sortable: true
    },
    {
      name: "Area (Has)",
      selector: "area",
      sortable: true
    },
    {
      name: "Inicio Cultivo",
      selector: "inicioCultivo",
      sortable: true
    },
    {
      name: "Fin Cosecha",
      selector: "finCosecha",
      sortable: true
    },
    {
      name: "Valor Total",
      selector: "valorTotal",
      sortable: true,
      right: true
    },
    {
      name: "Acción",
      selector: "accion",
      sortable: true,
      right: true
    }
  ];

  const filas = [
    {
        id: 1,
        predio: '01 - Finca Maizal',
        tipoCultivo: 'Maiz popocho',
        area: '50',
        inicioCultivo: "01-01-2022",
        finCosecha: "01-06-2021",
        valorTotal: "4500000",
        accion: "ninguna"
    },
    {
        id: 2,
        predio: '02 - Hacienda Patillal',
        tipoCultivo: 'Frijol rojo',
        area: '100',
        inicioCultivo: "01-01-2021",
        finCosecha: "05-06-2021",
        valorTotal: "6100000",
        accion: "ninguna"
    },
    {
        id: 3,
        predio: '20 - Finca La Prosperidad',
        tipoCultivo: 'Maiz popocho',
        area: '200',
        inicioCultivo: "01-12-2021",
        finCosecha: "01-06-2022",
        valorTotal: "9000000",
        accion: "ninguna"
    },
    {
      id: 4,
      predio: '04 - Finca Italia',
      tipoCultivo: 'Algodón',
      area: '500',
      inicioCultivo: "01-11-2021",
      finCosecha: "01-05-2022",
      valorTotal: "7700000",
      accion: "ninguna"
  },
  {
      id: 5,
      predio: '05 - Hacienda Naranjal',
      tipoCultivo: 'Naranja Tangelo',
      area: '1000',
      inicioCultivo: "01-08-2021",
      finCosecha: "05-08-2023",
      valorTotal: "1500000",
      accion: "ninguna"
  },
  {
      id: 6,
      predio: '21 - Finca Los Pinos',
      tipoCultivo: 'Fresas 1-A',
      area: '200',
      inicioCultivo: "15-10-2021",
      finCosecha: "10-06-2022",
      valorTotal: "7000000",
      accion: "ninguna"
  }
  ]

  function Cultivos() {
    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Cultivos</h2>
          </Card.Title>
          <FormCultivos/>
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
  export default Cultivos;