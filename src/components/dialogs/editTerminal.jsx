import React, { useState, useEffect } from 'react';
import { Dialog, Heading, Divider, Content, ButtonGroup, Button, TextField, DialogTrigger, ActionButton } from '@adobe/react-spectrum';
import CountryDropdown from '../select'; // Verify the correct import path for CountryDropdown
import Draw from '@spectrum-icons/workflow/Draw';

function EditTerminal({ item, index, setUpdate, totalData, id}) {
  const [data, setData] = useState({ ...item });

  const handleInputChange = (value, field) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = (event, ) => {
    console.log('calledd----', totalData)
    event.preventDefault();
    
     const updatedItems = [...totalData];
     updatedItems[id] = { ...data  };
 
     setUpdate(updatedItems);
  };

 
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
                label="Terminal Title"
                value={data?.title}
                onChange={(value) => handleInputChange(value, 'title')}
                autoFocus
                width="100%"
                marginBottom="size-200"
              />
              <TextField
                label="Terminal Description"
                value={data?.description}
                onChange={(value) => handleInputChange(value, 'description')}
                width="100%"
                marginBottom="size-200"
              />
            
              
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button onPress={close} variant="cta" type="submit">
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

export default EditTerminal;
