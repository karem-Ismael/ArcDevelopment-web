import React,{useState} from 'react'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link}  from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import background from '../assets/background.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import ButtonArrow from './ButtonArrow'
import mobileBackground from '../assets/mobileBackground.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles=makeStyles(theme=>({
    Background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"70em",
        marginTop:-14,
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${mobileBackground})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            
        },
        paddingBottom:"10em"
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:80,
        width:205,
        fontSize:"1.5rem",
        backgroundColor:theme.palette.common.orange,
        marginRight:"5em",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]:{
        marginRight:0,
        margin:0
        }
    },
    LearnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("md")]:{
            marginBottom:"2em"
        }
    },
    message:{
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop:"5em",
        borderRadius:5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:45,
        width:245,
        fontSize:"1rem",
        backgroundColor:theme.palette.common.orange,
        "$:hover":{
        backgroundColor:theme.palette.secondary.light

        }

    }

}))

  
const Contact=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [emailhelper,setemailHelper]=useState("")
    const [phone,setPhone]=useState('')
    const[phonehelper ,setphoneHelper]=useState("")
    const [message,setMessage]=useState('')
    const [open,setOpen]=useState(false)
    const [loading,setLoading]=useState(false)
    const [alert,setAlert]=useState({open:false,message:"",backgroundColor:""})
const onConfirm=()=>{
    setLoading(true)
    axios.get(`https://us-central1-materialui-course-c4970.cloudfunctions.net/sendMail`,{
        params:{
            name:name,
            email:email,
            message:message,
            phone:phone
        }
    }
        )
        .then(res=>{
            setLoading(false)
            setOpen(false)
            setName("")
            setEmail('')
            setMessage('')
            setPhone('')
            setAlert({open:true,message:"Email send Successfully",backgroundColor:"#4BB543" })
            console.log(res)
        })
        .catch(error=>{
            setLoading(false)
            setAlert({open:true,message:"Faild to send Email",backgroundColor:"" })
            console.log(error)
        })
}
const ButtonContent=(
    <>
        Send Message <img src={airplane} alt="air" style={{marginLeft:"1em"}}/>
    </>
)
    const onChange=(e)=>{
        let valid;
        switch(e.target.id){
            case 'email':
                setEmail(e.target.value)
                valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
                if(! valid ){
                    setemailHelper("invalid Email")
                }else{
                    setemailHelper("")
                }
                break;
                case 'phone' :
                    setPhone(e.target.value) 
                    valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)
                    if(!valid){
                        setphoneHelper('Invalid Phone number')
                    }else{
                        setphoneHelper("")
                    }
                    break;
                    default:break;
        }
    }
    return (
        <Grid container direction="row" >
            <Grid item container direction="column" justify="center" 
                style={{marginTop:matchesSM ? "1em":matchesMD?"5em":0,marginBottom:matchesMD ?"5em" :0}}
                lg={4} xl={3} alignItems="center" >
                <Grid item >
                    <Grid item container direction="column" >
                    <Grid item >
                    <Typography variant="h2" 
                    style={{lineHeight:1}} >Contact Us</Typography>
                    <Typography variant="body1" 
                    style={{color:theme.palette.common.blue}} >We 're waiting </Typography>

                </Grid>
                <Grid item container style={{marginTop:"2em"}} >
                    <Grid item >
                        <img src={phoneIcon} alt="phone icon img " style={{marginRight:"0.5em"}} />
                    </Grid>
                    <Grid item  >
                        <Typography variant="body1" 
                        style={{color:theme.palette.common.blue,fontSize:'1rem'}}>
                            <a href="tel:01019241199" style={{textDecoration:"none",
                            color:"inherit"
                        }}>
                                  (555) 555-5555

                            </a>

                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBotton:"2em"}} >
                    <Grid item >
                        <img src={emailIcon} alt="email icon img " 
                        style={{marginRight:"0.5em",verticalAlign:"bottom"}} />
                    </Grid>
                    <Grid item  >
                        <Typography variant="body1" 
                        style={{color:theme.palette.common.blue,fontSize:'1rem'}}>
                            <a href="mailto:karem.Ismael95@gmail.com" style={{textDecoration:"none",
                            color:"inherit"}}>
                                 karem.Ismael@gmail.com
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth:"20em"}}>
                    <Grid item style={{marginBottom:"0.5em"}} > 
                    <TextField fullWidth label="Name" id="name" value={name}
                     onChange={(e)=>setName(e.target.value)} />
                    </Grid>
                    <Grid item style={{marginBottom:"0.5em"}} >
                    <TextField fullWidth label="Email" id="email" value={email}
                    onChange={onChange}  
                    helperText={emailhelper}
                    error={emailhelper.length !== 0}
                    />
                    </Grid>
                    <Grid item style={{marginBottom:"0.5em"}} >
                    <TextField fullWidth label="Phone" id="phone" value={phone}
                    onChange={onChange}  
                    helperText={phonehelper}
                    error={phonehelper.length !== 0}   />
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth:"20em"}} style={{marginBottom:"0.5em"}}>
                    <TextField 
                    fullWidth
                        id="message" value={message} 
                        InputProps={{disableUnderline:true}}
                        className={classes.message}
                        multiline
                        rows={10}
                    onChange={(e)=>setMessage(e.target.value)}/>
                </Grid>
                <Grid item container  style={{marginTop:'2em'}}justify="center" >
                    <Button variant="contained"
                    disabled={
                        name.length ===0 ||
                        message.length === 0 ||
                        emailhelper.length !== 0 ||
                        phonehelper.length !== 0 ||
                        email.length ===0 ||
                        phone.length === 0
                    }
                    onClick={()=>setOpen(true)}
                     className={classes.sendButton} >
                        {ButtonContent}
                     </Button>
                </Grid>

                    </Grid>
                </Grid>
            </Grid>
            
            <Dialog  open={open} onClose={()=>setOpen(false)}    
                style={{zIndex:1302}}     
               fullScreen={matchesXS}                     
                    >
                <DialogContent>
                    <Grid   container direction="column" alignItems={matchesMD ?"center" :undefined} >
                        <Grid item >
                            <Typography align={matchesSM ?"center" :undefined}variant="h2" gutterBottom >Confirm Message</Typography>
                        </Grid>
                                <Grid item style={{marginBottom:"0.5em"}} > 
                                    <TextField fullWidth label="Name" id="name" value={name}
                                    onChange={(e)=>setName(e.target.value)} />
                                </Grid>
                                <Grid item style={{marginBottom:"0.5em"}} >
                                    <TextField fullWidth label="Email" id="email" value={email}
                                    onChange={onChange}  
                                    helperText={emailhelper}
                                    error={emailhelper.length !== 0}
                                    />
                                </Grid>
                                <Grid item  >
                                    <TextField fullWidth label="Phone" id="phone" value={phone}
                                            onChange={onChange}  
                                            helperText={phonehelper}
                                            error={phonehelper.length !== 0} 
                                          />
                                </Grid>
                                <Grid item style={{maxWidth:matchesXS ? "100%":"20em"}} >
                                    <TextField 
                                        id="message" value={message} 
                                        InputProps={{disableUnderline:true}}
                                        className={classes.message}
                                        fullWidth
                                        multiline
                                        rows={10}
                                       onChange={(e)=>setMessage(e.target.value)}/>
                                </Grid>

                    </Grid>
                    <Grid item container direction={matchesXS || matchesSM ? "column" :"row"} style={{marginTop:"2em"}}alignItems="center">
                        <Grid item >
                             <Button color="primary" onClick={()=>setOpen(false)} >Cancle</Button>
                        </Grid>
                        <Grid item >
                        <Button variant="contained"
                           disabled={
                            name.length ===0 ||
                            message.length === 0 ||
                            emailhelper.length !== 0 ||
                            phonehelper.length !== 0 ||
                            email.length ===0 ||
                            phone.length === 0
                          }
                    onClick={onConfirm}
                     className={classes.sendButton} >
                        {loading ?
                         <CircularProgress size={24} className={classes.buttonProgress} />:
                        ButtonContent}
                     </Button>
                        </Grid>

                    </Grid>
                </DialogContent>

            </Dialog>
       <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{
           backgroundColor:alert.backgroundColor
       }}} anchorOrigin={{vertical:"top",horizontal:"center"}} 
       onClose={()=>setAlert({...alert,open:false})}
       autoHideDuration={4000}
        />
            <Grid item container direction={matchesMD?"column" :"row"}
                justify={matchesMD ?"center" :undefined}
            className={classes.Background} alignItems="center" lg={8} xl={9}>
            <Grid item style={{marginLeft: matchesMD ? 0 : "3em",textAlign:matchesMD ? "center" : undefined}} >
                <Grid container direction="column" >
                    <Grid item >
                        <Typography align={matchesMD ?"center":undefined} variant="h2">
                            Simple Software , <br/>Revolutionary Results
                        </Typography>
                        <Typography align={matchesMD ?"center":undefined}  variant="subtitle2" style={{fontSize:"1.5rem"}}>
                            Take the Advantage of the 21st Century 
                        </Typography>
                        <Grid item >
                                  <Button variant="outlined"
                                  component={Link} to="/revolution"
                                     onClick={()=>props.setValue(2)}
                                   className={classes.LearnButton} >
                                     <span style={{marginRight:5}}>Learn More</span> 
                                      <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                  
                                   </Button>

                         </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant="contained"
                    component={Link} to="/estimate"
                    onClick={()=>props.setValue(5)}
                className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>

            </Grid>
        </Grid>
    )

}
export default Contact 