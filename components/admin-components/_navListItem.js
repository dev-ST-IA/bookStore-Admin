import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useRouter} from 'next/router'

const NavListItem = (props) => {
  const router = useRouter()

  const handleClick = () => {
      router.push(props.link)

  }
  return (
    <React.Fragment>
  
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
         {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
  
    </React.Fragment>
  )
}

export default NavListItem

