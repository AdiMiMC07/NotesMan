import React,{useContext,useEffect} from 'react'
import Notes from './Notes';

export const Home = () => {
  // useEffect(() => {
    
  // }, [])
  
  return (
    <>
      <div className="container my-3">
        <h2 className='my-2 text-center'>Add Note</h2>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">@example.com</span>
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>
          <div className="form-text">Example help text goes outside the input group.</div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
        </div>

        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <Notes/>
    </>
  )
}
