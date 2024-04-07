import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import TopNews from "@/assets/top-news.png";
import TopNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={TopNews} height={100} width={800} alt="top news" />
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
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={TopNews2} height={100} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="text-white bg-red-600 inline-block px-2 my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs al ELon MuskSays Tesla Likely to Accept it
                  Again
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
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={TopNews2} height={100} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="text-white bg-red-600 inline-block px-2 my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs al ELon MuskSays Tesla Likely to Accept it
                  Again
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
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={TopNews2} height={100} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="text-white bg-red-600 inline-block px-2 my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs al ELon MuskSays Tesla Likely to Accept it
                  Again
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
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={TopNews2} height={100} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="text-white bg-red-600 inline-block px-2 my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs al ELon MuskSays Tesla Likely to Accept it
                  Again
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
