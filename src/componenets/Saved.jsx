import React from 'react'
import Loader from './Loader'

const Saved = ({saved, setSaved, loader}) => {

  let myStyle = {
    minHeight: "65vh",
    margin: "40px auto"
  }

  return (
    <>
       <div className="container-fluid text-center" id='top' style={myStyle}>

{loader || saved.length === 0 ? (
    <Loader/>
) : (
    <>
    <div className="flex">
       
    {saved.map((img) => {
      return (
          <div className='items' key={img.id}>
            
            <img src={img.src.medium} alt={img.photographer}/>

        </div>
    )
})}
</div>
    </>
)}

{saved.length != 0 && (
  <>
  <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem"}}>

 <a href='#top' className="btn btn-warning my-5">Back To Top</a>
 <div className="btn btn-danger" onClick={() => setSaved([])}>Clear All</div>

  </div>
  </>
)}


</div>
    </>
  )
}

export default Saved
