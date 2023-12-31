import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { FC, useContext } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from "@/context/ui/UIContext";

const Navbar:FC = () => {
    const {openSideMenu} = useContext(UIContext)
  return (
    <AppBar position="sticky" elevation={0}>
        <Toolbar>
            <IconButton onClick={openSideMenu} size="large" edge="start">
                <MenuOutlinedIcon/> 
            </IconButton>
            <Typography variant="h6">OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar