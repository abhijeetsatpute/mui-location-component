import { useState } from "react";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
// import Stack from '@mui/material/Stack';
import axios from "axios";

import GooglePlace from "./GooglePlace";
import IconTextField from "./IconTextField";

export default function App() {
  const [place, setPlace] = useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // if ("geolocation" in navigator) {
    //   console.log("Available");
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     setPlace(`${position.coords.latitude}, ${position.coords.longitude}`);
    //   });
    // } else {
    //   console.log("Not Available");
    // }

    const options = {
      method: "GET",
      url: "https://spott.p.rapidapi.com/places/ip/me",
      headers: {
        "X-RapidAPI-Key": "07b94c66camshf16009012abe9b5p1f256bjsna812654ea83f",
        "X-RapidAPI-Host": "spott.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlace(response.data.name);
      })
      .catch(function (error) {
        console.error(error);
      });

    // 👇️ value of input field
    console.log("old value: ", place);
  };
  return (
    <Container maxWidth="sm">
      <Grid
        marginTop={1}
        container
        direction="column"
        justifyContent="center"
        rowSpacing={1}
      >
        <Typography>Location</Typography>
        <GooglePlace></GooglePlace>

        <Grid item>
          <IconTextField
            id="place"
            value={place}
            onChange={handleChange}
            label="Place"
            iconEnd={
              <PlaceOutlinedIcon
                sx={{ color: "orange" }}
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              />
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}
