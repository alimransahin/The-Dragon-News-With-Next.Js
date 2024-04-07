import { getDetailsNews } from "@/utils/getDetailsNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getDetailsNews(params.newsId);
  console.log(news);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              height={500}
              width={800}
              alt="news image"
            />
            <Grid container spacing={2} className="mt-1">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  height={500}
                  width={800}
                  alt="news image"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  height={500}
                  width={800}
                  alt="news image"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box className="flex gap-2 items-center">
              <Avatar alt="Author" src={news.author.img} />
              <Typography>By{news.author.name}</Typography>
              <Typography>Published:{news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
