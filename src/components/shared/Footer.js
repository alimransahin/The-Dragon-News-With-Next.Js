import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const NavItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Pages",
    path: "/pages",
  },
  {
    route: "Category",
    path: "/category",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];
const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          sx={{ "& svg": { color: "white" } }}
          className="w-full text-center"
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {NavItems.map((item) => (
            <Link key={item} href={item.path}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @2024 THe Dragon News. Design By Imran
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
