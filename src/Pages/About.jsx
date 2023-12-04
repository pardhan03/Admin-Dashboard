import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../Components/Sidebar'
import ProductList from '../Components/Product';

const About = () => {
  return (
    <>
        <Box sx={{ display: 'flex' }}>
          <Sidebar/>
          <Box height={70}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ProductList/>
            </Box>
        </Box>
    </>
  )
}

export default About