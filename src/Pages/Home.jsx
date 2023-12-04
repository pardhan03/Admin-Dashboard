import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BasicAccordion from '../Components/Accordion';
import BarChart from '../utils/BarChart';

const Home = () => {
  return (
    <div className="bg-gray-100">
        <Box sx={{ display: 'flex' }}>
        <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Grid xs={8}>
              <Stack spacing={2} direction="row">
               <Card sx={{ minWidth: 48+ "%", height: 193 }}>
                  <CardContent>
                    <div>
                     <CreditCardIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" >
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 48+ "%", height: 193 }}>
                  <CardContent>
                    <div>
                      <ShoppingBagIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $800.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }}>
                      <Stack direction="row">
                      <div className="mt-7 ml-7">
                        <StorefrontIcon/>
                      </div>
                      <div className="p-5">
                            <span className="font-bold">$203k</span><br/>
                            <span className="font-bold m-1">Total Income</span>
                          </div>
                      </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                      <Stack direction="row">
                        <div className="mt-7 ml-7">
                          <StorefrontIcon/>
                        </div>
                        <div className="p-5">
                              <span className="font-bold">$289k</span><br/>
                              <span className="font-bold m-1">Total Income</span>
                            </div>
                        </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20}/>
            <div className="m-2">
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Card sx={{ height: 60+"vh" }}>
                    <CardContent>
                      <BarChart/>
                    </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
              <Card sx={{ height: 60+ "vh" }}>
                    <CardContent>
                      Popular products
                      <BasicAccordion/>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
            </div>
            </Box>
        </Box>
    </div>
  )
}

export default Home;