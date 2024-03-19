"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";

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

function Nabvar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} height={100} width={100} alt="Logo" />
          <Box className="w-full text-center">
            {NavItems.map((item) => (
              <Link key={item} href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{ "& svg": { color: "white" } }}>
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nabvar;
