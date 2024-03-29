import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  Link, Redirect } from 'react-router-dom';
import { registerUser } from '../action/auth'
import { connect } from 'react-redux'
import ModalComp from './Modal';



const useStyles = makeStyles((theme) => ({
    login_ddiv: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#faf2da',


    },

    
    regi_div: {
        width: '350px',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex:'3',
        backgroundColor: 'white',
        borderRadius: '10px',
        paddingTop: '10px',
        boxShadow: '0px 0px 10px 1px inset gray',
        "& h1": {
            fontFamily: 'KoHo, sans-serif',
            fontSize:'25px'
        }
    },

    form_group : {
        position:'relative',  
        marginTop: '20px',
        
    },

    form_input: {
        position: 'relative',
        padding: '12px 0px 5px 0',
        width: '100%',
        outline: '0',
        border: '0',
        boxShadow: '0 1px 0 0 #e5e5e5',
        transition: 'box-shadow 150ms ease-out',
        "&:focus": {
            boxShadow: '0 2px 0 0 blue',
        },
        "&:focus $form_label": {
            transform: 'translateY(-125%)',
            fontSize: '.75em',
        },

    },

    form_label : {
        position: 'absolute',
        top: '-15px',
        color: '#999',
        backgroundColor: '#fff',
        zIndex: '10',
        transition: 'transform 150ms ease-out, font-size 150ms ease-out',
    },


    register_div: {
        width:'200px',
        marginTop:'10px',
    },

    register_btn: {
        float:'right',
        fontSize:'13px',
        textDecoration:'none',
        backgroundColor:'white',
        border:'none',
        cursor:'pointer',
    },

    btn_grad: {
        backgroundColor: '#4a503d',
        margin: '10px',
        paddingTop:'5px',
        paddingBottom:'5px',
        width:'120px',
        textAlign:'center',
        textTransform:'uppercase',
        transition:'0.5s',
        backgroundSize:'200% auto',
        color:'white',
        borderRadius:'30px',
        cursor:'pointer',
        marginTop:'40px',
        fontFamily: 'KoHo, sans-serif',
        "&:hover": {
            backgroundPosition:'right center',
            color:'#8e9775',
            textDecoration:'none',
        }
    }
  }));

     const Signupdiv = ({ isLoggedIn, registerUser }) => {

    const [Fullname, setFullname] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');

    const [Modal , SetModal] = useState(false);

    const classes = useStyles();

    if (isLoggedIn) return <Redirect to="/"></Redirect>


    return (
            <div className={classes.login_ddiv}>
                <div className={classes.regi_div}>
                    <h1>Register</h1>
                    <div className={classes.form_group}>
                        <label className={classes.form_label}>Fullname</label>
                        <input className={classes.form_input} type="text" value={Fullname} autoComplete='off' onChange={(e) => setFullname(e.target.value)}
                            onKeyDown={ async (e) => {
                                if (e.key === 'Enter') {
                                    SetModal(await registerUser(Fullname, Username, Email, Password));
                                }
                            }}
                        />
                    </div>
                    <div className={classes.form_group}>
                        <label className={classes.form_label}>Username</label>
                        <input className={classes.form_input} type="text" value={Username} autoComplete='off' onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={async (e) => {
                                if (e.key === 'Enter') {
                                    SetModal(await registerUser(Fullname, Username, Email, Password));
                                }
                            }}
                        />
                    </div>
                    <div className={classes.form_group}>
                        <label className={classes.form_label}>Email</label>
                        <input className={classes.form_input} type="text" value={Email} autoComplete='off' onChange={(e) => SetEmail(e.target.value)}
                            onKeyDown={async (e) => {
                                if (e.key === 'Enter') {
                                    SetModal(await registerUser(Fullname, Username, Email, Password));
                                }
                            }}
                        />
                    </div>
                    <div className={classes.form_group}>
                        <label className={classes.form_label}>Password</label>
                        <input className={classes.form_input} type="password" value={Password} onChange={(e) => SetPassword(e.target.value)}
                            onKeyDown={async (e) => {
                                if (e.key === 'Enter') {
                                    SetModal(await registerUser(Fullname, Username, Email, Password));
                                }
                            }} />
                    </div>
                    <div className={classes.register_div}>
                        <Link to='/Login' className={classes.register_btn}>
                            LOGIN
                        </Link>
                    </div>
                    <button className={classes.btn_grad} onClick={async (e) => {
                                    SetModal(await registerUser(Fullname, Username, Email, Password));
                    }}>Register</button>
                </div>
                <ModalComp show={Modal} SetShow={SetModal} Message='양식폼에 맞추어 다시 제대로 입력해주세요.'/>
            </div>
            
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { registerUser })(Signupdiv);
