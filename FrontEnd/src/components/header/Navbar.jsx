import {
  ExpandMore,
  ShoppingCartCheckout,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
//imported menu list
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTheme } from "@emotion/react";

export default function Navbar() {
  // start function Search
  const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.5,
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    "&:hover": {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "300px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // end function Search

  //start const Search menu selected list
  const options = ["Show All categories", "Phone", "Laptop", "Gaming"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //  End const Search menu selected list
  //color theme list
  const theme = useTheme();
  return (
    <Container sx={{ my: 3,display:"flex", flexDirection:{xs:"column",md:"row"}, justifyContent: "space-between",alignItems:"center" ,flexWrap:1}}>
      
      <Stack  sx={{ alignItems:"center", }}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commarce</Typography>
      </Stack>
      
      <Stack
      
        direction={"row"}
        sx={{
          alignItems:"center",
          borderRadius: "12px",
          borderColor: "#777",
          border: 1,
          ".MuiStack-root ": { minWidth: { xs: 200, md: 500 } }
        }}
      >
        
        <Search
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        
        <List
          component="nav"
          aria-label="Device settings"
          // @ts-ignore
          sx={{ bgcolor: "", p: "0", borderLeft: 2, borderColor: "#777" }}
        >
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{
                width: "80",
                alignItems: "center",
                "&:hover": { cursor: "pointer" },
              }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore sx={{ fontSize: "16px" }} />
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{
                fontSize: "13px",
              }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>

      <Stack direction={"row"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
