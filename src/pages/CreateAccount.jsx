import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import img from '../Asstes/Create Account-Log in-page/Woman connects a laptop to the server.png'
import google from '../Asstes/Create Account-Log in-page/google-logo-icon-png-transparent-background-osteopathy-16 1.png'
import facebook from '../Asstes/Create Account-Log in-page/facebook-512 1.png'

import Paper from '@mui/material/Paper';

import NativeSelect from '@mui/material/NativeSelect';

import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Button from '@mui/material/Button';



let curDate = new Date();
curDate = curDate .getHours();
let greeting = "";

if(curDate >=1 && curDate < 12){
  greeting = "Good Morning!";
}
else if (curDate>= 12 && curDate < 16 ) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}



const CreateAccount = () => {

  //pasworld fild
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <Box sx={{
      display: 'flex',
      position: 'relative',
      height: '100vh',
      borderRadius: '36px'
    }}>

      <Box sx={{
        width: '417px',
        flexShrink: ' 0',
        background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)',
        borderRadius: '25px 0 0 25px'
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '276px',
          height: '106px',
          padding: '81px 72px 0 72px'
        }}>
          <Typography sx={{
            color: '#FFF',
            // fontFamily: 'Poppins',
            fontSize: '24px',
            // fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '53px', /* 220.833% */
            letterSpacing: '2px',
          }}>
            <span >{greeting}</span>
          </Typography>

          <Typography sx={{

            color: '#FFF',
            fontSize: '48px',
            fontStyle: 'none',
            fontWeight: '900',
            lineHeight: '53px',/* 110.417% */
            letterspacing: '2px',

          }}>
            HAVE A NICE DAY
          </Typography>
        </Box>


      </Box>

      <Box component="img" src={img}
        sx={{
          width: '500px',
          height: '356px',
          position: 'absolute',
          bottom: '0px',
          left: '-1px',
          borderRadius: '0 0 0 25px'
        }} />

      <Paper elevation={3} style={{
        
        padding: '36px',
        borderRadius: '0px 25px 25px 0px',
        // backgroundColor: 'red'
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '62px',
          padding: '81px 0 0 110px',
          // backgroundColor: 'yellow'
        }}>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '367px',
          }}>
            <Typography sx={{
              width: '450px',
              color: '#277502',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '72.917%', /* 72.917% 35px */
              letterSpacing: '3.84px'
            }}>
              Create Account
            </Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Language
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: 'languge',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>English(US)</option>
                  <option value={20}>English(UK)</option>
                  <option value={30}>Sinhala</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>



          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '71px',
          }}>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
            }}>

              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '51px',
              }}>
                <Stack direction="row" spacing={'51px'}>
                  <Button variant="outlined" sx={{
                    width: '331.291px',
                    height: '73.357px',
                    flexShrink: ' 0',
                    textTransform: 'none',
                    color: 'none',
                    fontSize: 'none'

                  }}>
                    <Box component="img" src={google}
                      sx={{
                        width: '37.785px',
                        height: '35.495px',
                        spacing: '15px',
                        position: 'absolute',
                        left: '38px',
                        top: '18.88px',
                      }} />
                    <Typography sx={{
                      position: 'absolute',
                      right: '52.54px',
                      top: '18.88px',
                      color: ' #5A5A5A',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWight: '600',
                      lineHeight: '35px' /* 218.75% */
                    }}>
                      Sign up with Google
                    </Typography>

                  </Button>
                  <Button variant="outlined" sx={{
                    width: '331.291px',
                    height: '73.357px',
                    flexShrink: ' 0',
                    textTransform: 'none'
                  }}>
                    <Box component="img" src={facebook}
                      sx={{
                        width: '37.785px',
                        height: '35.495px',
                        spacing: '15px',
                        position: 'absolute',
                        left: '38px',
                        top: '18.88px'
                      }} />
                    <Typography sx={{
                      position: 'absolute',
                      right: '43.54px',
                      top: '18.88px',
                      color: ' #5A5A5A',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWight: '6000',
                      lineHeight: '35px' /* 218.75% */
                    }}>
                      Sign up with Facebook
                    </Typography>
                  </Button>
                </Stack>
              </Box>

              <Typography sx={{
                width: '90.142px',
                height: '5px',
                color: '#A3A3A3',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '35px', /* 194.444% */
              }}>
                - OR -
              </Typography>

              <div>
                <p>
                  <TextField id="standard-basic"
                    label="Full Name"
                    variant="standard"
                    size=''
                    sx={{
                      width: '714.01587px',
                      height: '52.5689px',
                      // display: 'flex',
                      // flexDirection: 'column',
                      // alignItems: 'flex-start'
                    }}
                  />
                </p>
              </div>

              <div>
                <p>
                  <TextField id="standard-basic"
                    label="Email Address"
                    variant="standard"
                    size=''
                    sx={{
                      width: '714.01587px',
                      height: '52.5689px',
                      // display: 'flex',
                      // flexDirection: 'column',
                      // alignItems: 'flex-start'
                    }}
                  />
                </p>
              </div>

              <div>
                <p>
                  <FormControl sx={{ width: '714px' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </p>
              </div>

              {/* <div>
                <p>
                  <FormControl sx={{ width: '714px' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </p>
              </div> */}

            </Box>

            <Box>
              <Button sx={{
                display: 'flex',
                padding: '16px 234px 0px 234px',
                alignItems: 'flex-start',
                gap: '10px',
                borderRadius: '8px',
                textTransform: 'none',
                background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)'
              }}>
                <Typography sx={{
                  width: '244.919px',
                  height: '57.976px',
                  color: '#FFF',
                  textAlign: 'center',
                  // fontFamily: 'Poppins',
                  fontSize: '20px',
                  // fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '35px', /* 175% */
                }}>
                  Create Account
                </Typography>
              </Button>

              <Typography sx={{
                color: 'var(--Secondary, #5FC301)',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '22px', /* 137.5% */
                letterSpacing: '-0.408px',
              }}>
                Do you have an account ? Login here
              </Typography>

            </Box>

          </Box>

        </Box >

      </Paper >

    </Box >

  )

}

export default CreateAccount;