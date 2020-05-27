import React  from 'react'
import Lottie from 'react-lottie'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link}  from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import backArrow from "../assets/backArrow.svg"
import Hidden from '@material-ui/core/Hidden';
import forwardArrow from "../assets/forwardArrow.svg"
import integrationAnimation from '../animations/integrationAnimation/data.json'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagment from '../assets/increaseEngagement.svg'
import CallToAction from './ui/CallToAction'

const useStyles=makeStyles(theme=>({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop:"0.5em"
    },
    rowContainer:{
        paddingLeft:"5em",
        paddingRight:"5em"
        
    },
    itemContainer:{
        maxWidth:"40em"
    }

}))
const MobileApps=(props)=>{
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))

    return(
        <Grid container direction="column">
           <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center": undefined}>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3em"}}>
                        <IconButton style={{backgroundColor:"transparent"}}
                            component={Link} to="/custom-software"
                            onClick={()=>props.setSelectedIndex(1)}
                        >
                            <img src={backArrow} alt="backArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
             
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item >
                        <Typography 
                        align={matchesMD? 'center':"inheret"}variant="h2">
                           IOS/Android App  Development
                            </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1"  align={matchesMD? 'center':"inheret"} paragraph>
                            Mobile App allow you to take your tools on the go 
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"} >
                            whatever you want an app for your customer , employees or 
                            yourself we can built a cross-platform native solution for any part of 
                            your bussines process This opens you up to a whole new 
                            world of possibilites by tking advantage of phone features 
                            like the camera  , Gps ,push notification , more 
                            efficency .
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"}>
                            Convienenc and Connection 
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} 
                        component={Link} to="/web-development" 
                        onClick={()=>props.setSelectedIndex(3)}
                        >
                            <img src={forwardArrow} alt="forwardArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
               
            </Grid>
             {/* {second} */}
            <Grid item container 
                style={{marginTop:"10em",marginBottom:"10em"}}
            direction={matchesSM ?"column" :"row"} 
            className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item >
                        <Typography align= {matchesSM ?"center":undefined}
                        variant="h4" gutterBottom>Integration </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" paragraph align= {matchesSM ?"center":undefined} >
                            Our Technology enables an innate interconnection between  web and 
                            mobile applications, putting every thing you need right in one 
                            convienent place 
                        </Typography>
                        <Typography variant="body1" paragraph align= {matchesSM ?"center":undefined} >
                            This allows you extend your reach reinvent interactions and develop 
                            a stronger relationship with your users  than ever before  
                        </Typography>
                    </Grid>
                </Grid>
                    <Grid item  md>
                    <Lottie options={defaultOptions}
                               style={{maxWidth:"20em"}}
                                />        
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item >
                        <Typography variant="h4" align= {matchesSM ?"center":undefined} 
                        gutterBottom>Simultenious Platform Support  </Typography>
                    </Grid>
                    <Grid item >
                        <Typography align= {matchesSM ?"center":"right"} variant="body1" paragraph >
                            Our Cutting-edge development process allows us to create apps for
                            Iphone ,Android and tablets-all at the same time  
                        </Typography>
                        <Typography align= {matchesSM ?"center":"right"} variant="body1" paragraph >
                            This significantly reduces costs and creates a more unified 
                            brand experience accross all devices 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container
                style={{marginBottom:"10em"}} 
            direction={matchesMD ?"column" :"row"}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom >
                            Extend Functionality 
                        </Typography>
                    </Grid>
                    <Grid item >
                        <img src={swiss} alt="swiss army knife " />
                    </Grid>
                </Grid>
                <Grid item container direction="column"
                    style={{marginTop:matchesMD ? "10em":0,marginBottom:matchesMD ?"10em":0}}
                 alignItems="center" md>
                    <Grid item >
                        <Typography variant="h4" gutterBottom>Extend Access  </Typography>
                    </Grid>
                    <Grid item >
                        <img src={access} alt="Extend access" style={{maxWidth:"28em"}} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item >
                        <Typography variant="h4" gutterBottom>Extend Engagment   </Typography>
                    </Grid>
                    <Grid item >
                        <img src={engagment} alt="extend engagment" />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item >
                <CallToAction  setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}
export default MobileApps