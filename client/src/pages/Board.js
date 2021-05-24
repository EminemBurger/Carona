import React from 'react'
import '../App.css'
import { useLocation } from 'react-router-dom'
import BoardWrite from '../components/BoardWrite';
import BoardModify from '../components/BoardModify';

export default function Board() {

    const location = useLocation();

    const updatetitle = location.state.title;
    const updatecontent = location.state.content;
    const createdAt = location.state.createdAt;

    const modify = location.state.modify

    if (modify) {
        return (
            <BoardModify
            title = {updatetitle}
            content = {updatecontent}
            created_At = {createdAt}
            />
        )

    }

    else {
        return (
            <BoardWrite/>
        )
    }

}
