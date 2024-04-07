import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SideBarImage from "@/assets/side-top-news.png";
import SideBarDownImage from "@/assets/side-bottom-img.png";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <Box className="mt-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={SideBarImage}
                height={100}
                width={800}
                alt="top news"
              />
            </CardMedia>
            <CardContent>
              <p className="text-white bg-red-600 inline-block px-2 my-5 rounded">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs al ELon MuskSays Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-3">
                By Imran Hossain -April 04 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <List sx={{ width: "100%" }}>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start " className="px-0">
          <Avatar variant="rounded" className="h-12 w-12 mr-2">
            R
          </Avatar>
          <ListItemText>
            <Typography>Brunch this weekend?</Typography>
            <Typography color="gray" variant="body2">
              March,8 2024
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start " className="px-0">
          <Avatar variant="rounded" className="h-12 w-12 mr-2">
            R
          </Avatar>
          <ListItemText>
            <Typography>Brunch this weekend?</Typography>
            <Typography color="gray" variant="body2">
              March,8 2024
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start " className="px-0">
          <Avatar variant="rounded" className="h-12 w-12 mr-2">
            R
          </Avatar>
          <ListItemText>
            <Typography>Brunch this weekend?</Typography>
            <Typography color="gray" variant="body2">
              March,8 2024
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start " className="px-0">
          <Avatar variant="rounded" className="h-12 w-12 mr-2">
            R
          </Avatar>
          <ListItemText>
            <Typography>Brunch this weekend?</Typography>
            <Typography color="gray" variant="body2">
              March,8 2024
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start " className="px-0">
          <Avatar variant="rounded" className="h-12 w-12 mr-2">
            R
          </Avatar>
          <ListItemText>
            <Typography>Brunch this weekend?</Typography>
            <Typography color="gray" variant="body2">
              March,8 2024
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Image
        src={SideBarDownImage}
        alt="SideBarDownImage"
        height={500}
        width={400}
      />
    </>
  );
};

export default Sidebar;
