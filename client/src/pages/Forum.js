import React from 'react';
import BoardTable from '../components/BoardTable';
import  BoardBtn  from '../components/BoardBtn';


export default function Forum() {

    return (
        <div style ={{display:"flex", alignItems:"center", flexDirection:"column", height:'1100px', minHeight:'1100px'}}>
            <BoardTable/>
            <BoardBtn/>
        </div>
    )
}



