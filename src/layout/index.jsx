import { Grid, View } from '@adobe/react-spectrum'
import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sideBar'

function Layout({children}) {
  return (
     <>
      <Grid
      areas={[
        'header  header',
        'sidebar content',
      ]}
      columns={['1fr', '3fr']}
      rows={['size-1000', 'auto']}
      height="100vh"
      gap="size-100"
      >
      <View  gridArea="header">
        <Header/>
      </View>
      <View gridArea="sidebar">
        <Sidebar />
      </View>
      <View height={"100%"} marginTop={25} gridArea="content" overflow="auto">
        {children}
      </View>
      </Grid>
     </>
  )
}

export default Layout