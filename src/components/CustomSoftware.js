import React  from 'react'
import Lottie from 'react-lottie'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link}  from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import backArrow from "../assets/backArrow.svg"
import forwardArrow from "../assets/forwardArrow.svg"
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data'
import roots from '../assets/root.svg'
import automationAnimation from  '../animations/automationAnimation/data.json'
import uxAnimation from '../animations/uxAnimation/data'
import Hidden from '@material-ui/core/Hidden';
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
const CustomSoftware=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))

    const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center": undefined}>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3em"}}>
                        <IconButton style={{backgroundColor:"transparent"}}
                            component={Link} to="/services"
                            onClick={()=>props.setSelectedIndex(0)}
                        >
                            <img src={backArrow} alt="backArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
             
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item >
                        <Typography align={matchesMD? 'center':"inheret"}variant="h2">Custom Software Development</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1"  align={matchesMD? 'center':"inheret"} paragraph>
                            whether we're replacing old Software or Investing new Solutions .
                            Arc Development is here to help your business tackle technology
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"} >
                            using regular commercial software leaves you with alot of stuff
                            you don't need , without some of the stuff you do need , and 
                            ultimately controls the way you work 
                            without using any software at all you risk falling behiend 
                            competitors and missing out on huge saving  from increased
                            efficency .
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"}>
                            our customer solution are designed from the ground up with your 
                            need ,wants , and goals at the core. This calaborative process 
                            produce finely tuned software that is much more effective at 
                            improving your workflow and reducing costs than generalized 
                            options .
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"}>
                            We create excatly what you want ,excatly how you want it 
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} 
                        component={Link} to="/mobile-development" 
                        onClick={()=>props.setSelectedIndex(2)}
                        >
                            <img src={forwardArrow} alt="forwardArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
               
            </Grid>
            <Grid item container direction="row" justify="center" 
                className={classes.rowContainer}
            style={{marginTop:"15em",marginBottom:"20em"}}
            >
                <Grid item container direction="column" alignItems="center" md 
                style={{maxWidth:"40em",marginBottom:matchesSM ? "5em" :0,marginTop:matchesSM? "10em":0}}>
                        <Grid item>
                            <Typography variant="h4" >Save Energy</Typography>
                        </Grid>
                        <Grid item >
                            <img src={lightbulb} alt="lightbulb" />
                        </Grid>

                </Grid>
                <Grid item container direction="column" alignItems="center" md
                  style={{maxWidth:"40em",marginBottom:matchesSM ? "5em" :0,marginTop:matchesSM? "10em":0}}> 
                        <Grid item>
                            <Typography variant="h4" >Save Time</Typography>
                        </Grid>
                        <Grid item >
                            <img src={stopwatch} alt="lightbulb" />
                        </Grid>

                </Grid>
                <Grid item container direction="column" alignItems="center" md 
                 style={{maxWidth:"40em",marginBottom:matchesSM ? "5em" :0,marginTop:matchesSM? "10em":0}}>
                        <Grid item>
                            <Typography variant="h4" >Save Money</Typography>
                        </Grid>
                        <Grid item >
                            <img src={cash} alt="lightbulb" />
                        </Grid>

                </Grid>
            </Grid>
            <Grid item container 
            direction={matchesMD ?"column":"row"} 
            className={classes.rowContainer}
            alignItems={matchesMD? "center" :undefined} 
            justify="space-around">
                <Grid item container 
                className={classes.itemContainer}
                direction={matchesSM ?"column":"row"}
                 md style={{marginBottom: matchesMD ?"10em":0}}>
                    <Grid item container direction="column" md  >
                        <Grid item md>
                            <Typography variant="h4"
                            align={matchesSM? 'center':"inheret"}>Digital Documents and Data</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1"
                                 align={matchesSM? 'center':"inheret"}
                                 paragraph>
                                Reduce Errors . Reduce Wastes . Reduce Costs
                            </Typography>
                            <Typography variant="body1"
                                 align={matchesSM? 'center':"inheret"}
                            paragraph>
                                Billions are spent annualty on the purchasing , printing , and 
                                distribution of paper . on top of the massive inviromental 
                                impact this has , its causes harm to your bottom line as well .
                            </Typography>
                            <Typography variant="body1" paragraph>
                                By utilizing digital forms and documents you can remove these
                                obselte expenses , accelerate your commenication and help the 
                                Earth 
                                
                            </Typography>
                           
                        </Grid>
                        
                    </Grid>
                    <Grid item md >
                        <Lottie options={documentsOptions}
                            style={{maxHeight:275,minWidth:200,maxWidth:250,minHeight:200}}
                        />
                    </Grid>
                    
                </Grid>
                <Grid item container className={classes.itemContainer} 
                direction={matchesSM ?"column":"row"} md>

                <Grid item md >
                        <Lottie options={scaleOptions}
                            style={{maxHeight:275,maxWidth:250,minHeight:250}}
                        />
                    </Grid>
                <Grid item container direction="column" md>
                        <Grid item >
                            <Typography  align={matchesSM? 'center':"right"}variant="h4">Scale </Typography>
                        </Grid>
                        <Grid item >
                            
                            <Typography  align={matchesSM? 'center':"right"} variant="body1" paragraph>
                                Billions are spent annualty on the purchasing , printing , and 
                                distribution of paper . on top of the massive inviromental 
                                impact this has , its causes harm to your bottom line as well .
                            </Typography>
                          
                           
                        </Grid>
                        
                    </Grid>
                    
          
            </Grid>
            </Grid>
            <Grid item container direction="row" style={{marginBottom:"20em",marginTop:"20em"}} >
                <Grid item container direction="column" alignItems="center">
                    <Grid item >
                        <img src={roots} alt="tree with roots " 
                        height={matchesSM ?"350":"450em"}width={matchesSM ?"350":"450em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>Root cause Analayses</Typography>
                        <Typography variant="body1" align="center">
                            Many problems are merely syptoms of larger , underlying issues
                        </Typography>
                        <Typography variant="body1" align="center">
                            we can help you thoroughly examine all areas of your bussiness to 
                            develop a holistic plan for the most effective implementation of 
                            technology
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container 
                className={classes.rowContainer}
                direction={matchesSM ?"column":"row"} 
                alignItems={matchesMD? "center" :undefined}  
                     justify="space-around"
                     style={{marginBottom:"10em"}}
                     >
                <Grid item container className={classes.itemContainer} md 
                style={{marginBottom: matchesMD ?"10em":0}}
                >
                    <Grid item container direction="column" md>
                        <Grid item >
                            <Typography   align={matchesSM? 'center':"inheret"} 
                            variant="h4">Automation</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" paragraph  
                             align={matchesSM? 'center':"inheret"}>
                                why waste time when you don't have to ?
                            </Typography>
                            <Typography variant="body1"   align={matchesSM? 'center':"inheret"}
                            paragraph>
                                we can help you identify process with time or event based
                                actions which can now easely  be automated
                            </Typography>
                            <Typography variant="body1"   align={matchesSM? 'center':"inheret"}
                             paragraph>
                                Increasing effeciency increasing profites, leaving you more time
                                to focus on your business , not busywork
                            </Typography>
                           
                        </Grid>
                        
                    </Grid>
                    <Grid item md justify={matchesMD ?"center":undefined} 
                    >
                        <Lottie  alignItems={matchesMD?"center":undefined}options={automationOptions}
                            style={{maxHeight:290,maxWidth:280,textAlign:matchesMD?"10em":undefined}}
                        />
                    </Grid>
                    
                </Grid>
                <Grid item container direction={matchesSM ?"column":"row"}className={classes.itemContainer}   md>

                <Grid item md >
                        <Lottie options={uxOptions}
                            style={{maxHeight:310,maxWidth:155}}
                        />
                    </Grid>
                <Grid item container direction="column" md>
                        <Grid item >
                            <Typography 
                             align={matchesSM? 'center':"right"}
                             variant="h4">User Experience Design  </Typography>
                        </Grid>
                        <Grid item >
                            
                            <Typography   align={matchesSM? 'center':"right"} variant="body1" paragraph>
                                A good design that isn't usable isn't a good design 
                            </Typography>
                            <Typography   align={matchesSM? 'center':"right"} variant="body1" paragraph>
                                so why are so many pieces of software complicated confucing ,
                                and frustraining ?
                            </Typography>
                          
                            <Typography   align={matchesSM? 'center':"right"} variant="body1" paragraph>
                                By pririotizing User and the real ways they interact with 
                                texhnology we're able to develop unique personable
                                 experience that solve problems rather create new one 
                            </Typography>                
                           
                        </Grid>
                        
                    </Grid>
                    
          
            </Grid>
            </Grid>
            <Grid item >
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )

}
export default CustomSoftware