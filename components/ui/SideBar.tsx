import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { UIContext } from "@/context/ui/UIContext";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Draft"];

const SideBar: FC = () => {
    const {SideMenuOpen, closeSideMenu} = useContext(UIContext)
  return (
    <Drawer anchor="left" open={SideMenuOpen} onClose={closeSideMenu}>
      <Box
        sx={{
          width: 250,
        }}
      >
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, i) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider/>
      <List>
          {menuItems.map((item, i) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
    </Drawer>
  );
};

export default SideBar;
