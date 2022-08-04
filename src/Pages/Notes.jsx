import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Note } from '../components/Note';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { setCurrentPage } from '../redux/notesReducer';


function Notes() {
    const dispatch = useDispatch()
    const perPage = useSelector(state => state.notes.perPage)
    const totalCount = useSelector(state => state.notes.totalCount)
    let totalPages = Math.ceil(totalCount / perPage)
    const currentPage = useSelector(state => state.notes.currentPage)
    const notes = useSelector(state => state.notes.notes)

    return (<>
        <div className='notes'>
            {notes.map((note) => {
                if (note.id <= perPage * currentPage && note.id > perPage * (currentPage - 1)) {
                    return (
                        <Note key={note.id} id={note.id} sign={note.sign} time={note.time} text={note.text} />
                    )
                }
            })}
        </div>
        <div className='pagination'>
            <Pagination
                count={totalPages === 0 ? 1 : totalPages}
                page={currentPage}
                onChange={(_, num) => dispatch(setCurrentPage(num))}
                showFirstButton
                showLastButton />
        </div>
    </>);
}

export default Notes;