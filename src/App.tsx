import React from 'react';
import './index.css'
import {makeStyles} from '@material-ui/core'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1>REACT AND TYPESCRIPT TODO APP</h1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#00303d'
  }
})

export default App;