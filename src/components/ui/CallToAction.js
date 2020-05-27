import React  from 'react'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonArrow from '../../components/ButtonArrow'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link}  from "react-router-dom"


const useStyles=makeStyles(theme=>({
    LearnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em"
        }
    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        height:"80em",
        width:"100%",
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${mobileBackground})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"100%",
            width:"100%"
        }
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
        [theme.breakpoints.down("sm")]:{
        marginRight:0,
        margin:0
        }
    }

   
}))
const CallToAction=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Grid container style={{height:"60em"}}
        direction={matchesSM ? "column" :"row"}
         justify={matchesSM ? "center": "space-between"} alignItems="center" className={classes.background}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em",textAlign:matchesSM ? "center" : "inheret"}} >
                <Grid container direction="column" justify={matchesSM ? "center" :undefined}>
                    <Grid item >
                        <Typography variant="h2">
                            Simple Software , <br/>Revolutionary Results
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
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
    )

}
export default CallToAction