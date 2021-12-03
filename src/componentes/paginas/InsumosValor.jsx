import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import BottonNew from '../navegacion/BottonNew';

const columns = [
    {
      name: "Tipo Insumo",
      selector: "tipoInsumo",
      sortable: true
    },
    {
      name: "Descripción",
      selector: "descripcion",
      sortable: true
    },
    {
      name: "Unidad",
      selector: "unidad",
      sortable: true
    },
    {
      name: "Valor Unidad",
      selector: "valorUnidad",
      sortable: true
    },
    {
      name: "A partir de",
      selector: "fechaInicioTarifa",
      sortable: true
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
        tipoInsumo: 'Semilla',
        descripcion: 'Maiz popocho',
        unidad: 'Kg',
        valorUnidad: "25000",
        fechaInicioTarifa: "01-12-2020",
        accion: "ninguna"
    },
    {
        id: 2,
        tipoInsumo: 'Fertilizante',
        descripcion: 'Triple 15',
        unidad: 'Kg',
        valorUnidad: "6500",
        fechaInicioTarifa: "01-08-2021",
        accion: "ninguna"
    },
    {
        id: 3,
        tipoInsumo: 'Agua',
        descripcion: 'Agua de pozo profundo',
        unidad: 'M3',
        valorUnidad: "500",
        fechaInicioTarifa: "01-10-2021",
        accion: "ninguna"
    }
  ]

  function InsumosValor(props) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>Valor Insumos</h2>
          </Card.Title>
          <BottonNew />
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data ={filas}
              defaultSortField="title"
              pagination
              selectableRows
            />
          </div>
        </Card.Body>
      </Card>
    );
  }
  export default InsumosValor;