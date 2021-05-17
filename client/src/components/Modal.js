import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal : {
        position: 'fixed',
        left:'0',
        top:'0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_content: {
        witdh: '500px',
        height:'125px',
        backgroundColor: '#fff',
    },
    modal_header: {
        height: '10px',
        padding: '10px',
    },

    modal_footer: {
        height: '15px',
        padding: '10px',
    },

    modal_title : {
        margin:'0',
    },

    modal_body : {
        padding: '10px',
        height: '40px',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
    },

    display_none: {
        display: 'none',
    },

    close_btn: {
        float: 'right',
    },

  }));



export default function Modal({show, SetShow, Message}) {
    const classes = useStyles();

    if (show === true) {
    return (
        <div className={classes.modal}>
            <div className={classes.modal_content}>
                <div className={classes.modal_header}>
                    <h4 className={classes.modal_title}></h4>
                </div>
                <div className={classes.modal_body}>
                    <p>{Message}</p>
                </div>
                <div className={classes.modal_footer}>
                    <button className={classes.close_btn} onClick = {(e) => {SetShow(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
    }

    else
       return null;

}
