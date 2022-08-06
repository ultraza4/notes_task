import React, { ChangeEvent, useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Note } from '../components/Note';
import Pagination from '@mui/material/Pagination';
import { setCurrentPage, setPerPage } from '../redux/notesReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addLastOptions } from '../redux/actions/lastOptionsAction';
import { FormControl, InputLabel } from '@mui/material';


function Notes() {
    const dispatch = useAppDispatch()
    const perPage = useAppSelector(state => state.notes.perPage)
    const lastOptions = useAppSelector(state => state.options.lastOptions)
    const totalCount = useAppSelector(state => state.notes.totalCount)
    let totalPages = Math.ceil(totalCount / perPage)
    const currentPage = useAppSelector(state => state.notes.currentPage)
    const notes = useAppSelector(state => state.notes.notes)

    const [notePerPage, setNotePerPage] = useState((lastOptions.lastPerPage).toString())
    const perPageHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setNotePerPage(event.target.value)
        dispatch(setPerPage(Number(event.target.value)))
        dispatch(addLastOptions(lastOptions.lastSign, lastOptions.lastTimeZone, Number(event.target.value)))
    };

    useEffect(() => {
        dispatch(setPerPage(lastOptions.lastPerPage))
    }, [])

    return (<>
        <div className='notes'>
            {notes.map((note) => {
                if (note.id <= perPage * currentPage && note.id > perPage * (currentPage - 1)) {
                    return (
                        <Note key={note.id} id={note.id} sign={note.sign} time={note.time} text={note.text} timeZone={note.timeZone} />
                    )
                }
            })}
        </div>
        <div className='notes_footer'>
            <div className='pagination'>
                <Pagination
                    count={totalPages === 0 ? 1 : totalPages}
                    page={currentPage}
                    onChange={(_, num) => dispatch(setCurrentPage(num))}
                    showFirstButton
                    showLastButton />
            </div>
            <div className='perPage_selector'>
                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel htmlFor='demo-simple-select-label'>Заметки на страницу</InputLabel>
                    <Select
                        defaultValue=""
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={notePerPage}
                        label="Заметки на страницу"
                        onChange={perPageHandler}
                        fullWidth
                    >
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    </>);
}

export default Notes;