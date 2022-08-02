import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Создать запись" component ={NavLink} to ={"/create_note"}/>
                <Tab label="Записи" component ={NavLink} to ={"/notes"}/>
            </Tabs>
        </Box>
    );
}

export default Navbar;
