import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import Page2 from "./page2";

const Page1 = () => {


    return (
        <div className="form_main">
            <FormControl fullWidth>
                <div className="inputs">
                    <InputLabel id="selected">Select One</InputLabel>
                    <Select
                        labelId="selected"
                        id="select"
                        className="styleUI"
                        label="Select One"
                    >
                        <MenuItem value={"and"}>And</MenuItem>
                        <MenuItem value={"or"}>Or</MenuItem>
                        <MenuItem value={"exclisiveOr"}>Exclusive Or</MenuItem>
                    </Select>
                </div>
            </FormControl>

            <FormControl fullWidth>
                <div className="inputs">
                    <InputLabel id="selected">Select One</InputLabel>
                    <Select
                        labelId="selected"
                        id="select"
                        className="styleUI"
                        label="Select One"
                    >
                        <MenuItem value={"and"}>IP Address</MenuItem>
                        <MenuItem value={"or"}>MAC Address</MenuItem>
                        <MenuItem value={"exclisiveOr"}>Hostname</MenuItem>
                        <MenuItem value={"and"}>Operating System</MenuItem>
                        <MenuItem value={"or"}>MAC Address</MenuItem>
                        <MenuItem value={"exclisiveOr"}>Hostname</MenuItem>
                        <MenuItem value={"and"}>IP Address</MenuItem>
                        <MenuItem value={"or"}>MAC Address</MenuItem>
                        <MenuItem value={"exclisiveOr"}>Hostname</MenuItem>
                    </Select>
                </div>
            </FormControl>
         

            <div>
                <Button variant="outlined" disabled>
                    Cancel
                </Button> <Button variant="contained">
                    Add
                </Button>
            </div>


        </div>
    )
}

export default Page1;