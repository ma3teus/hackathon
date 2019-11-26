import React, {useState, useEffect} from 'react';
import Datatable from 'react-data-table-component'
import { Container, Row, Col } from 'react-grid-system';
import api from './services/API'





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
  
   

  
  return (
    <div className="App">  
    <Container>
      <Row>
        <Col sm={1}>
          Menu
        </Col>
        <Col sm={11}>
          <Datatable 
            title="Teste"
            columns={columns}
            data={dataTable}
          />
        </Col>
      </Row>
    </Container>          
    </div>
  );
}

export default App;
