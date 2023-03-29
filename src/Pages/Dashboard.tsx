import { Box, Card, Grid, Link, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { add_product, country_sales, datagraph, dollar, layer, money_bag, star } from '../Assets/Images'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function createData(
  invoice: number,
  name: string,
  email: string,
  date: string,
  status: any,
  amount: string,
) {
  return { invoice, name, email, date, status, amount };
}

const rows = [
  createData(651535, 'Public Adjusting Firm', 'georgia.young@example.com ', '24 May, 2020', "Paid", ' $47,800 '),
  createData(558612, 'Other', 'jessica.hanson@example.com', '24 May, 2020', "Paid", ' $98,000 '),
  createData(558612, 'Vendor', 'alma.lawson@example.com ', '8 Sep, 2020', "Paid", ' $20,900 '),
  createData(558612, 'Property Management Company', 'kenzi.lawson@example.com', '22 Oct, 2020', "Paid", ' $10,570 '),
  createData(651535, 'Subcontractor Company', 'jackson.graham@example.com', '1 Feb, 2020', "Failed", '$10,200 '),
  createData(653518, 'Mortgage Company', 'felicia.reid@example.com', '22 Oct, 2020', "Pending", ' $12,600 '),
  createData(487441, 'TPA', 'dolores.chambers@example.com', '21 Sep, 2020', "Paid", ' $11,170 '),
  createData(267400, 'Fire Department', 'nevaeh.simmons@example.com', '17 Oct, 2020', "Failed", ' $28,000 '),
  createData(449003, 'Insurance Carrier', 'curtis.weaver@example.com', '21 Sep, 2020', "Paid", ' $10,000 '),
];

export default function Dashboard() {

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function low(s: any) {
    return s.toLowerCase();
  }

  return (
    <div className='main-container'>
      <Header />
      <div className='wrapper'>
        <Sidebar />
        <div className='main-content'>
          <Typography component="h2" variant="h4" className='page-title'>Dashboard</Typography>
          {/* Card starts
        ------------------------------------------------------------------------------------------------------------------------------- */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card elevation={0}>
                <Grid container >
                  {/* <Grid item >
                  <Box className='child'> */}
                  <Grid item xs={6} sm={6} md={4} xl>
                    <Box className=" sticker" >
                      <Box><img src={star} alt="star" /></Box>
                      <Box className="details-box">
                        <Typography component="h3" variant="h5" className='card-numbers'>23,456</Typography>
                        <Typography component="h6" variant="body2" className='card-text'>New Products</Typography>
                      </Box>
                    </Box>  
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} xl>
                    <Box className=" sticker" >
                      <Box><img src={add_product} alt="add product" /></Box>
                      <Box className="details-box">
                        <Typography component="h3" variant="h5" className='card-numbers'>2345</Typography>
                        <Typography component="h6" variant="body2" className='card-text'>Added Products </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} xl >
                    <Box className=" sticker border-right" >
                      <Box><img src={layer} alt="layer image" /></Box>
                      <Box className="details-box">
                        <Typography component="h3" variant="h5" className='card-numbers'>32,456</Typography>
                        <Typography component="h6" variant="body2" className='card-text'>Total Products</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} xl >
                    <Box className=" sticker border-right" >  
                      <Box><img src={dollar} alt="dollar image" /></Box>
                      <Box className="details-box">
                        <Typography component="h3" variant="h5" className='card-numbers'>5678</Typography>
                        <Typography component="h6" variant="body2" className='card-text'>Today's Sale</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} xl >
                    <Box className=" sticker noborder border-right" >
                      <Box><img src={money_bag} alt="bag image" /></Box>
                      <Box className="details-box">
                        <Typography component="h3" variant="h5" className='card-numbers'>33,5342</Typography>
                        <Typography component="h6" variant="body2" className='card-text'>Total Sale</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  {/* </Box>
                  </Grid> */}
                </Grid>
              </Card>
            </Grid>
            {/* Data graph content starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid item xs={12} sm={12} lg={8} className="sales">
              <Card elevation={0} className='sales-card' >
                <Box className="sales-heading">
                  <Typography component="h3" variant="h5" className='sales-text'>Sales</Typography>
                  <Tabs value={value} onChange={handleChange} className='dash-tabs'>
                    <Tab label="Weekly" />
                    <Tab label="Monthly" />
                    <Tab label=" Yearly" />
                  </Tabs>
                </Box>
                <Box className="img datagraph">
                  <img src={datagraph} alt="data graph" className=" img-fluid" />
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} className="sales" >
              <Card elevation={0} className='sales-card'>
                <Typography component="h3" variant="h5" className='sales-text'>Sales by Country</Typography>
                <Box className="country-sales-horizontal">
                  <Box className="img cycle">
                    <img src={country_sales} alt="country sales" className="pie-chart img-fluid" />
                    <Box className="cycle-center">
                      <Typography component="h6" variant="body1" className='frequency'>11,278</Typography>
                      <Typography component="h6" variant="body2" className='card-text'>USA</Typography>
                    </Box>
                  </Box>
                  <Box className="country">
                    <Box className="card-text">
                      <Typography component="h6" variant="body2" className=' props america'>United States of America</Typography>
                      <Typography component="h6" variant="body2" className=' props russia'>Russia</Typography>
                    </Box>
                    <Box className="card-text">
                      <Typography component="h6" variant="body2" className=' props canada'>Canada</Typography>
                      <Typography component="h6" variant="body2" className=' props india'>India</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
            {/* Table content starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid item xs={12} className=''>
              <Card elevation={0} className='sales-card'>
                <Box className="sales-heading">
                  <Typography component="h3" variant="h5" className='sales-text'>Invoices</Typography>
                  <Box onClick={preventDefault}>
                    <Link href="#" className='views'> {'View All'} </Link>
                  </Box>
                </Box>
                <TableContainer >
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                    <TableHead >
                      <TableRow>
                        <TableCell component="th" align="left">Invoice</TableCell>
                        <TableCell component="th" align="left">Company Name</TableCell>
                        <TableCell component="th" align="left">Email</TableCell>
                        <TableCell component="th" align="left">Due Date</TableCell>
                        <TableCell component="th" align="left">Status</TableCell>
                        <TableCell component="th" align="left">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody >
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell scope="row">{row.invoice}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="left">{row.date}</TableCell>
                          <TableCell align="left">
                            <span className={`${low(row.status)}`}>
                              {row.status}
                            </span>
                            </TableCell>
                          <TableCell align="left">{row.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
