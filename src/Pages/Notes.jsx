import React from 'react';
import { Note } from '../components/Note';

function Notes(props) {
    
    return (
        <div className='notes'>
            <Note id='1' sign='Kagarman Azamat' time='20555' text='Hello mother father' />
            <Note id='1' sign='Kagarman Azamat' time='20555' text='Hello mother father' />
            <Note id='1' sign='Kagarman Azamat' time='20555' text='Hello mother father' />
            <Note id='1' sign='Kagarman Azamat' time='20555' text='Hello mother father' />
        </div>
    );
}

export default Notes;