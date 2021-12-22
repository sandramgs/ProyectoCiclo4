import DataTable from "react-data-table-component";
import FormCultivos from "../formularios/FormCultivos";
import FormConfirmar from "../formularios/FormConfirmar";
import { Card } from "react-bootstrap";
<<<<<<< HEAD
import { get } from "../../api/http"
import { useState, useEffect } from "react";

function Cultivos() {
  const [filas,setFilas] = useState([])

=======
import FormConfirmar from "../formularios/FormConfirmar";

function Cultivos() {
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
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
<<<<<<< HEAD
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
=======
      selector: "valorTotal",
      sortable: true,
      right: true
    },
    {
      name: "Editar",
      selector: "editar",
      right : "true",
    },
    {
      name: "Eliminar",
      selector: "eliminar",
      right: "true",
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
        accion: "ninguna",
        editar: <FormCultivos title="Editar" item={{id: 1,
          predio: '01 - Finca Maizal',
          tipoCultivo: 'Maiz popocho',
          area: '50',
          inicioCultivo: "01-01-2022",
          finCosecha: "01-06-2021",
          valorTotal: "4500000"}}
        />,
        eliminar: <FormConfirmar item={{id: 1}}/>
    },
    {
        id: 2,
        predio: '02 - Hacienda Patillal',
        tipoCultivo: 'Frijol rojo',
        area: '100',
        inicioCultivo: "01-01-2021",
        finCosecha: "05-06-2021",
        valorTotal: "6100000",
        accion: "ninguna",
        editar: <FormCultivos title="Editar" item={{id: 1,
          predio: '02 - Hacienda Patillal',
          tipoCultivo: 'Frijol rojo',
          area: '100',
          inicioCultivo: "01-01-2021",
          finCosecha: "05-06-2021",
          valorTotal: "6100000",
          accion: "ninguna"}}
        />,
        eliminar: <FormConfirmar item={{id: 1}}/>
    },
    {
        id: 3,
        predio: '20 - Finca La Prosperidad',
        tipoCultivo: 'Maiz popocho',
        area: '200',
        inicioCultivo: "01-12-2021",
        finCosecha: "01-06-2022",
        valorTotal: "9000000",
        accion: "ninguna",
        editar: <FormCultivos title="Editar" item={{id: 1,
          predio: '20 - Finca La Prosperidad',
          tipoCultivo: 'Maiz popocho',
          area: '200',
          inicioCultivo: "01-12-2021",
          finCosecha: "01-06-2022",
          valorTotal: "9000000",
          accion: "ninguna"}}
        />,
        eliminar: <FormConfirmar item={{id: 1}}/>
    },
    {
      id: 4,
      predio: '04 - Finca Italia',
      tipoCultivo: 'Algodón',
      area: '500',
      inicioCultivo: "01-11-2021",
      finCosecha: "01-05-2022",
      valorTotal: "7700000",
      accion: "ninguna",
      editar: <FormCultivos title="Editar" item={{id: 1,
        predio: '04 - Finca Italia',
        tipoCultivo: 'Algodón',
        area: '500',
        inicioCultivo: "01-11-2021",
        finCosecha: "01-05-2022",
        valorTotal: "7700000",
        accion: "ninguna"}}
      />,
      eliminar: <FormConfirmar item={{id: 1}}/>
  },
  {
      id: 5,
      predio: '05 - Hacienda Naranjal',
      tipoCultivo: 'Naranja Tangelo',
      area: '1000',
      inicioCultivo: "01-08-2021",
      finCosecha: "05-08-2023",
      valorTotal: "1500000",
      accion: "ninguna",
      editar: <FormCultivos title="Editar" item={{id: 1,
        predio: '05 - Hacienda Naranjal',
        tipoCultivo: 'Naranja Tangelo',
        area: '1000',
        inicioCultivo: "01-08-2021",
        finCosecha: "05-08-2023",
        valorTotal: "1500000",
        accion: "ninguna"}}
      />,
      eliminar: <FormConfirmar item={{id: 1}}/>
  },
  {
      id: 6,
      predio: '21 - Finca Los Pinos',
      tipoCultivo: 'Fresas 1-A',
      area: '200',
      inicioCultivo: "15-10-2021",
      finCosecha: "10-06-2022",
      valorTotal: "7000000",
      accion: "ninguna",
      editar: <FormCultivos title="Editar" item={{id: 1,
        predio: '21 - Finca Los Pinos',
        tipoCultivo: 'Fresas 1-A',
        area: '200',
        inicioCultivo: "15-10-2021",
        finCosecha: "10-06-2022",
        valorTotal: "7000000",
        accion: "ninguna"}}
      />,
      eliminar: <FormConfirmar item={{id: 1}}/>
  }
  ]

  
    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Cultivos</h2>
          </Card.Title>
          <FormCultivos title="Nuevo"/>
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data={filas}
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
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
