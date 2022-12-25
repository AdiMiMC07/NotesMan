import React, { useContext } from 'react'
import Noteitem from './Noteitem';
import noteContext from '../context/notes/noteContext'

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <>
            <div className="row">
                <h2 className="text-center">Your Notes</h2>
                    {notes.map((note, index) => {
                        return <Noteitem key={index} note={note}/>
                    })}
            </div>
        </>
    )
}

export default Notes