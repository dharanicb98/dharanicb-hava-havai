import React, { useState, useEffect } from 'react';
import { Dialog, Heading, Divider, Content, ButtonGroup, Button, TextField, DialogTrigger, ActionButton } from '@adobe/react-spectrum';
import CountryDropdown from '../select'; // Verify the correct import path for CountryDropdown
import Draw from '@spectrum-icons/workflow/Draw';

function EditPortDialog({ airport, index, onSave }) {
  const [airportData, setAirportData] = useState({ ...airport });

  useEffect(() => {
    setAirportData({ ...airport });
  }, [airport]);

  const handleInputChange = (value, field) => {
    setAirportData({ ...airportData, [field]: value });
  };

  const handleCountryChange = (value) => {
    console.log('value', value)
    setAirportData({ ...airportData, country: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(index, airportData);
  };

  console.log('airportData', airportData)

  return (
    <DialogTrigger>
      <ActionButton><Draw /></ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Edit Airport</Heading>
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
                type="number"
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

export default EditPortDialog;
