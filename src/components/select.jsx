import React from 'react';
import { Picker, Item, View, Text } from '@adobe/react-spectrum';

const countries = [
  { code: 'US', name: 'United States', flagUrl: 'https://www.countryflags.io/us/flat/64.png' },
  { code: 'CA', name: 'Canada', flagUrl: 'https://www.countryflags.io/ca/flat/64.png' },
  { code: 'GB', name: 'United Kingdom', flagUrl: 'https://www.countryflags.io/gb/flat/64.png' },
  // Add more countries as needed
];

const CountryDropdown = ({ value, onChange }) => {

  const handleChange = (countryCode) => {
    console.log('country code',countryCode)
    onChange(countryCode);
  };

  return (
    <Picker
      items={countries}
      itemKey="name"
      label="Country"
      selectedItem={countries.find((country) => country.name === value)}
      onSelectionChange={(item) => handleChange(item)}
      width="100%"
      marginBottom="size-200"
      value={value}
    >
      {(item) => (
        <Item key={item.name}>
          {console.log('---------', item)}
          <View alignItems="center" gap="size-100">
            <Text>{item.name}</Text>
          </View>
        </Item>
      )}
    </Picker>
  );
};

export default CountryDropdown;
