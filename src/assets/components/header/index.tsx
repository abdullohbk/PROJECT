function header(){
    return (
      <>
        <header className="bg-primary py-4">
          <div className="container">
            <nav className="d-flex align-items-center justify-content-between">
              <p className="text-white">Logo</p>
              <ul className="d-flex align-items-center gap-5">
                <li className="text-white">Home</li>
                <li className="text-white">About</li>
                <li className="text-white">Contact</li>
                <li className="text-white">Servise</li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
}

export default header