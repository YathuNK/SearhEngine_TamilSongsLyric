import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import SearchResultItem from "pages/Search/sections/SearchResultItem";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchParams.get("query")){
      setResults([])
      return
    }
    setLoading(true);
    fetch("http://127.0.0.1:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: searchParams.get("query"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data.hits);
        setLoading(false);
      });
  }, [searchParams]);

  console.log(results);

  return (
    <MKBox component="section" py={{ xs: 6, sm: 6 }}>
      {loading ? (
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <div>Loading...</div>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container>
          <div style={{marginLeft:'40px'}}> Total hits : {results.length}</div>
          {results.map((result, id) => (
            <SearchResultItem result={result} key={id}/>
          ))}
        </Container>
      )}
    </MKBox>
  );
}

export default SearchResults;
