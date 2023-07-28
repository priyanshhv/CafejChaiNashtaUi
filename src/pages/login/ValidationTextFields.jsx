import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { postDataFromApi } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function ValidationTextFields({handleClose,handleOpen}) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [showText,setShowText] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
         backdropFilter: "blur(3px)",
         color: "orange !important"
        // backgroundColor:'#60afff4a'
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'space-between'
      }}>
        <TextField
        //   error
          label="required" 
          //color="secondary" 
          sx={{
                input: {
                color: "blue",
                }
            }}
          onChange={(e)=>setUsername(e.target.value)}
          focused
          InputProps={{
            startAdornment: <InputAdornment position="start">Username:</InputAdornment>,
          }}
        />
        <TextField
          label="required" 
         // color="secondary" 
         sx={{
                input: {
                color: "blue",
                }
            }}
          onChange={(e)=>setPassword(e.target.value)}
          focused
          InputProps={{
            startAdornment: <InputAdornment position="start">Password:</InputAdornment>,
          }}
          helperText={showText?"WRONG CREDENTIALS":" "}
        />
        
        <Button variant="contained" color="success" onClick={async ()=>{
            //handleClose()
            if(username.length<=2 || password.length<=2){
            setShowText(true)
            return;
            }

            const postData = {
              username : username,
              password :password
            };
            postDataFromApi("/auth/login",postData,handleClose)
            .then((res)=>{
              console.log("LOGIN DATA:", res.data.accessToken);
              localStorage.setItem("accessTokenCafe", res.data.accessToken);
              navigate("/setMenu")
            })
            .catch((err) => {
                navigate("*")
            });
        }}>
            Submit 
        </Button>
      </div>
    </Box>
  );
}
