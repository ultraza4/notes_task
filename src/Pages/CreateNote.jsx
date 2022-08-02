import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function CreateNote() {
    const [age, setAge] = useState('30');

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
                    <div className='sign_textfield'>
                        <TextField
                            required
                            id="outlined-required"
                            label="Подпись"
                            placeholder="Введите ФИО"
                            fullWidth
                        />
                    </div>
                    <div className='timezone_textfield'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Точное время по"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>

                </div>
                <div className='send_button'>
                    <Button variant="contained" endIcon={<SendIcon />}>Создать</Button>
                </div>
            </form>
        </div>
    );

}

export default CreateNote;