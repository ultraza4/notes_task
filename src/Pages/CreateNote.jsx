import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { addToNotes } from '../redux/actions/notesActions';

function CreateNote() {

    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [sign, setSign] = useState('')
    const [timeZone, setTimeZone] = useState('')
    const [timeZones, setTimeZones] = useState([])
    // const [currentTime, setCurrentTime] = useState('')

    const id = notes.length + 1;
    const textHandler = (e) => {
        setText(e.target.value)
    };
    const signHandler = (e) => {
        setSign(e.target.value)
    };
    const timeZoneHandler = (e) => {
        setTimeZone(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.get(`https://worldtimeapi.org/api/timezone/${timeZone}`)
            .then((res) => {
                const time = res.data.datetime;
                dispatch(addToNotes({ id, text, sign, time }));
                setLoading(false)
            })
            .catch(err => console.log("Axios err: ", err))
    }

    useEffect(() => {
        const getTimeZones = async () => {
            let res = await axios.get("https://worldtimeapi.org/api/timezone");
            setTimeZones(res.data);
            setLoading(false);
        }
        getTimeZones().catch(console.error);
    }, [])

    return (
        <div className='createNote__container'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-multiline-static"
                    label="Запись"
                    multiline
                    rows={6}
                    value={text}
                    onChange={textHandler}
                    fullWidth
                    placeholder="Введите текст записи"
                />

                <div className='Sign_Time'>
                    <div className='sign_textfield'>
                        <TextField
                            required
                            id="outlined-required"
                            label="Подпись"
                            value={sign}
                            onChange={signHandler}
                            placeholder="Введите ФИО"
                            fullWidth
                        />
                    </div>
                    <div className='timezone_textfield'>
                        <Select
                            defaultValue=""
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={timeZone}
                            label="Точное время по"
                            onChange={timeZoneHandler}
                            fullWidth
                        >
                            {timeZones.map((zone) => {
                                return (
                                    <MenuItem value={zone}>{zone}</MenuItem>
                                )
                            })}
                        </Select>
                    </div>

                </div>
                <div className='send_button'>
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                    >
                        Создать
                    </LoadingButton>
                </div>
            </form>
        </div>
    );

}

export default CreateNote;