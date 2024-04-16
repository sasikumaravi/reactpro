import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Crud() {
    const[data,setData]=useState([])
     //create state
    const[id,setId]=useState('')
    const[title,setTitle]=useState('')
    const[story,setStory]=useState('')
    const[pic,setPic]=useState('')
    const[rating,setRating]=useState(0)
     //update state
     const[popUp,setPopUp]=useState(false)
     const[id1,setId1]=useState('')
     const[title1,setTitle1]=useState('')
     const[story1,setStory1]=useState('')
     const[pic1,setPic1]=useState('')
     const[rating1,setRating1]=useState(0)
    //Read Operation
    useEffect(()=>{
        axios.get("http://localhost:3003/std")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    //Create Operation
    const handleSubmit=()=>{
        axios.post("http://localhost:3003/std",{id:id,title:title,story:story,rating:rating,pic:pic})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    //Update Operation
    const openPopUp=(data)=>{
        setPopUp(true);
        setId1(data.id)
        setTitle(data.title)
        setStory1(data.story)
        setPic1(data.pic)
        setRating1(data.rating)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3003/std/${id1}`,{id:id1,title:title1,story:story1,pic:pic1,rating:rating1})
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
    }
    //Delete Operation
    const handleDelete=(idd)=>{
        axios.delete(`http://localhost:3003/std/${idd}`)
        .then(res=>{
        alert("Deleted Successfully")})
        .catch(err=>console.log(err))
    }
  return (
    //form to create a post
    <div>
        <h1>Movie Portal</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Id:</label>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br></br>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
                <label>Story:</label>
                <input type="text" value={story} onChange={(e)=>setStory(e.target.value)}/><br></br>
                <label>Rating:</label>
                <input type="number" value={rating} onChange={(e)=>setRating(e.target.value)}/><br></br>
                <label>PIC LINK:</label>
                <input type="text" value={pic} onChange={(e)=>setPic(e.target.value)}/><br></br>
                <button type='submit'>Add Karo</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>STORY</th>
                        <th>RATING</th>
                        <th>ACTION</th>
                        <th>PICS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x)=>(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.rating}</td>
                            <td><img src='{x.pic}'/></td>
                            <td>{x.title}</td>
                            <td>{x.story}</td>
                            <td>{x.rating}</td>
                            <td><button onClick={()=>{openPopUp(x)}}>Update</button><button onClick={()=>handleDelete(x.id)}>Delete</button></td>
                        </tr>
                    )
                    )}
                    
                </tbody>
            </table>

            <div>
                <button onClick={()=>setPopUp(false)}>X</button>
                <div>
                    <form onSubmit={handleUpdate}>
                    <label>Id:</label>
                <input type="text" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
                <label>Title:</label>
                <input type="text" value={title1} onChange={(e)=>setTitle1(e.target.value)}/><br></br>
                <label>Story:</label>
                <input type="text" value={story1} onChange={(e)=>setStory1(e.target.value)}/><br></br>
                <label>Rating:</label>
                <input type="number" value={rating1} onChange={(e)=>setRating1(e.target.value)}/><br></br>
                <label>PIC LINK:</label>
                <input type="text" value={pic1} onChange={(e)=>setPic1(e.target.value)}/><br></br>
                <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}
