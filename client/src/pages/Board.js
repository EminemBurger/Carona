import React, { useState } from 'react'
import '../App.css'
import Button from '@material-ui/core/Button';
import { Link, useHistory, useLocation } from 'react-router-dom'
import jsonwebtoken from 'jsonwebtoken'
import axios from 'axios'

export default function Board() {

    const [title, SetTitle] = useState('')
    const [content, SetContent] = useState('')
    const history = useHistory();

    const location = useLocation();

    const [updatetitle, Setupdatetitle] = useState(location.state.title)
    const [updatecontent, Setupdatecontent] = useState(location.state.content)

    const modify = location.state.modify

    if (modify) {
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
                        onClick={(e) => {
                            const token = localStorage.getItem('token');
                            const _id = jsonwebtoken.decode(token).user.id;
                            const config = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }


                            const body = JSON.stringify({ _id, updatetitle, updatecontent })


                            axios.put('http://localhost:4000/boardapp/:board', body, config)
                                .then(history.push('/Forum'))
                                .catch(function (error) { console.log(error) });

                        }}>
                        수정
                </Button>
                </div>

            </div>
        )

    }

    else {
        return (
            <div className="wrap" style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "100px" }}>
                <input style={{ width: "600px", height: "30px", fontSize: "15px", textOverflow: "ellipsis" }}
                    placeholder="제목을 입력해주세요."
                    maxLength="40"
                    value={title}
                    onChange={(e) => SetTitle(e.target.value)}>
                </input>
                <div style={{ borderStyle: "solid", borderColor: "black", borderWidth: "2px", width: "600px", marginTop: "10px", backgroundColor: "black" }}></div>

                <textarea style={{ width: "600px", height: "500px", marginTop: "15px", fontSize: "15px" }}
                    value={content}
                    onChange={(e) => SetContent(e.target.value)}>
                </textarea>
                <div style={{ width: "600px", marginTop: "10px" }}>
                    <Link to="/Forum">
                        <Button color="secondary" variant="contained" style={{ float: "right" }}>

                            취소
                        </Button>

                    </Link>
                    <Button color="primary" variant="contained" style={{ float: "right", marginRight: "10px" }}
                        onClick={(e) => {
                            const token = localStorage.getItem('token');
                            const _id = jsonwebtoken.decode(token).user.id;
                            const config = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }


                            const body = JSON.stringify({ _id, title, content })


                            axios.post('http://localhost:4000/boardapp/:board', body, config)
                                .then(history.push('/Forum'))
                                .catch(function (error) { console.log(error) });

                        }}>
                        등록
                </Button>
                </div>

            </div>
        )

    }

}
