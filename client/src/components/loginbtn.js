import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../action/auth'

const loginbtn = ({isLoggedIn, logOut}) => {


    if (!isLoggedIn) {

    return(
        <Link to="/Login">Login</Link>
    )

    }

    else {
        return (
            <p className="logbtn" onClick={(e) => logOut()}>
                Logout
            </p>
        )
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {logOut})(loginbtn)