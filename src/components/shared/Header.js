import { Box, Container, Typography } from "@mui/material";
import HeaderImage from "@/assets/The Dragon News.png";
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentData";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full">
      <Container>
        <Image
          src={HeaderImage}
          height={100}
          width={450}
          alt="Header Image"
          className="m-auto my-5"
        />
        <Typography
          color="gray"
          variant="body2"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography color="gray" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
