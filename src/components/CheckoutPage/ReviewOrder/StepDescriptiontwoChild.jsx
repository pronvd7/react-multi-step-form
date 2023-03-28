import React from 'react';
import { Typography  } from '@material-ui/core';
import TextField from '@mui/material/TextField';


  const  StepDescriptiontwoChild = () =>{
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      Additional information
      </Typography>

      <div style={{ width: '512px',
        margin: 'auto'}}>
      <Typography  variant="p" style={{
        color: '#4D4F59',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '32px'}}>
       Please share any information you'd like about your equipment, project, or issues you are facing.
      </Typography>
       </div>
       <div style={{ width: '512px',
        paddingTop: '32px',
        margin: 'auto'}}>
       <TextField style={{width: '512px',height: '240px!important'}} 
       id="outlined-basic"
       label="Issue description"  multiline
       rows={8}
        variant="outlined" />
       </div>
     </div>
      );
}

export default StepDescriptiontwoChild;