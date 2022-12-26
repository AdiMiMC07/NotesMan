import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // hostname 
  const host = "http://localhost:8000";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);
  // function to fetch all notes 
  const getNotes = async ()=>{
    // making api call and fetching the notes data // GET req
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/note/fetchnotes`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNTdkMzBmNDU5ODYxYjljYjczMzA0In0sImlhdCI6MTY3MTgwNTQzMn0.9cRaIO7YI9u3lHS-zMZuZ-K9gAVf4oqs-8p5oAtFlTM'
      }
    });
    const notesData = await response.json();
    setNotes(notesData);
  }
  // add note function
  const addNote = async (title, description, tag) => {
    // making api call to add a note data into the database // POST req
    // eslint-disable-next-line
    const addRequest = await fetch(`${host}/api/note/addnotes`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNTdkMzBmNDU5ODYxYjljYjczMzA0In0sImlhdCI6MTY3MTgwNTQzMn0.9cRaIO7YI9u3lHS-zMZuZ-K9gAVf4oqs-8p5oAtFlTM'
      },
      body : JSON.stringify({title,description,tag})
    });
    // displaying the new note data on the UI
    const noteJson = await addRequest.json();
    setNotes(notes.concat(noteJson));
  }
  // edit note function
  const editNote = async(id,title,description,tag) => {
    // making api call to update a note in the database // PUT req
    // eslint-disable-next-line
    const addRequest = await fetch(`${host}/api/note/updatenotes/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNTdkMzBmNDU5ODYxYjljYjczMzA0In0sImlhdCI6MTY3MTgwNTQzMn0.9cRaIO7YI9u3lHS-zMZuZ-K9gAVf4oqs-8p5oAtFlTM'
      },
      body : JSON.stringify({title,description,tag})
    });
    // update the note on the UI
    setNotes(notes.map((note)=>{
      if (note._id === id){
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
      return note;
    }));
  }
  // delete note function
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/note/deletenote/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNTdkMzBmNDU5ODYxYjljYjczMzA0In0sImlhdCI6MTY3MTgwNTQzMn0.9cRaIO7YI9u3lHS-zMZuZ-K9gAVf4oqs-8p5oAtFlTM'
      }
    });
    setNotes(notes.filter((note) => {
      if (note._id !== id) {
        return note;
      }
    }))
  }
  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote,getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;