import { useState } from "react";

import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

import RevGeo from "./RevGeo";

export default function App() {
  const [searchPlace, setSearchPlace] = useState("");
  const [placesResult, setPlacesResult] = useState([]);

  const handleSearchChange = (event) => {
    const options = {
      method: "GET",
      url: "https://spott.p.rapidapi.com/places/autocomplete",
      params: {
        limit: "10",
        skip: "0",
        country: "US,CA,IN",
        q: searchPlace,
        type: "CITY",
      },
      headers: {
        "X-RapidAPI-Key": "07b94c66camshf16009012abe9b5p1f256bjsna812654ea83f",
        "X-RapidAPI-Host": "spott.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let labels = [];
        for (let i = 0; i < response.data.length; i++) {
          let obj = {
            label: response.data[i].name,
            geoCode: response.data[i].geonameId,
          };
          labels.push(obj);
        }
        setPlacesResult(labels);
        console.log(placesResult);
      })
      .catch(function (error) {
        console.error(error);
      });

    // 👇 Get input value from "event"
    setSearchPlace(event.target.value);
    console.log(searchPlace);
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

        {/* <TextField
          size="small"
          name="searchPlace"
          onInputChange={handleSearchChange}
        /> */}

        <Autocomplete
          disablePortal
          options={placesResult}
          renderInput={(params) => (
            <TextField {...params} placeholder="Place" />
          )}
          size="small"
          name="searchPlace"
          onInputChange={handleSearchChange}
          clearText=""
          position="start"
        />

        <Grid item>
          <RevGeo />
        </Grid>
      </Grid>
    </Container>
  );
}
