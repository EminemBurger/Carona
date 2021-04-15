import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { loginUser } from '../action/auth'
import { connect } from 'react-redux'
import '../App.css'
import $ from 'jquery'




const Login = ({ loginUser, isLoggedIn }) => {


    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')

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



    if (isLoggedIn) return <Redirect to="/" />

    return (
        <div className="limiter" >
        <div className="gogh">
        </div>


        <div className="Login-ddiv">
            <div className="Login-div">
                <h1>Login</h1>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="text" value={Email} onChange={(e) => SetEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                loginUser(Email, Password)
                            }
                        }}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input className="form-input" type="password" value={Password} onChange={(e) => SetPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                loginUser(Email, Password)
                            }
                        }} />
                </div>
                <div style={{ width: "200px", marginTop: "10px" }}>
                    <Link to="/signup" style={{ float: "right", fontSize: "13px", textDecoration: "none" }}>
                        SIGN UP
						</Link>
                </div>
                <button className="btn-grad" onClick={(e) => {
                    loginUser(Email, Password)
                }}>Login</button>
            </div>
        </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { loginUser })(Login)



