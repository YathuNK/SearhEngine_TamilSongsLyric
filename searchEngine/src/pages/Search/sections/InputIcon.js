// @mui material components
import InputAdornment from "@mui/material/InputAdornment";
import { useSearchParams } from "react-router-dom"
// @mui icons
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputIcon(handleSubmit) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
      setQuery(e.target.value)
  }
  // const handleChange = (e) => {
  //   setSearchParams({ query: e.target.value })
  // }

  useEffect(() => {
    setQuery(searchParams.get("query") || "")
  }, [searchParams]);
  
  return (
    <MKBox component="section" xs={8} lg={6} py={1} style={{backgroundColor:"#d5d2d2", padding:"10px", width:"700px", borderRadius: "7px"}} >
          <form onSubmit={handleSubmit}>
              <MKInput
              variant="standard"
              placeholder="Search"
              name="query"
              value={query}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
          </form>
    </MKBox>
  );
}

export default InputIcon;