// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { useSearchParams } from "react-router-dom";
// @mui icons
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import MKInput from "components/MKInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { typography } from "@mui/system";

const defaultQuery = {
    lyrics: "",
    album: {
        value: "",
        analyzer: "plain",
    },
    composer: {
        value: "",
        analyzer: "plain",
    },
    lyricist: {
        value: "",
        analyzer: "plain",
    },
    singers: {
        value: "",
        analyzer: "plain",
    },
    song_name: {
        value: "",
        analyzer: "plain",
    },
    year: {
        customRange: false,
        year: "",
        from: "",
        to: "",
    },
    interpretation: "",
    metaphor: "",
    source: "",
    target: "",
};

function AdvancedSearchBox() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(defaultQuery);

    const handleChange = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    const handleAnalyzerChange = (e) => {
        const key = e.target.name;
        setQuery({ ...query, [key]: { ...query[key], analyzer: e.target.value } });
    };

    const handleValueChange = (e) => {
        const key = e.target.name;
        setQuery({ ...query, [key]: { ...query[key], value: e.target.value } });
    };

    const handleYearLabelChange = (e) => {
        setQuery({ ...query, year: { ...query["year"], customRange: e.target.checked } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query);
        setSearchParams({ query: JSON.stringify(query) });
    };

    useEffect(() => {
        if (searchParams.get("query")) {
            setQuery(JSON.parse(searchParams.get("query")));
        } else {
            setQuery(defaultQuery);
        }
    }, [searchParams]);

    return (
        <Grid container justifyContent="center">
            <MKBox
                component="section"
                xs={8}
                lg={6}
                py={1}
                style={{
                    backgroundColor: "rgb(235 236 237 / 67%)",
                    padding: "20px",
                    width: "700px",
                    borderRadius: "7px",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <MKInput
                        variant="standard"
                        label="Lyrics"
                        name="lyrics"
                        value={query.lyrics}
                        onChange={handleChange}
                        fullWidth
                        style={{ margin: "6px" }}
                    />
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <MKInput
                                variant="standard"
                                label="Album"
                                name="album"
                                value={query.album.value}
                                onChange={handleValueChange}
                                fullWidth
                                style={{ margin: "6px" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px", textAlign: "right" }}
                            >
                                Analyzer
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select
                                value={query.album.analyzer}
                                label="Analyzer"
                                name="album"
                                onChange={handleAnalyzerChange}
                                style={{ width: "100%", height: "80%", marginTop: "10px" }}
                            >
                                <MenuItem value={"plain"}>Plain</MenuItem>
                                <MenuItem value={"case_insensitive"}>Case Insensitive</MenuItem>
                                <MenuItem value={"inflections"}>Inflections</MenuItem>
                                <MenuItem value={"case_insensitive_and_inflections"}>
                                    Case Insensitive & Inflections
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <MKInput
                                variant="standard"
                                label="Composer"
                                name="composer"
                                value={query.composer.value}
                                onChange={handleValueChange}
                                fullWidth
                                style={{ margin: "6px" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px", textAlign: "right" }}
                            >
                                Analyzer
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select
                                value={query.composer.analyzer}
                                label="Analyzer"
                                name="composer"
                                onChange={handleAnalyzerChange}
                                style={{ width: "100%", height: "80%", marginTop: "10px" }}
                            >
                                <MenuItem value={"plain"}>Plain</MenuItem>
                                <MenuItem value={"case_insensitive"}>Case Insensitive</MenuItem>
                                <MenuItem value={"inflections"}>Inflections</MenuItem>
                                <MenuItem value={"case_insensitive_and_inflections"}>
                                    Case Insensitive & Inflections
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <MKInput
                                variant="standard"
                                label="Lyricist"
                                name="lyricist"
                                value={query.lyricist.value}
                                onChange={handleValueChange}
                                fullWidth
                                style={{ margin: "6px" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px", textAlign: "right" }}
                            >
                                Analyzer
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select
                                value={query.lyricist.analyzer}
                                label="Analyzer"
                                name="lyricist"
                                onChange={handleAnalyzerChange}
                                style={{ width: "100%", height: "80%", marginTop: "10px" }}
                            >
                                <MenuItem value={"plain"}>Plain</MenuItem>
                                <MenuItem value={"case_insensitive"}>Case Insensitive</MenuItem>
                                <MenuItem value={"inflections"}>Inflections</MenuItem>
                                <MenuItem value={"case_insensitive_and_inflections"}>
                                    Case Insensitive & Inflections
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <MKInput
                                variant="standard"
                                label="Singers"
                                name="singers"
                                value={query.singers.value}
                                onChange={handleValueChange}
                                fullWidth
                                style={{ margin: "6px" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px", textAlign: "right" }}
                            >
                                Analyzer
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select
                                value={query.singers.analyzer}
                                label="Analyzer"
                                name="singers"
                                onChange={handleAnalyzerChange}
                                style={{ width: "100%", height: "80%", marginTop: "10px" }}
                            >
                                <MenuItem value={"plain"}>Plain</MenuItem>
                                <MenuItem value={"case_insensitive"}>Case Insensitive</MenuItem>
                                <MenuItem value={"inflections"}>Inflections</MenuItem>
                                <MenuItem value={"case_insensitive_and_inflections"}>
                                    Case Insensitive & Inflections
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <MKInput
                                variant="standard"
                                label="Song name"
                                name="song_name"
                                value={query.song_name.value}
                                onChange={handleValueChange}
                                fullWidth
                                style={{ margin: "6px" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px", textAlign: "right" }}
                            >
                                Analyzer
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select
                                value={query.song_name.analyzer}
                                label="Analyzer"
                                name="song_name"
                                onChange={handleAnalyzerChange}
                                style={{ width: "100%", height: "80%", marginTop: "10px" }}
                            >
                                <MenuItem value={"plain"}>Plain</MenuItem>
                                <MenuItem value={"case_insensitive"}>Case Insensitive</MenuItem>
                                <MenuItem value={"inflections"}>Inflections</MenuItem>
                                <MenuItem value={"case_insensitive_and_inflections"}>
                                    Case Insensitive & Inflections
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{ marginTop: "5px" }}>
                        <Grid item xs={12} md={1}>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                style={{ marginTop: "30px" }}
                            >
                                &nbsp;&nbsp;Year
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        onChange={handleYearLabelChange}
                                    />
                                }
                                label="Custom Range"
                                componentsProps={{
                                    typography: "overline",
                                }}
                                style={{ marginTop: "15px", fontWeight: "400" }}
                            />
                        </Grid>

                        <Grid item xs={12} md={7}>
                            {!query.year.customRange ? (
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            id="id1"
                                            variant="standard"
                                            label="Year"
                                            name="year"
                                            value={query.year.year}
                                            onChange={(e) =>
                                                setQuery({
                                                    ...query,
                                                    year: {
                                                        ...query["year"],
                                                        year: e.target.value,
                                                    },
                                                })
                                            }
                                            fullWidth
                                            style={{ margin: "6px" }}
                                        />
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            id="id2"
                                            variant="standard"
                                            label="From"
                                            name="from"
                                            value={query.year.from}
                                            onChange={(e) =>
                                                setQuery({
                                                    ...query,
                                                    year: {
                                                        ...query["year"],
                                                        from: e.target.value,
                                                    },
                                                })
                                            }
                                            fullWidth
                                            style={{ margin: "6px" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            id="id2"
                                            variant="standard"
                                            label="To"
                                            name="to"
                                            value={query.year.to}
                                            onChange={(e) =>
                                                setQuery({
                                                    ...query,
                                                    year: { ...query["year"], to: e.target.value },
                                                })
                                            }
                                            fullWidth
                                            style={{ margin: "6px" }}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    
                    <MKInput
                            variant="standard"
                            label="Metaphor"
                            name="metaphor"
                            value={query.metaphor}
                            onChange={handleChange}
                            fullWidth
                            style={{ margin: "6px" }}
                        />
                        <MKInput
                            variant="standard"
                            label="Interpretation"
                            name="interpretation"
                            value={query.interpretation}
                            onChange={handleChange}
                            fullWidth
                            style={{ margin: "6px" }}
                        />
                        <MKInput
                            variant="standard"
                            label="Source"
                            name="source"
                            value={query.source}
                            onChange={handleChange}
                            fullWidth
                            style={{ margin: "6px" }}
                        />
                        <MKInput
                            variant="standard"
                            label="Target"
                            name="target"
                            value={query.target}
                            onChange={handleChange}
                            fullWidth
                            style={{ margin: "6px" }}
                        />

                    <Button
                        variant="contained"
                        endIcon={<SearchIcon />}
                        style={{ float: "right", color: "white", margin: "15px 20px 0 0" }}
                        type="submit"
                    >
                        Search
                    </Button>
                </form>
            </MKBox>
        </Grid>
    );
}

export default AdvancedSearchBox;
