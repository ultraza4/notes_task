import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function CreateNote() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='createNote__container'>
            <form action="">
                <TextField
                    id="outlined-multiline-static"
                    label="Запись"
                    multiline
                    rows={6}
                    fullWidth
                    placeholder="Введите текст записи"
                />
                <div className='Sign_Time'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Подпись"
                        placeholder="Введите ФИО"
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </form>
        </div>
    );

}

export default CreateNote;