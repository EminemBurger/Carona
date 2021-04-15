import React from 'react'
import { useLocation, Link, useHistory } from 'react-router-dom'
import '../App.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'


export default function BoardDetail() {
    const location = useLocation();
    const title = location.state.title;
    const username = location.state.username;
    const content = location.state.content;
    const history = useHistory();

    return (
        <div className="wrap" style ={{display:"flex", alignItems:"center", flexDirection:"column", height:"1000px"}}>
            <div style= {{marginTop:"100px",  borderTop:"groove 5px", borderBottom:"groove 5px", height:"800px"}}>
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


            <div style={{ width:"600px", marginTop:"10px"}}>
                <Button color="secondary" variant="contained" style={{ float: "right" }} onClick={(e) => {
                    axios.delete('http://localhost:4000/boardapp/:board', {
                        data: {
                            title: title,
                            username : username,
                            content: content
                        }
                    }).then(history.push('/Forum'))
                    .catch(function(error) { console.log(error)});
                }}>

                    삭제
                </Button>
                <Link to={{
                pathname:"/Board",
                state: {
                  title: title,
                  content: content,
                  modify : 1
                }
              }}>
                <Button color="primary" variant="contained" style={{ float: "right", marginRight: "10px" }}>
                        수정
                </Button>
                </Link>
            </div>





        </div>
    )
}
