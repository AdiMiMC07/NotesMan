import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note,updateNote} = props;

    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title me-2">{note.title}</h5>
                            <span className={`badge rounded-pill text-bg-${note.tag==="general"?"primary":(note.tag==="personal"?"success":"info")} text-center`}>{note.tag}</span>
                        </div>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem