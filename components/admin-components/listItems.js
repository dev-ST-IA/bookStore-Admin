import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Test from './Test';
import NavItems from './_navListItem'


export const mainListItems = (
  <React.Fragment>
    <NavItems icon={<DashboardIcon/>} text={'Dashboard'} link={'/dashboard'} />
    <NavItems icon={<ShoppingCartIcon />} text={'Orders'} link={'/orders'} />
    <NavItems icon={<LayersIcon />} text={'Books'} link={'/books'} />
    <NavItems icon={<PeopleIcon />} text={'Customers'} link={'/customers'} />
    <NavItems icon={<AssignmentIcon />} text={'User'} link={'/user'} />
    <NavItems icon={<BarChartIcon />} text={'Reports'} link={'/reports'} />
  </React.Fragment>
);
