import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { addToNotes } from '../redux/actions/notesActions';
import { setTotalCount } from '../redux/notesReducer'
import { addLastOptions } from '../redux/actions/lastOptionsAction';
import { SendAlert } from '../components/Alert';
import { setErrorAlert, setSuccessAlert } from '../redux/alertReducer';

function CreateNote() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    const lastOptions = useSelector(state => state.options.lastOptions)
    const alertState = useSelector(state => state.alert)

    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [sign, setSign] = useState(lastOptions.lastSign)
    const [timeZone, setTimeZone] = useState(lastOptions.lastTimeZone)
    const [timeZones, setTimeZones] = useState([])
    const id = notes.length + 1;

    const textHandler = (e) => {
        setText(e.target.value)
    };
    const signHandler = (e) => {
        setSign(e.target.value)
        dispatch(addLastOptions(e.target.value, timeZone))
    };
    const timeZoneHandler = (e) => {
        setTimeZone(e.target.value)
        dispatch(addLastOptions(sign, e.target.value))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.get(`https://worldtimeapi.org/api/timezone/${timeZone}`)
            .then((res) => {
                const time = res.data.datetime;
                dispatch(addToNotes({ id, text, sign, time }));
                dispatch(setTotalCount(notes.length + 1))
                setLoading(false)
                setText("")
                dispatch(setSuccessAlert(true))
            })
            .catch(err => {
                dispatch(setErrorAlert(true, err))
                setLoading(false)
                alert(err)
            })
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
            <SendAlert
                visible={alertState.visible}
                severity={alertState.severity}
                text={alertState.alertText} />
            <form className='form' onSubmit={handleSubmit}>
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
                            {timeZones.map((zone, index) => {
                                return (
                                    <MenuItem key={index} value={zone}>{zone}</MenuItem>
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