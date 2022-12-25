import React, { useContext } from 'react'
import Noteitem from './Noteitem';
import noteContext from '../context/notes/noteContext'


const Notes = () => {
    const { notes, setNotes } = useContext(noteContext);
    return (<>
        <h2 className="text-center">Your Notes</h2>
            {notes.map((note, index) => {
                return <div key={index}>
                    <Noteitem title={note.title} description={note.description} />
                </div>
            })}
    </>
    )
}

export default Notes