import React from 'react';
import { View, Flex } from '@adobe/react-spectrum';

function Header() {
  return (
    <View 
      backgroundColor="blue-600"
      // borderWidth={1}
      padding="size-200" 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1}
    >
      <Flex>
        <h1>Hava Havai</h1>
      </Flex>
    </View>
  );
}

export default Header;
