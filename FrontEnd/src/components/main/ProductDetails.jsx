import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
       
      }}
    >
      <Box display={"flex"}>
        <img width={350} height={300} src="src/Images/pexels-life-of-pix-7974.jpg" alt="" />
      </Box>
      <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
        <Typography variant="h5">Laptop Lenovo vivo Book</Typography>
        <Typography
          sx={{ my: 0.4, fontSize: "22px", color: "crimson" }}
          variant="body1"
        >
          120$
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          debitis! Lorem ipsum dolor sit amet consectetur Officiis magnam a
          
        </Typography>

        <Stack  sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
          {["src/Images/OIP 2.jpg", "src/Images/OIP.jpg"].map((item) => {
            return (
              <img
                width={90}
                style={{ borderRadius: 3 }}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>
        <Button sx={{ textTransform: "capitalize", mb:{xs:1,sm:0} }} variant="contained">
          <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}
