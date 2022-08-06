import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: FC = () => {
    const location = useLocation()

    const [value, setValue] = useState('')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={location.pathname} onChange={handleChange} aria-label="basic tabs example">
                <Tab value='/create_note' label="Создать запись" component={NavLink} to={"/create_note"} />
                <Tab value='/notes' label="Записи" component={NavLink} to={"/notes"} />
            </Tabs>
        </Box>
    );
}

export default Navbar;
