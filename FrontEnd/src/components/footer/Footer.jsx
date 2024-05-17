import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        
      }}
    >
      <Typography
        variant="h6"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"primary"}
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          variant="text"
          color="primary"
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          rawad altari
        </Button>
        @2024
      </Typography>
    </Box>
  );
}
