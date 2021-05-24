import React from 'react'

export default function BoardDetail({title, username, content}) {    
    
    return (
            <div style= {{marginTop:"100px",  borderTop:"groove 5px", borderBottom:"groove 5px", height:"600px"}}>
                <div>
                <label style ={{width:"600px", fontWeight:"bold", fontSize:"20px" ,marginLeft:"10px", marginRight:"10px"}}>
            {title}
         </label>
                </div>
        <div>
        <label style ={{width:"600px", fontSize:"15px", marginLeft:"10px", marginRight:"10px"}}>
            {username}
         </label>
        </div>

         <div style={{borderStyle:"solid", borderColor:"black", borderWidth:"2px", width:"600px", marginTop:"10px", backgroundColor:"black"}}></div>
         <div style={{marginTop:"10px"}}>
         <label style = {{width:"600px", marginLeft:"10px", marginRight:"10px"}}>
             {content}
             </label>
         </div>
  
            </div>
    )
}
