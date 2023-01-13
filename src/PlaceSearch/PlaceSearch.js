import axios from "axios";
import { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

export default function PlaceSearch() {
//   const [searchPlace, setSearchPlace] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    // setSearchPlace(event.target.value);
    const options = {
      method: "GET",
      url: `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${event.target.value}&apiKey=rka56XLqLTfUq-TMbeQj3d2KyNt839CuZQTlh6J3q-o`,
    };

    axios
      .request(options)
      .then(function (response) {
        let labels = [];
        for (let i = 0; i < response.data.items.length; i++) {
          let obj = {
            label: response.data.items[i].address.label,
            address: response.data.items[i].address,
          };
          labels.push(obj);
        }
        console.log(labels);
        setSearchResult(labels);
      })
      .catch(function (error) {
        console.error(error);
      });

    // 👇 Get input value from "event"
  };

  return (
    <Autocomplete
      options={searchResult}
      renderInput={(params) => <TextField {...params} placeholder="Place" />}
      size="small"
      onInputChange={handleSearchChange}
    />
  );
}
