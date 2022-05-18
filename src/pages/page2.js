import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

const Page2 = () => {

    const border_boxx = {
        border: "1px solid #cbc6c6",
        padding: "20px",
        borderRadius: "2px"
    }
    return (
        <div style={{ form_main }}>


            <h3>IP Adress</h3>
            <div style={{ border_boxx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">Includes</MenuItem>
                        <MenuItem value="beingWith">Beings with</MenuItem>
                        <MenuItem value="endWith">Ends with</MenuItem>
                        <MenuItem value="is">Is</MenuItem>
                        <MenuItem value="isBetween">Is between</MenuItem>
                        <MenuItem value="inCIDRRange">Is in CIDR range</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                </FormControl>
            </div>
            <br />

            <h3>MAC Adress</h3>
            <div style={{ border_boxx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">Includes</MenuItem>
                        <MenuItem value="beingWith">Beings with</MenuItem>
                        <MenuItem value="endWith">Ends with</MenuItem>
                        <MenuItem value="is">Is</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                </FormControl>
            </div>

            <br />
            <h3>Hostname</h3>
            <div style={{ border_boxx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">Includes</MenuItem>
                        <MenuItem value="beingWith">Beings with</MenuItem>
                        <MenuItem value="endWith">Ends with</MenuItem>
                        <MenuItem value="is">Is</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                </FormControl>
            </div>

            <br />

            <h3>Vendor</h3>
            <div style={{ border_boxx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">Includes</MenuItem>
                        <MenuItem value="beingWith">Beings with</MenuItem>
                        <MenuItem value="endWith">Ends with</MenuItem>
                        <MenuItem value="is">Is</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                    <br />
                </FormControl>
            </div>

            <h3>Installed Software</h3>
            <div style={{ border_boxx }}>
                <FormControl fullWidth>


                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                </FormControl>
                <br />
                <br />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">is Installed</MenuItem>

                    </Select>
                </FormControl>
            </div>




            <h3>Device Type</h3><div style={{ border_boxx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Match"
                    >
                        <MenuItem value="includes">Includes</MenuItem>
                        <MenuItem value="beingWith">Beings with</MenuItem>
                        <MenuItem value="endWith">Ends with</MenuItem>
                        <MenuItem value="is">Is</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Value"
                        variant="outlined"
                    />
                    <br />
                </FormControl>
            </div>


        </div>

    );
}

export default Page2;