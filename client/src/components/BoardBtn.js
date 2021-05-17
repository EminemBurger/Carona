import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


const BoardBtn = ({isLoggedIn}) => {
      const where_to_go = isLoggedIn ? '/Board' : '/Login';

    return (
                <div style={{width:"1200px", marginTop:"15px"}}>
      
      <Link to={{
       pathname: where_to_go,
       state: {
         modify: 0
       }
      }}>
      <Button  color = '#e28f83' variant="contained" style={{float:"right", marginRight:"10px"}}>
              글쓰기
      </Button>
      </Link>
    </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
  })
  
  export default connect(mapStateToProps, { })(BoardBtn);