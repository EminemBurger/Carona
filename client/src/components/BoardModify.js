import React, { useState } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Modal from '../components/Modal';

export default function BoardModify({title, content, created_At}) {
    const [updatetitle, Setupdatetitle] = useState(title)
    const [updatecontent, Setupdatecontent] = useState(content)
    const createdAt = created_At;

    const history = useHistory();

    const [show, SetShow] = useState(false);
    const [message, SetMessage] = useState('');



    return (
        <div className="wrap" style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "100px" }}>
        <input style={{ width: "600px", height: "30px", fontSize: "15px", textOverflow: "ellipsis" }}
            placeholder="제목을 입력해주세요."
            maxLength="40"
            value={updatetitle}
            onChange={(e) => Setupdatetitle(e.target.value)}>
        </input>
        <div style={{ borderStyle: "solid", borderColor: "black", borderWidth: "2px", width: "600px", marginTop: "10px", backgroundColor: "black" }}></div>

        <textarea style={{ width: "600px", height: "500px", marginTop: "15px", fontSize: "15px" }}
            value={updatecontent}
            onChange={(e) => Setupdatecontent(e.target.value)}>
        </textarea>
        <div style={{ width: "600px", marginTop: "10px" }}>
            <Link to="/Forum">
                <Button color="secondary" variant="contained" style={{ float: "right" }}>

                    취소
                </Button>

            </Link>
            <Button color="primary" variant="contained" style={{ float: "right", marginRight: "10px" }}
                onClick={ async (e) => {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }


                    const body = JSON.stringify({updatetitle, updatecontent, createdAt })


                    await axios.put('http://localhost:4000/boardapp/:board', body, config)
                        .then(function(response) {
                            history.push('/Forum');
                        })
                        .catch(function (error) { 
                            SetShow(true);
                            SetMessage('작성자가 아니기 때문에 수정할 수 없습니다!');
                            console.log(error);
                        });

                }}>
                수정
        </Button>
        </div>
        <Modal show={show} SetShow={SetShow} Message={message}/>
    </div>
    )
}
