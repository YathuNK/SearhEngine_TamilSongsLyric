import React from 'react'
// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function SearchResultItem({result}) {
  return (
    <Grid container item xs={12} justifyContent="center" mx="auto" style={{backgroundColor: "#f5f5f5", borderRadius: "8px"}} px={{ xs: 4, sm: 4 }} py={{ xs: 2, sm: 2 }} my={{ xs: 2, sm: 2 }}>
              {/* <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
                                <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
                            </MKBox> */}
              <Grid container justifyContent="center">
                <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
                  <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <MKTypography variant="h3">{result._source.song_name}</MKTypography>
                    {/* <MKButton variant="outlined" color="info" size="small">
                      Follow
                    </MKButton> */}
                  </MKBox>

                  <Grid container spacing={3} mb={1}>
                    <Grid item>
                      <MKTypography component="span" variant="body2" color="text">
                        Year :&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        {result._source.year}
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography component="span" variant="body2" color="text">
                        Score :&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        {result._score}
                      </MKTypography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mb={1}>
                    <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                            Album :&nbsp;
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                            {result._source.album}
                        </MKTypography>
                    </Grid>
                    <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                            Composer :&nbsp;
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                            {result._source.composer}
                        </MKTypography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mb={1}>
                    <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                            Lyricist :&nbsp;
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                            {result._source.lyricist}
                        </MKTypography>
                    </Grid>
                    <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                            Singers :&nbsp;
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                            {result._source.singers}
                        </MKTypography>
                    </Grid>
                  </Grid>

                  <MKTypography variant="body1" fontWeight="light" color="text">
                    {result._source.lyrics}
                  </MKTypography>

                    {
                        result._source.metaphors.map((metaphor,id)=>(
                            <MKBox m={1} p={2} style={{backgroundColor: 'white'}}>
                                <div>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Metaphor :&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        {metaphor.metaphor}
                                    </MKTypography>
                                </div>
                                <div>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Interpretation :&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        {metaphor.interpretation}
                                    </MKTypography>
                                </div>
                                <Grid container>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Source :&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        {metaphor.source}
                                    </MKTypography>
                               
                                    <MKTypography component="span" variant="body2" color="text" ml={5}>
                                        Target :&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        {metaphor.target}
                                    </MKTypography>
                                </Grid>
                            </MKBox>
                        ))
                    }

                </Grid>
              </Grid>
            </Grid>
  )
}

export default SearchResultItem