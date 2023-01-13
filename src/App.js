import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

import PlaceSearch from "./PlaceSearch";
import RevGeo from "./RevGeo";

export default function App() {
  

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

        <PlaceSearch/>
        <Grid item>
          <RevGeo />
        </Grid>
      </Grid>
    </Container>
  );
}
