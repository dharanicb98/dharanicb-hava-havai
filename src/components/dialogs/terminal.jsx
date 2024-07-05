import React, { useState } from 'react';
import { Dialog, Heading, Divider, Content, ButtonGroup, Button, TextField, DialogTrigger, ActionButton } from '@adobe/react-spectrum';

function TerminalDialog({ airport, setAirport, handleEditTerminal, airportName }) {
  const [newTerminal, setNewTerminal] = useState({ title: '', description: '', imageUrl: '' });
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // For resetting file input

  const handleInputChange = (value, field) => {
    setNewTerminal({ ...newTerminal, [field]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewTerminal({ ...newTerminal, imageUrl: reader.result });
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTerminal.title && newTerminal.description) {
      const updatedTerminals = [...airport, newTerminal];
      setAirport(updatedTerminals);
      setNewTerminal({ title: '', description: '', imageUrl: '' });
      setFileInputKey(Date.now()); // Reset file input key to clear the input
      // Close the dialog (if needed)
    }
  };

  return (
    <DialogTrigger>
      <ActionButton>+ Add</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Create Terminal</Heading>
          <Divider />
          <Content>
            <form style={{ padding: '0 20px' }} onSubmit={handleSubmit}>
              <TextField
                label="Terminal Title"
                value={newTerminal.title}
                onChange={(value) => handleInputChange(value, 'title')}
                autoFocus
                width="100%"
                marginBottom="size-200"
              />
              <TextField
                label="Terminal Description"
                value={newTerminal.description}
                onChange={(value) => handleInputChange(value, 'description')}
                width="100%"
                marginBottom="size-200"
              />
              <input
                type="file"
                key={fileInputKey}
                onChange={handleFileChange}
                accept="image/*"
                style={{ marginBottom: '8px' }}
              />
              {newTerminal.imageUrl && (
                <img src={newTerminal.imageUrl} alt="Terminal" style={{ width: '100%', marginBottom: '8px' }} />
              )}
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

export default TerminalDialog;
