import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

import UserDefaultImg from "../../imgs/userDefaultImg.jpg";
import JackPot from "../../imgs/JackPot.gif";

const TeamCard = ({ data }) => {
  return (
    <Grid container sx={{ px: 2, mb: 3 }} spacing={2}>
      <Grid item md={6} sx={{ m: "auto" }}>
        <Box
          component="img"
          src={data.image}
          alt=""
          width="350px"
          height="300px"
        />
      </Grid>
      <Grid item md={6} sx={{ m: "auto", bgcolor: "rgba(0,0,0,0.5)", p: 3 }}>
        <Box sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h6">{data.name}</Typography>
          <Typography component="span" variant="body1">
            ๐น ์ข์ํ๋ ์นตํ์ผ -
          </Typography>
          <Typography component="span" variant="h6" color="violet">
            {" "}
            {data.cocktail}
          </Typography>

          <Typography variant="body1">{data.introduce}</Typography>
          <br />

          <Typography variant="body2">{data.impression}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const team7 = [
  {
    name: "๊น๋ํ",
    impression:
      "๊ธฐํ๋ถํฐ ๋น๋์ ํด ๋๊ฐ๋ ๊ฒ ์ฝ์ง ์๋ค๋ ๊ฒ์ ๋๊ผ์ต๋๋ค. ์ด์ ์ ์ธ ํ์๋ค๊ณผ ํจ๊ป ํด์ ๋ง์ด ๋ฐฐ์ฐ๊ณ  ๋๊ธฐ๋ถ์ฌ๋ ํ์คํ๊ฒ ๋ ๊ธฐ๊ฐ์ด์์ต๋๋ค. ๋ง์ด ๋ฐฐ์ฐ๊ณ  ์ง์น์ง ์์์ผ๋ฉด ์ข๊ฒ ์ต๋๋ค.",
    introduce:
      "๋จ์์ ์ํ ๋๋ถ. ๋จ์์ ์นตํ์ผ. GodFather ๐ ๋จ์ ์ค์ ๋จ์๐  ๊น.๋.ํ. โ(๏พใฎ๏พโ)โ(๏พใฎ๏พโ) ์ด์์๋๋ค. ์์ง ๋ง์ธ์ ์ง์งํฉ๋๋ค.",
    cocktail: "GodFather",
    image:
      "https://www.mantitlement.com/wp-content/uploads/2013/12/the-godfather-cocktail-close.jpeg",
  },
  {
    name: "๊น์๋ฏผ",
    impression:
      "ํ์๋ค ๋ถ์๊ธฐ๊ฐ ์ข์์ ์ด์ฌํ ๊ฐ๋ฐํ  ์ ์์์ต๋๋ค. ๋ถ์กฑํ ์ค๋ ฅ์ด์ง๋ง ๊ณ ์๋ค์ด ๊ณ์์ ๋ง์๊ฑธ ๋ฐฐ์ ์ต๋๋ค. 3์ฃผ๋ด๋ด ํ์๋ค์ด๋ ์นตํ์ผ์ ์๊ธฐ๋ ๋ณด๊ธฐ๋งํ๊ณ  ์  ํ์๋ ๋ชปํด ๋๋๊ณ  ์  ํ์ํ๊ณ  ์ถ์ต๋๋ค ใใใใ ์นตํ์ผ ํ์? ํ์๋ค ๋ชจ๋์๊ฒ ๊ฐ์ฌํ๊ณ  ๊ณ ์ํ๋ค๊ณ  ์ ํ๊ณ  ์ถ์ต๋๋ค.",
    introduce: "์กธ๋ฆฌ๋ค ์ ์ ์ธ์  ์ ์ ์์๊น?",
    cocktail: "Martini",
    image: "https://static.toiimg.com/thumb/54579118.cms?width=573&height=382",
  },
  {
    name: "๊น์น์ฃผ",
    impression:
      "๋ฐ์ดํฐ ๋ถ์์ ํตํด ์น ์๋น์ค๋ฅผ ์ ์ํ๋ค๋ณด๋ ์ ๊ฒฝ์ธ ๊ฒ๋ ๋ ๋ง์๊ณ  ์ต์ ํ๊น์ง ์ ๊ฒฝ์ ์จ์ผํด์ ๋ง์ ๊ฒ์ ๋ฐฐ์ธ ์ ์์์ต๋๋ค. ์จ๋ณด๊ณ  ์ถ์๋ MUI ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์ญ๋์ ์ธ CSS๋ ์ง์  ์ฐพ์๋ณด๋ฉด์ ์ฌ๋ฏธ์๊ฒ ๊ฐ๋ฐํ์ต๋๋ค. ํ์ ๋ถ๋ค๋ ์ด์ ์๊ณ  ์ฌ๋ฏธ์์ด์ ํธํ ๋ถ์๊ธฐ์์ ๊ฐ๋ฐํ  ์ ์์ด์ ์ฐธ ์ข์์ต๋๋ค๐",
    introduce: "์นตํ์ผ ์๊ฒฉ์ฆ ์๋๋ฐ ์์ฐ์์๐ตโ๐ซ",
    cocktail: "June Bug",
    image:
      "https://robbreport.com/wp-content/uploads/2020/07/jungle-bird-cocktail-campari.jpg",
  },
  {
    name: "๋ฐ์ ์ค",
    impression:
      "๊ธฐ๋ฅ๋ค์ ์ฐจ๊ณก์ฐจ๊ณก ์์์ฌ๋ ค ๋ ๋จ๋จํ ์ฝ๋๋ฅผ ๊ตฌํํ  ์ ์์ด์ ์ฆ๊ฑฐ์ ์ต๋๋ค. ์ข์ ํ์๊ณผ ํ๋ก์ ํธํ  ์ ์์ด ์ฆ๊ฒ๊ณ  ๋ง์ด ๋ฐฐ์ ์ต๋๋ค. :) ๋ชจ๋ ์ํ๋ ๊ธธ ์ฐพ์์ ํ์์์ ๋ต๊ณ  ์ถ์ต๋๋ค!",
    introduce: "์ ๊ฐ ์ํจ ์นตํ์ผ ์๋๋ค~",
    cocktail: "Jin Tonic",
    image:
      "https://images-ext-1.discordapp.net/external/LZUqczJVjH_S0qSunTgiB22r80nbP1gBU6XWJl6yU44/https/www.mantitlement.com/wp-content/uploads/2013/12/the-godfather-cocktail-close.jpeg",
  },
  {
    name: "๋ฐฑ์ง์",
    introduce: "๊ฐ์ฅ ์๋ฒฝํ ์์ ... ๋ธ๋",
    impression:
      "์ด๋ฒ ํ ํ๋ก์ ํธ๋ฅผ ํตํด ๋ฐฐ์ด๊ฒ์ด ์ ๋ง ๋ง์ต๋๋ค. ๊ธฐํ๋ถํฐ ์๊ฒฌ์ ๋ง์ด ๋๋๋ฐ ํ์ ๋ถ๋ค ๋ชจ๋ ์ ๋ค์ด์ฃผ์์ ์ ๋ง ๊ฐ์ฌํ์ต๋๋ค. ๋ค๋ค 3์ฃผ ๋์ ์๊ณ ํ์จ์ต๋๋ค!",
    cocktail: "Irish Coffee",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/irish_coffee-5c6049f.jpg",
  },
  {
    name: "์ก์ฐ์",
    introduce: "์นตํ์ผ ๋ง์๋ฌ ๊ฐ์ค๋ถ!!",
    impression:
      "๊ธฐํ๋ถํฐ ๊ฐ๋ฐ๊น์ง ์ญ ํด๋ณธ๊ฑด ์ด๋ฒ์ด ์ฒ์์ธ๋ฐ ๋จ์ด ์๊ฐํ๊ฑธ ๋ง๋ค์ด์ฃผ๋ ๊ฒ๋ณด๋ค ์๊ธฐ๊ฐ ์ง์  ๊ธฐ๋ฅ์ ์๊ฐํด๊ฐ๋ฉฐ ๋ง๋๋ ๊ฒ ํจ์ฌ ์ด๋ ต๋ค๋ ๊ฑธ ๋ผ์ ๋ฆฌ๊ฒ ๋๊ผ์ต๋๋ค. ํนํ ๋ง์ง๋ง ์ฃผ๋ ์ด๊ณณ ์ ๊ณณ์์ ์ด์๊ฐ ๋ง์ด ๋ฐ์ํด ๋ฒ๊ทธ ํฝ์คํ๋๋ผ ์ง์ด ๋ค ๋น ์ก๋ค์. ํ์๋ถ๋ค 3์ฃผ๊ฐ ๊ณ ์ ๋ง์ผ์จ๊ณ  ๋์ค์ ์ฌํ์์๋ ๋ต์ผ๋ฉด ์ข๊ฒ ์ต๋๋ค.  ์๊ณ  ๋ง์ผ์จ์ต๋๋ค.",
    cocktail: "Bloody Mary",
    image:
      "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
  },
];

export default function TeamIntro() {
  return (
    <Container
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(64, 64, 64, 0.4)",
        py: 10,
        width: "80vw",
        borderRadius: "1.5rem",
      }}
    >
      <Box
        sx={{
          mb: 15,
          textShadow:
            "0 0 42px #529, 0 0 82px #529, 0 0 92px #529, 0 0 102px #529, 0 0 151px #529",
        }}
      >
        <Typography variant="h3">Team7 JackPot</Typography>
      </Box>
      {team7.map((data, i) => {
        return <TeamCard key={i} data={data} />;
      })}
    </Container>
  );
}
