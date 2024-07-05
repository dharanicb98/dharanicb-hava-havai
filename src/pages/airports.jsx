import React, { useEffect, useState } from 'react';
import { Cell, Column, Row, Table, TableBody, TableHeader, } from 'react-aria-components';
import { ButtonGroup, Button, View, Item , ActionButton} from '@adobe/react-spectrum'; //
import AirportsDialog from '../components/dialogs/airports';
import EditPortDialog from '../components/dialogs/editPort';
import { useNavigate } from 'react-router-dom';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';

function Airports() {
  const [airportData, setAirportData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('airports')) || [];
    setAirportData(storedData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...airportData];
    updatedData.splice(index, 1); // Remove item at index
    localStorage.setItem('airports', JSON.stringify(updatedData));
    setAirportData(updatedData);
  };


  const handleEdit = (index, updatedAirport) => {
    const updatedData = [...airportData];
    updatedData[index] = updatedAirport; // Update item at index
    localStorage.setItem('airports', JSON.stringify(updatedData));
    setAirportData(updatedData);
  };


  const handleRowClick = (airportName) => {
    navigate(`/airports/${airportName}`);
  };


  return (
    <>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"end"}}><AirportsDialog setData={setAirportData}/></div>
      <Table height={"100%"}  aria-label="Airports" selectionMode="multiple">
        <TableHeader>
          <Column  isRowHeader>Name</Column>
          <Column isRowHeader>Country</Column>
          <Column isRowHeader>Code</Column>
          <Column isRowHeader>Terminal</Column>
          <Column>Action</Column>
        </TableHeader>
        <TableBody>
          {airportData.map((airport, index) => (
            <Row key={index}>
              <Cell>
              {/* <View onClick={() => handleRowClick(airport.airportName)} cursor="pointer">
                  
                </View> */}
              <ActionButton  onClick={() => handleRowClick(airport.airportName)}>{airport.airportName}</ActionButton>
              </Cell>
              {/* <Cell onClick={() => handleRowClick(airport.airportName)}>
                <View onClick={() => handleRowClick(airport.airportName)} cursor="pointer">
                  {airport.airportName}
                </View>
              </Cell> */}
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
              <Cell>{airport.terminals}</Cell>
              <Cell>
                <ButtonGroup>
                  <Button  onPress={() => handleDelete(index)}><Delete onPress={() => handleDelete(index)}/></Button>
                  {/* <Delete onPress={() => handleDelete(index)}/> */}
                  <EditPortDialog 
                    airport={airport}
                    index={index}
                    onSave={handleEdit}
                  />
                </ButtonGroup>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Airports;
