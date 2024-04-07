import { getCategoriesNews } from "@/utils/getCategoriesNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoriesNews(searchParams.category);
  console.log(data);
  return (
    <Box className="my-5">
      <h2>
        Total{" "}
        <span className="font-bold">
          {searchParams.category.charAt(0).toUpperCase() +
            searchParams.category.slice(1)}
        </span>
        :{}
        {data.length}
      </h2>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid item xs={6} key={news.id}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": { width: "100%", height: "250px" },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      height={100}
                      width={800}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <span className="text-white bg-red-600  px-2 my-5 rounded">
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2">
                      By {news.author.name} -{news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 300
                        ? news.details.slice(0, 300) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNewsPage;
