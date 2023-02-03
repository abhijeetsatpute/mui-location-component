import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Modal, Box } from "@mui/material";
import Container from "@mui/material/Container";

import PlaceSearch from "./PlaceSearch";
import RevGeo from "./RevGeo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        <PlaceSearch />
        <Grid item>
          <RevGeo />
        </Grid>
        <div>
          <Button onClick={handleOpen}>Get current location</Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </Grid>
    </Container>
  );
}
