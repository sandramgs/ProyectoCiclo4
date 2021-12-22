import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import FormInsumos from '../formularios/FormInsumos';
import FormConfirmar from "../formularios/FormConfirmar";
import { get } from "../../api/http"
import { useState, useEffect } from "react";


  function InsumosValor(props) {

    const [filas,setFilas] = useState([])

    const columns = [
      {
        name: "Tipo Insumo",
        selector: "tipo_insumo",
        sortable: true,
      },
      {
        name: "Descripción",
        selector: "descripcion",
        sortable: true
      },
      {
        name: "Unidad",
        selector: "unidad_medida",
        sortable: true
      },
      {
        name: "Valor Unidad",
        selector: "valor_unidad",
        sortable: true
      },
      {
        name: "A partir de",
        selector: "valido_desde",
        sortable: true
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

<<<<<<< HEAD
    useEffect(() => {
      get("insumos/todos").then((respuesta) => {
        setFilas(respuesta)
      })
    },[]
    );
    
    let filasTabla = [];

    if (filas.length > 0) {
      filasTabla = filas.map((insumo) => {
      const fila = { ...insumo, 
        editar: <FormInsumos title="Editar" 
        item={{id: insumo._id,
        tipoInsumo: insumo.tipo_insumo,
        descripcion: insumo.descripcion,
        unidad: insumo.unidad_medida,
        valorUnidad: insumo.valor_unidad,
        fechaInicioTarifa: insumo.valido_desde}}
        setFilas= {setFilas} filas={filas}/>,
        eliminar: <FormConfirmar endpoint="insumos/borrar" 
        id={insumo._id} setFilas= {setFilas} filas={filas}/>}
      return fila;
    })}
    ;
=======
    const filas = [
      {
          id: 1,
          tipoInsumo: 'Semilla',
          descripcion: 'Maiz popocho',
          unidad: 'Kg',
          valorUnidad: "25000",
          fechaInicioTarifa: "01-12-2020",
          editar: <FormInsumos title="Editar" item={{id: 1,
            tipoInsumo: 'Semilla',
            descripcion: 'Triple 15',
            unidad: 'Kg',
            valorUnidad: "25000",
            fechaInicioTarifa: "01-12-2021"}}/>,
          eliminar: <FormConfirmar item={{id: 1}}/>        
      },
      {
          id: 2,
          tipoInsumo: 'Fertilizante',
          descripcion: 'Triple 15',
          unidad: 'Kg',
          valorUnidad: "6500",
          fechaInicioTarifa: "01-08-2021",
          accion: "ninguna",
          editar: <FormInsumos title="Editar" item={{id: 2,
            tipoInsumo: 'Fertilizante',
            descripcion: 'Triple 15',
            unidad: 'Kg',
            valorUnidad: "6500",
            fechaInicioTarifa: "01-08-2021"}}/>,
          eliminar: <FormConfirmar item={{id: 2}}/>
      },
      {
          id: 3,
          tipoInsumo: 'Agua',
          descripcion: 'Agua de pozo profundo',
          unidad: 'M3',
          valorUnidad: "500",
          fechaInicioTarifa: "01-10-2021",
          editar: <FormInsumos title="Editar" item={{id: 3,
            tipoInsumo: 'Agua',
            descripcion: 'Agua de pozo profundo',
            unidad: 'M3',
            valorUnidad: "500",
            fechaInicioTarifa: "01-10-2021"}}/>,
          eliminar: <FormConfirmar item={{id: 3}}/>
      }
    ]
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4

    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Valor Insumos</h2>
          </Card.Title>
          <FormInsumos title="Nuevo" setFilas= {setFilas} filas={filas}/>
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable 
              columns={columns}
              data ={filasTabla}
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

  export default InsumosValor;