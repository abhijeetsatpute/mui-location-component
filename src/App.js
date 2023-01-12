import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
// import Stack from '@mui/material/Stack';

import GooglePlace from "./GooglePlace";

export default function App() {

  const [place, setPlace] = useState("");
  
  const handleChange = event => {
    setPlace(event.target.value);
  }

  const handleClick = event => {
    event.preventDefault();
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setPlace(`${position.coords.latitude}, ${position.coords.longitude}`)
      });
    } else {
      console.log("Not Available");
    }

    // 👇️ value of input field
    console.log('old value: ', place);
  };
  return (
    <Container maxWidth="sm" alignItems="center">

      <Grid
        marginTop={1}
        container
        direction="column"
        justifyContent="center"
        rowSpacing={1}
      >
        <Typography variant="h6" component="h6">
          Location
        </Typography>
        <GooglePlace></GooglePlace>


        <Grid item>

          <IconTextField
            id="place"
            value={place}
            onChange={handleChange}
            label="Place"
            iconEnd={<PlaceOutlinedIcon sx={{ color: "orange" }} style={{ cursor: "pointer" }} onClick={handleClick} />}
          />

        </Grid>




      </Grid>
    </Container>
  );
}



const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
      fullWidth
      size="small"
      // style={{ width: 300 }}
    />
  );
};
