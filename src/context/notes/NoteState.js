import noteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props)=>{
    const noteInitial = [
        {
          "_id": "63a5cff8a7d8653b66a2588a",
          "user": "63a57d30f459861b9cb73304",
          "title": "CodingNotes1",
          "description": "today we learnt about apis",
          "tag": "personal",
          "date": "2022-12-23T15:57:44.899Z",
          "__v": 0
        },
        {
          "_id": "63a5cff8a7d8653b66a2588a",
          "user": "63a57d30f459861b9cb73304",
          "title": "CodingNotes2",
          "description": "today we learnt about apis",
          "tag": "personal",
          "date": "2022-12-23T15:57:44.899Z",
          "__v": 0
        },
        {
          "_id": "63a5cff8a7d8653b66a2588a",
          "user": "63a57d30f459861b9cb73304",
          "title": "CodingNotes3",
          "description": "today we learnt about apis",
          "tag": "personal",
          "date": "2022-12-23T15:57:44.899Z",
          "__v": 0
        },
        {
          "_id": "63a5cff8a7d8653b66a2588a",
          "user": "63a57d30f459861b9cb73304",
          "title": "CodingNotes4",
          "description": "today we learnt about apis",
          "tag": "personal",
          "date": "2022-12-23T15:57:44.899Z",
          "__v": 0
        },
      ];
      const [notes, setNotes] = useState(noteInitial)
    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;