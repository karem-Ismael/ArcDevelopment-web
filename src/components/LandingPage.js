import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles,useTheme } from '@material-ui/core/styles'
import animationData from '../animations/landinganimation/data'
import { Grid } from '@material-ui/core'
import {Link}  from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow'
import Typography from '@material-ui/core/Typography'
import customSoftwareIcon from '../assets/customSoftware.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import mobileIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionbackground from'../assets/repeatingBackground.svg'
import infoBacground from '../assets/infoBackground.svg'
import CallToAction from './ui/CallToAction'

const useStyles=makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        [theme.breakpoints.down('sm')]:{
            maxWidth:"30em"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height:45,
        width:145,
        marginRight:40,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    ButtonContainer:{
        marginTop:"1em"
    },
    learnButtonHero:{
        ...theme.typography.learnButton,
        fontSize:"0.9rem",
        height:45,
        width:145

    },
    mainContainer:{
        marginTop:"5em",
        [theme.breakpoints.down('sm')]:{
        marginTop:"2em"   
        }
    },
    HeroTextContainer:{
        minWidth:"21.5em",
        marigninLeft:"1em"

    },
    specialText:{
        fontFamily:'Pacifico',
        color:theme.palette.common.orange
    },
    LearnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em"
        }
    },
    subtitle1:{
        marginBottom:"1em"
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down('xs')]:{
        marginLeft:0
        }
    },
    servicesContainer:{
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
            padding:25
        }
    },
    revolutionBackground:{
        backgroundImage:`url(${revolutionbackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    },
    revolutionCard:{
        position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:"10em",
        [theme.breakpoints.down('sm')]:{
            paddingTop:"8em",
            paddingButtom:"8em",
            paddingRight:0,
            paddingLeft:0,
            width:"100%",
            borderRadius:0
        }
    },
    infoBacground:{
        backgroundImage:`url(${infoBacground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    }
   
}))
const LandingPage=(props)=>{
    const classes =useStyles()
    const theme=useTheme()
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return(
          <Grid container direction="column" className={classes.mainContainer}>
              <Grid item >{/******* Hero Block ******* */}
                  <Grid container justify="flex-end" alignItems="center" direction="row">
                      <Grid xs item className={classes.HeroTextContainer}>
                          <Typography variant="h2"align="center"> Bringing west cost Technology <br/>to the MiddleWest</Typography>
                          <Grid container justify="center" className={classes.ButtonContainer}>
                              <Grid item>
                                  <Button  component={Link} to="/estimate"
                                  onClick={()=>props.setValue(5)}
                                  className={classes.estimateButton} 
                                  variant="contained">Free Estimate</Button>
                              </Grid>
                              <Grid item >
                                  <Button variant="outlined" component={Link} to="/revolution"
                                  onClick={()=>props.setValue(2)}
                                  className={classes.learnButtonHero} >
                                     <span style={{marginRight:5}}>Learn More</span> 
                                      <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                  
                                   </Button>

                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid xs item className={classes.animation}>
                      <Lottie options={defaultOptions}
                                height={"100%"}
                                 width={"100%"}
                                />
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item> {/** custom Software block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :undefined}
              >
                  <Grid item style={{ marginLeft: matchesSM ? 0 :"5em",textAlign: matchesSM ? "center" :undefined}}>
                      <Typography variant="h4">
                          Cutsom software Development
                      </Typography>
                      <Typography variant="subtitle1" className={classes.subtitle1}>
                          Save Enerfy Save Time Save Money
                      </Typography>
                      <Typography variant="subtitle1">
                         Complete Digital Solution , from investigation to {" "} 
                         <span className={classes.specialText}>celebration </span>
                      </Typography>
                      <Button variant="outlined" 
                      onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}
                        component={Link} to="/custom-software"
                      className={classes.LearnButton}>
                      <span style={{marginRight:5}}>Learn More</span> 
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                      </Button>
                  </Grid>
                  <Grid item >
                      <img  className={classes.icon}alt="custom software icon" src={customSoftwareIcon} />
                  </Grid>

              </Grid>

              </Grid>
              <Grid item> {/** Ios /Androied app block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :"flex-end"}
              >
                  <Grid item style={{textAlign: matchesSM ? "center" :undefined}}>
                      <Typography variant="h4">
                          Ios / Androided App Development
                      </Typography>
                      <Typography variant="subtitle1" className={classes.subtitle1}>
                      Extend Functionallity Extend Access , Extend Increase Engagment
                      </Typography>
                      <Typography variant="subtitle1">
                         Integrate your web experience or create standalone 
                         app {matchesSM ? null :<br/>} with either mobile platform
                      </Typography>
                      <Button variant="outlined"
                      component={Link} to="/mobile-development"
                      onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}
                       className={classes.LearnButton}>
                      <span style={{marginRight:5}}>Learn More</span> 
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                      </Button>
                  </Grid>
                  <Grid item style={{marginRight: matchesSM ? 0 :"5em"}}  >
                      <img  className={classes.icon}alt="mobile phone icon " src={mobileIcon} />
                  </Grid>

              </Grid>

              </Grid>

              <Grid item> {/** webSites  block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :undefined}
              >
                  <Grid item style={{ marginLeft: matchesSM ? 0 :"5em",textAlign: matchesSM ? "center" :undefined}}>
                      <Typography variant="h4">
                          Website Development
                      </Typography>
                      <Typography variant="subtitle1" className={classes.subtitle1}>
                         Reach More Discover More  Sell More 
                      </Typography>
                      <Typography variant="subtitle1">
                         Optimized for Search Engienes built for speed
                      </Typography>
                      <Button variant="outlined" 
                      onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}}
                      component={Link} to="/web-development"
                      className={classes.LearnButton}>
                      <span style={{marginRight:5}}>Learn More</span> 
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                      </Button>
                  </Grid>
                  <Grid item >
                      <img  className={classes.icon}alt="website icon" src={websiteIcon} />
                  </Grid>

              </Grid>

              </Grid>
              <Grid item>{/** Revolution  block */}
                  <Grid container style={{height:"100em",marginTop:"12em"}} alignItems="center" justify="center" >
                  <Card className={classes.revolutionCard}>
                      <CardContent>
                          <Grid container direction="column" style={{textAlign:"center"}}>
                              <Grid item>
                                  <Typography  gutterBottom variant="h3">
                                      The Revolution 
                                  </Typography>
                              </Grid>
                              <Grid item >
                              <Typography variant="subtitle1">
                                     Visionary insightes coupled with cutting-endge Technology is 
                                     recipe for revolution 
                                  </Typography>
                                  <Button variant="outlined" 
                                    onClick={()=>props.setValue(2)}
                                  component={Link} to="/revolution"
                                  className={classes.learnButtonHero} >
                                     <span style={{marginRight:5}}>Learn More</span> 
                                      <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                  
                                   </Button>

                              </Grid>
                          </Grid>
                      </CardContent>
                  </Card>
                  <div className={classes.revolutionBackground} />
                  </Grid>
         
              </Grid>
              <Grid item > {/** Information  block */}
                <Grid container style={{height:"80em"}} alignItems="center" 
                    
                >
                        <Grid container style={{position:"absolute",textAlign:matchesXS ?"center":"inherit"}} 
                        direction={matchesXS ? "column" :"row"}
                            
                        >
                        <Grid item sm style={{marginLeft:matchesXS ? 0 : matchesSM ? "2em":"5em"}}  >
                        <Grid container direction="column" style={{marginBottom:matchesXS ? "10em" : 0}} >
                            <Typography variant="h2" style={{color:"white"}}> About Us  </Typography>
                            <Typography variant="subtitle2" > lets get personal   </Typography>
                            <Grid item>
                                <Button variant="outlined" 
                             onClick={()=>props.setValue(3)}

                                component={Link} to="/about-us"
                                style={{color:"white",borderColor:"white"}}
                                className={classes.LearnButton}>
                                    <span style={{marginRight:5}}>Learn More</span> 
                                    <ButtonArrow width={10} height={10} fill="white" />
                                </Button>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                    <Grid item sm style={{marginRight:matchesXS ? 0 : matchesSM ? "2em":"5em",textAlign:matchesXS ? "center":"right"}}  >
                        <Grid container direction="column" >
                            <Typography variant="h2" style={{color:"white"}}> Contact Us </Typography>
                            <Typography variant="subtitle2" > Say Hello!</Typography>
                            <Grid item>
                                <Button variant="outlined" 
                                onClick={()=>props.setValue(4)}
                                component={Link} to="/contact-us"
                                style={{color:"white",borderColor:"white"}}
                                className={classes.LearnButton}>
                                    <span style={{marginRight:5}}>Learn More</span> 
                                    <ButtonArrow width={10} height={10} fill="white" />
                                </Button>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                        </Grid>
                    <div className={classes.infoBacground}/>
                </Grid>

              </Grid>
              <Grid item >
                  {/** Call to Action   block */}
                  <CallToAction setValue={props.setValue}/>
              </Grid>

          </Grid>
       
      )

}
export default LandingPage