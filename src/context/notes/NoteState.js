import noteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props)=>{
    const initialState = {
        "name" : "adit",
        "sec" : "2nd yr"
    }
    const [state, setState] = useState(initialState)
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name" : "aditya",
                "sec" : "3rd yr"
            });
        }, 2000);
    }
    return (
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;