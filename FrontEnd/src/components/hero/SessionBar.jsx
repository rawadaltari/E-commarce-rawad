import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import { useTheme } from "@mui/material";

export default function SessionBar() {
  const theme =useTheme()
  return (
    <Container sx={{ bgcolor:theme.palette.mode ==="dark"?"#000":"#fff" }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        sx={{ display: "flex", alignItems: "center", mt: 3, flexWrap: "wrap" }}
      >
        <BoxIcon
          icon={<ElectricBoltIcon />}
          title={"fast Delivery"}
          subtitle={"Start from 10$"}
        />
        <BoxIcon
          icon={<AssistantOutlinedIcon />}
          title={"Money Guarante"}
          subtitle={"7 Dyas Back"}
        />
        <BoxIcon
          icon={<AttachEmailOutlinedIcon />}
          title={"365 Days"}
          subtitle={"For Free reutrn"}
        />
        <BoxIcon
          icon={<AutoAwesomeMosaicOutlinedIcon />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}
const BoxIcon = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        width: "200px",
        gap: 3,
        justifyContent:useMediaQuery('(min-width:600px)')?"center":"left",
        py: 1.5,
      }}
    >
      <Box>{icon}</Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            
            color: theme.palette.text.primary,
            
            fontSize: "20px",
            fontWeight: 300,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "20px",
            fontWeight: 300,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
