import { useState } from "react";
import axios from "axios";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import IconTextField from "../IconTextField";

export default function RevGeo({ iconStart, iconEnd, InputProps, ...props }) {
  const [place, setPlace] = useState("");
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const handleCurrentLocationClick = (event) => {
    event.preventDefault();
    if ("geolocation" in navigator) {
      console.log("Geocode Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        const coordinates = `${position.coords.latitude},${position.coords.longitude}`;
        const options = {
          method: "GET",
          url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${coordinates}&lang=en-US&apiKey=rka56XLqLTfUq-TMbeQj3d2KyNt839CuZQTlh6J3q-o`,
        };
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.items[0].address.label);
            setPlace(response.data.items[0].address.label);
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    } else {
      console.log("Geocode Not Available");
    }

    // 👇️ value of input field
    console.log("old value: ", place);
  };
  return (
    <IconTextField
      value={place}
      onChange={handlePlaceChange}
      label="Place"
      iconEnd={
        <PlaceOutlinedIcon
          sx={{ color: "orange" }}
          style={{ cursor: "pointer" }}
          onClick={handleCurrentLocationClick}
        />
      }
    />
  );
}
