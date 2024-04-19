import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



function Login(){

      const navigate = useNavigate();

      useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/home");
        }
      }, []);

      // interface for users
      interface userInterface {
        username: string;
        password: string;
      }

      const handleSubmit = async (e: any) => {
        e.preventDefault();

        const userData: userInterface = {
          username: e.target[0].value,
          password: e.target[1].value,
        };

        try {
          const res = await axios.post(
            "http://45.138.158.252:3000/auth/login",
            userData
          );
          //  console.log(res);
          if (res.status === 201) {
            localStorage.setItem("token", res.data.accessToken);
            navigate("/home");
          }
        } catch (err) {
          console.log(err);
        }
      };
    return (
      <>
        <h1 className="text-primary text-center">Login</h1>

        <div className="container-md">
          <h1 className="text-primary text-center">Login</h1>
          <form
            className="p-4 border w-50 mx-auto my-5 rounded"
            onSubmit={handleSubmit}
          >
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
          
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
}

export default Login