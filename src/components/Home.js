import React,{useContext,useEffect} from 'react'
import Addnote from './Addnote';
import Notes from './Notes';

export const Home = () => {
  // useEffect(() => {
    
  // }, [])
  
  return (
    <>
      <Addnote/>
      <div className="container">
        <Notes/>
      </div>
    </>
  )
}
