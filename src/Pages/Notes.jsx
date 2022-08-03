import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../components/Note';

function Notes() {
    const notes = useSelector(state => state.notes.notes)
    useEffect(() => {

    }, [])
    return (
        <div className='notes'>
            {notes.map((note) => {
                return (
                    <Note key={note.id} id={note.id} sign={note.sign} time={note.time} text={note.text} />
                )
            })}
        </div>
    );
}

export default Notes;