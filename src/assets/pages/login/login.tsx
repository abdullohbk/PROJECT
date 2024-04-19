function Login(){
    return (
      <>
        <h1 className="text-primary text-center">Login</h1>

        <div className="container-md">
          <h1 className="text-primary text-center">Register</h1>
          <form
            className="p-4 border w-50 mx-auto my-5 rounded"
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