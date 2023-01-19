// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import InputIcon from "pages/Search/sections/InputIcon";
import { useSearchParams } from "react-router-dom"

function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ query: e.target.value })
  }

  return (
    <MKBox component="section" pt={{ xs: 3, sm:5 }} >
      <Grid container justifyContent="center" >
        <InputIcon handleSubmit={handleSubmit}/>
      </Grid>
    </MKBox>
  );
}


export default SearchBox;
