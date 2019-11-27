import React, {useState, useEffect} from 'react';
import Datatable from 'react-data-table-component'
import { Row, Col } from 'react-grid-system';
import api from './services/API'
import Menu from './components/menu'


function App() {
  const [ dataTable, setdataTable ] = useState([])

  useEffect(() => {
    api.then((data) => {
      setdataTable(data.data.infos.retorno.results.forecast)
    })
  },[]) 

  const columns = [
    {
      name: 'Condition',
      selector: 'condition',
      sortable: true,
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Weekday',
      selector: 'weekday',
      sortable: true,
    },
    {
      name: 'Max',
      selector: 'max',
      sortable: true,
    },
    {
      name: 'Min',
      selector: 'min',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
    },
  ];
  
  const styleMenu = {
    heigth: "100vh"
  }


  return (
    <div className="App">  
    <Row>
        <Col sm={2} style={styleMenu}>
          <Menu />
        
        </Col>
        <Col sm={10} >
          <Datatable 
            title="Dashboard"
            columns={columns}
            data={dataTable}
          />
        </Col>
      </Row>         
    </div>
  );
}



export default App;
