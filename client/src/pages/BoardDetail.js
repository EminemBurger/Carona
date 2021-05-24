import React from 'react'
import { useLocation} from 'react-router-dom'
import '../App.css'
import ModandDelBtn from '../components/ModandDelBtn';
import BoardComponent from '../components/BoardDetail';


export default function BoardDetail() {
    const location = useLocation();
    const title = location.state.title;
    const username = location.state.username;
    const content = location.state.content;
    const createdAt = location.state.createdAt;

    return (
        <div className="wrap" style ={{display:"flex", alignItems:"center", flexDirection:"column", height:"900px"}}>
   
        <BoardComponent title={title} username={username} content={content}/>
        <ModandDelBtn title = {title} content={content} createdAt={createdAt}/>

        </div>
    )
}
