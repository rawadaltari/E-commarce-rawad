import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../redux/product";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@mui/material";

export default function Products() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyData(newValue);
  };
  const theme = useTheme();

  const AllProductAPI = "products?populate=*";
  const Laptopproduct = "products?populate=*&filters[category][$eq]=LAPTOP";
  const Phoneproduct = "products?populate=*&filters[category][$eq]=PHONE";
  const [myData, setmyData] = useState(AllProductAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (data) {
    return (
      <>
        <Stack
          mt={6}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected products</Typography>
            <Typography variant="body1" fontWeight={400}>
              All our New arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected ": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btn-fluter"
              value={AllProductAPI}
              aria-label="left aligned"
            >
              All products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "12px !important", color: theme.palette.text.primary }}
              className="btn-fluter"
              value={Laptopproduct}
              aria-label="centered"
            >
              Laptop
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "12px !important", color: theme.palette.text.primary }}
              className="btn-fluter"
              value={Phoneproduct}
              aria-label="right aligned"
            >
              Phone
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Container>
          <Stack
          
            direction={"row"}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3,
              ml: 3,
              gap: 2.5,
              flexWrap: "wrap",
            }}
          >
            {data.data.map((item) => {
              return (
                <Card
                  sx={{
                    maxWidth: 345,
                    mt: 4,
                    ":hover .MuiCardMedia-root": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 250 }}
                    // @ts-ignore
                    image={`${
                      item.attributes.productimg.data[0].attributes.url
                    }`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item.attributes.producttitle}
                      </Typography>
                      <Typography component="p">
                        {item.attributes.productprice}$
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.discription}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button onClick={handleClickOpen} size="large">
                      <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                      Add to card
                    </Button>
                    <Rating
                      name="read-only"
                      value={item.attributes.rating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}

            <Dialog
              sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <IconButton
                sx={{
                  ":hover": {
                    rotate: "180deg",
                    transition: "0.3s",
                    color: "red",
                  },
                  position: "absolute",
                  top: 0,
                  right: 10,
                }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>
              <ProductDetails />
            </Dialog>
          </Stack>
        </Container>
      </>
    );
  }
}
