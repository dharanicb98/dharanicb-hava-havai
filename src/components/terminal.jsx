import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonGroup, Button, TextField, DialogTrigger, ActionButton ,Flex, Text, View} from '@adobe/react-spectrum';
import TerminalDialog from './dialogs/terminal';
import Delete from '@spectrum-icons/workflow/Delete';
import Draw from '@spectrum-icons/workflow/Draw';
import EditTerminal from './dialogs/editTerminal';

function TerminalDetails() {
  const { airportName } = useParams();
  console.log('----', airportName)
  const [airport, setAirport] = useState([]);

  function onDelete(idx) {
    console.log('inde', idx)
    const updatedData = [...airport];
    updatedData.splice(idx, 1); 
    setAirport(updatedData);
  }




  console.log('----', airport)


  

  return (
   
      <div>
        <h1>{airportName} - Terminals</h1>
        <TerminalDialog setAirport={setAirport} airportName={airportName} airport={airport}/>
        <View margin="size-200">
      {airport && airport.map((data, idx) => (
        <View key={idx} className="card" marginTop={20}>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
          {data?.imageUrl && <img src={data?.imageUrl} alt={data?.title} width={100} height={100} />}
            <Flex direction="column" gap="size-100">
           
              <Text UNSAFE_className="card-title">Title: {data?.title}</Text>
              <Text UNSAFE_className="card-description">Description: {data?.description}</Text>
             
            </Flex>
            <Flex direction="row" gap="size-100">
              <EditTerminal item={data} id={idx} setUpdate={setAirport} totalData={airport} />
              <ActionButton isQuiet >
              <Button  onPress={() => onDelete(idx)}> <Delete onPress={() => onDelete(idx)}/></Button>
               
              </ActionButton>
            </Flex>
          </Flex>
        </View>
      ))}
    </View>
      </div>
    ) 
   
  
}

export default TerminalDetails;
