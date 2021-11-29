import DataTable from "react-data-table-component";

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
      <div className="App">
          <DataTable
            title="Administración de Usuarios"
            columns={columns}
            data ={filas}
            defaultSortField="title"
            pagination
            selectableRows
          />
      </div>
    );
  }
  export default AdminUsuarios;