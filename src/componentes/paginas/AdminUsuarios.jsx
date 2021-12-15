import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap"

const columns = [
    {
      name: "Identificación",
      selector: "identificacion",
      sortable: true
    },
    {
      name: "Nombre",
      selector: "nombre",
      sortable: true
    },
    {
      name: "Correo",
      selector: "correo",
      sortable: true
    },
    {
      name: "Rol",
      selector: "rol",
      sortable: true
    },
    {
      name: "Estado",
      selector: "estado",
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
        identificacion: '65777999',
        nombre: 'Omar Pulido',
        correo: 'opulido@cultivarte.com',
        rol: 'Gestor de cultivo',
        estado: "Activo",
        accion: "ninguna"
    },
    {
        id: 1,
        identificacion: '65991111',
        nombre: 'Levinson Mozo',
        correo: 'lmozo@cultivarte.com',
        rol: 'Configurador',
        estado: "Activo",
        accion: "ninguna"
    }
  ]

  function AdminUsuarios(props) {
    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Administración de Usuarios</h2>
          </Card.Title>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data ={filas}
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
  export default AdminUsuarios;