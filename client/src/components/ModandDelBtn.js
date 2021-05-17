import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {  Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';

const ModandDelBtn = ({title,  content, createdAt, isLoggedIn}) => {
    
    const history = useHistory();
    const [show, SetShow] = useState(false);
    const [message, SetMessage] = useState('');

    return (
        <div style={{ width:"600px", marginTop:"10px"}}>
        <Button color="secondary" variant="contained" style={{ float: "right" }} onClick={async (e) => {
            await axios.delete('http://localhost:4000/boardapp/:board', {
                data: {
                    title: title,
                    content: content,
                    createdAt: createdAt,
                }
            })
            .then(function(response) {
            history.push('/Forum');
            })
            .catch(function(error) {
                SetShow(true);
                SetMessage('작성자가 아니기 때문에 삭제할 수 없습니다!');
                console.log(error);
            });
        }}>

            삭제
        </Button>
        <Link to={{
        pathname:"/Board",
        state: {
          title: title,
          content: content,
          modify : 1,
          createdAt: createdAt,
        }
      }}>
        <Button color="primary" variant="contained" style={{ float: "right", marginRight: "10px" }}>
                수정
        </Button>
        </Link>
        <Modal show={show} SetShow={SetShow} Message={message}/>
    </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { })(ModandDelBtn);