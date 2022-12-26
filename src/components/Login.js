import React,{useState} from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""});
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const loginData = await fetch("http://localhost:8000/api/auth/login",{
            method : "POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email: credentials.email,password : credentials.password})
        })
        const json = await loginData.json();
        console.log(json);
        if (json.success){
            // redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login