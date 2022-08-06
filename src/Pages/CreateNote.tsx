import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { addToNotes } from '../redux/actions/notesActions';
import { setTotalCount } from '../redux/notesReducer'
import { addLastOptions } from '../redux/actions/lastOptionsAction';
import { SendAlert } from '../components/Alert';
import { setErrorAlert, setSuccessAlert } from '../redux/alertReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { FormControl, InputLabel } from '@mui/material';

function CreateNote() {
    const dispatch = useAppDispatch()

    const notes = useAppSelector(state => state.notes.notes)
    const lastOptions = useAppSelector(state => state.options.lastOptions)
    const alertState = useAppSelector(state => state.alert)

    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')
    const [sign, setSign] = useState(lastOptions.lastSign)
    const [timeZone, setTimeZone] = useState(lastOptions.lastTimeZone)
    const [timeZones, setTimeZones] = useState([])
    const id = notes.length + 1;

    const textHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value)
    };
    const signHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setSign(event.target.value)
        dispatch(addLastOptions(event.target.value, timeZone, lastOptions.lastPerPage))
    }
    const timeZoneHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setTimeZone(event.target.value)
        dispatch(addLastOptions(sign, event.target.value, lastOptions.lastPerPage))
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setLoading(true)
        axios.get(`https://worldtimeapi.org/api/timezone/${timeZone}`)
            .then((res) => {
                const time = res.data.datetime;
                dispatch(addToNotes({ id, text, sign, time, timeZone }));
                dispatch(setTotalCount(notes.length + 1))
                setLoading(false)
                setText("")
                dispatch(setSuccessAlert(true))
            })
            .catch(err => {
                dispatch(setErrorAlert(true))
                setLoading(false)
                alert(err)
            })
    }
    const getTimeZones = async (): Promise<void> => {
        try {
            let res = await axios.get("https://worldtimeapi.org/api/timezone");
            setTimeZones(res.data);
            setLoading(false);
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        getTimeZones()
    }, [])

    return (
        <div className='createNote__container'>
            <SendAlert
                visible={alertState.visible}
                alert={alertState.alert}
                alertText={alertState.alertText} />
            <form className='form' onSubmit={handleSubmit}>
                <TextField
                    id="outlined-multiline-static"
                    name='note-text'
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
                            inputProps={{
                                maxLength: 100
                            }}
                            value={sign}
                            onChange={signHandler}
                            placeholder="Введите ФИО"
                            fullWidth
                        />
                    </div>
                    <div className='timezone_textfield'>
                        <FormControl style={{ minWidth: 250 }}>
                            <InputLabel htmlFor='demo-simple-select-label'>Точное время по</InputLabel>
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
                        </FormControl>
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