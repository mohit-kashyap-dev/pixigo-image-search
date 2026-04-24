import React from 'react'
import '../responsive/Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({setSearch}) => {

    const location = useLocation();
    const navigate = useNavigate();

  return (
    <>
    <div className="nav-bar">
      <h3 className='pexel'>Pixigo</h3>

      {location.pathname === "/saved" ? (
        <div className="button btn btn-warning con" onClick={() => navigate("/")}>Home</div>  
      ) : (
        <div className="button btn btn-warning con" onClick={() => navigate("/saved")}>Saved</div>
      )}

    </div>

    <div className="nav mt-3">
       <div className="button btn btn-outline-info mx-3" onClick={() => {setSearch("nature"); navigate("/")}}>Nature</div>
       <div className="button btn btn-outline-primary mx-3" onClick={() => {setSearch("cars"); navigate("/")}}>Cars</div>
       <div className="button btn btn-outline-light mx-3" onClick={() => {setSearch("travel"); navigate("/")}}>Travel</div>
       <div className="button btn btn-outline-danger text-light mx-3" onClick={() => {setSearch("city"); navigate("/")}}>City</div>
       <div className="button btn btn-outline-warning mx-3" onClick={() => {setSearch("fashion"); navigate("/")}}>Fashion</div>
       <div className="button btn btn-outline-light mx-3" onClick={() => {setSearch("animals"); navigate("/")}}>Animals</div>
       <div className="button btn btn-outline-danger text-light mx-3" onClick={() => {setSearch("technology"); navigate("/")}}>Technology</div>
       <div className="button btn btn-outline-info mx-3" onClick={() => {setSearch("finance"); navigate("/")}}>Business & Finance</div>
       <div className="button btn btn-outline-primary text-light mx-3" onClick={() => {setSearch("tokyo"); navigate("/")}}>Tokyo</div>
       <div className="button btn btn-outline-warning mx-3" onClick={() => {setSearch("dubai"); navigate("/")}}>Dubai</div>
    </div>
   
   <div className="container my-4" style={{width: "780px"}}>
  
  {location.pathname === "/" ? (
        <div className="mb-3">
        <input type="search" className="form-control bg-dark text-light" id="search" onChange={(e) => setSearch(e.target.value)} />
      </div>
  ) : "" }
    
   </div>
    </>
  )
}

export default Navbar
