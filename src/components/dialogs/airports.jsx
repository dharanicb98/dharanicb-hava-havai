import React, { useState } from 'react';
import { Dialog, Heading, Divider, Content, ButtonGroup, Button, TextField, DialogTrigger, ActionButton } from '@adobe/react-spectrum';
import CountryDropdown from '../select'; // Verify the correct import path for CountryDropdown

function AirportsDialog({setData}) {
  const initialAirportData = {
    airportName: '',
    country: '',
    code: '',
    terminals: ''
  };

  const [airportData, setAirportData] = useState({ ...initialAirportData });

  const handleInputChange = (value, field) => {
  
    // const value = event.target.value;
    setAirportData({ ...airportData, [field]: value });
  };

  const handleCountryChange = (value) => {
    setAirportData({ ...airportData, country: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Retrieve existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('airports')) || [];
  
    // Add new airportData to existingData
    existingData.push(airportData);
  
    // Store updated data back into localStorage
    localStorage.setItem('airports', JSON.stringify(existingData));
  
    setData((prev) => ([...prev, airportData]))
    // Clear form fields and reset state
    setAirportData({ ...initialAirportData });


  
    // Optionally close the dialog
  };


  return (
    <DialogTrigger>
      <ActionButton>+ Add</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Create Airport</Heading>
          <Divider />
          <Content>
            <form style={{ padding: '0 20px' }} onSubmit={handleSubmit}>
              <TextField
                label="Airport Name"
                value={airportData.airportName}
                onChange={(value) => handleInputChange(value, 'airportName')}
                autoFocus
                width="100%"
                marginBottom="size-200"
              />
              <CountryDropdown
                value={airportData.country}
                onChange={(value) => handleInputChange(value, 'country')}
                marginBottom="size-200"
              />
              <TextField
                label="Code"
                value={airportData.code}
                onChange={(value) => handleInputChange(value, 'code')}
                width="100%"
                marginBottom="size-200"
              />
              <TextField
                label="Terminals"
                value={airportData.terminals}
                onChange={(value) => handleInputChange(value, 'terminals')}
                width="100%"
                marginBottom="size-200"
                type='number'
              />
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button variant="cta" type="submit" onPress={close}>
                  Confirm
                </Button>
              </ButtonGroup>
            </form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}

export default AirportsDialog;
