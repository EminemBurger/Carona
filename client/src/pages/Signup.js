import React, { useState, useEffect } from 'react'
import { registerUser } from '../action/auth'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import $ from 'jquery'
import '../App.css'


const Signup = ({ isLoggedIn, registerUser }) => {


    useEffect(() => {
        $('input').on('focus', function () {
            $(this).parents('.form-group').addClass('focused');
        });

        $('input').on('blur', function () {
            var inputValue = $(this).val();
            if (inputValue === "") {
                $(this).parents('.form-group').removeClass('filled');
                $(this).parents('.form-group').removeClass('focused');
            } else {
                $(this).parents('.form-group').addClass('filled');
            }
        })
    }, [])


    const [Fullname, setFullname] = useState('')
    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    if (isLoggedIn) return <Redirect to="/"></Redirect>


    return (

        <div className="limiter" >
            <div className="gogh">
            </div>


            <div className="Login-ddiv">
                <div className="Login-div" style={{paddingTop:"10px", height:"400px"}}>
                    <h1>SIGN UP</h1>
                    <div className="form-group">
                        <label className="form-label">Fullname</label>
                        <input className="form-input" type="text" value={Fullname} onChange={(e) => setFullname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input className="form-input" type="text" value={Username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input className="form-input" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    registerUser(Fullname, Username, Email, Password)
                                }
                            }} />

                    </div>

                    <button className="btn-grad" onClick={(e) => {
                        registerUser(Fullname, Username, Email, Password)
                    }} >SIGN UP</button>

                </div>
            </div>

        </div>

    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { registerUser })(Signup)
