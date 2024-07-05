import React from 'react';
import { View, ListBox, Item } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <View height={"100%"} backgroundColor="gray-50"   padding="size-50" marginTop={13}>
      <ListBox aria-label="Sidebar Navigation">
        <Item >
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/airports">Airports</Link>
        </Item>

        {/* <Item>
          <Link to="/airports">Airports</Link>
        </Item>


        <Item>
          <Link to="/airports">Airports</Link>
        </Item>


        <Item>
          <Link to="/airports">Airports</Link>
        </Item>
         */}

      </ListBox>
    </View>
  );
}

export default Sidebar;
