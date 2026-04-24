import React, { useEffect, useState } from 'react'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Saved from './componenets/Saved'
import Footer from './componenets/Footer'
import {
  BrowserRouter, 
  Routes, 
  Route} from 'react-router-dom'
import axios from 'axios'

const App = () => {

  const API_KEY = "hFuvUvjssDAkzJaAB1d74eJUyPEKh5uYVrF7NEBlKVhh1IeDigsjRDjV";

  const [images, setImage] = useState([]);
  const [search, setSearch] = useState("tokyo");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  useEffect(() => {

    const fetchImg = async () => {

        const response = await axios.get("https://api.pexels.com/v1/search", {

          headers: {Authorization: API_KEY},
          params: {query: `${search}`, per_page: 80},
        });
        
        setImage(response.data.photos);
        setLoader(false);
    }

    const data = JSON.parse(localStorage.getItem("images"))

    if(data) {
      setSaved(data);
    }
    
    fetchImg();
    

  }, [search])
   
  useEffect(() => {

    if(saved.length != 0 ) {

       const json = JSON.stringify(saved)
       localStorage.setItem("images", json)

    }
  }, [saved])

  return (
    <>
    <BrowserRouter>

    <Navbar setSearch={setSearch}/>

    <Routes>

     <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />}/>
     <Route path='/saved' element={<Saved saved={saved} setSaved={setSaved} loader={loader} />}/>

    </Routes>

    <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
