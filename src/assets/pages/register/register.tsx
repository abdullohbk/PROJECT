import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Register() {
  const navigate = useNavigate();
  
  
  
      useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/login");
        }
      }, []);
  
  
  
  interface userInterface {
    username: string;
    password: string;
    phone: string;
  }
  
  
  
  const HandleSubmit =async (e:any) =>{
    e.preventDefault()
    
    const payload: userInterface ={
      username: e.target[0].value,
      password: e.target[1].value,
      phone: e.target[2].value
    } 
    try{
      const response = await axios.post("http://45.138.158.252:3000/auth/register", payload)
      console.log(response);
       if (response.status === 201) {
         navigate("/login");
       }
      
    }catch(err){
      console.log(err);
      
    }
    }
    
      return (
        <>
          <div className="container-md">
            <h1 className="text-primary text-center">Register</h1>
            <form className="p-4 border w-50 mx-auto my-5 rounded" onSubmit={HandleSubmit}>
              <input
                type="text"
                className="form-control w-full my-3"
                placeholder="enter your name..."
              />
              <input
                type="text"
                className="form-control w-full my-3"
                placeholder="enter your password..."
              />
              <input
                type="text"
                className="form-control w-full my-3"
                placeholder="enter your phone..."
              />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </>
      );
    
  }


export default Register;
