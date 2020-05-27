import React  from 'react'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ButtonArrow'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import customSoftwareIcon from '../assets/customSoftware.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import {Link}  from "react-router-dom"
const useStyles=makeStyles(theme=>({
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
        marginTop:"10em",
        [theme.breakpoints.down("sm")]:{
            padding:25
        }
    },

}))
const Services=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column" >
            <Grid item >
                <Typography variant="h2" gutterBottom align={matchesSM ?"center":undefined} style={{marginLeft:matchesSM? 0:"2em"}}>
                    Services
                </Typography>
            </Grid>
             <Grid item> {/** Ios /Androied app block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :"flex-end"}
              style={{marginTop:matchesSM ? "2em":"5em"}}
              >
                  <Grid item style={{textAlign: matchesSM ? "center" :undefined,width:"35em"}}>
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
                      <img  className={classes.icon}alt="mobile phone icon "
                            width="250"
                          src={mobileIcon} />
                  </Grid>

              </Grid>

              </Grid>
                      <Grid item> {/** custom Software block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :undefined}
              >
                  <Grid item style={{ marginLeft: matchesSM ? 0 :"5em",textAlign: matchesSM ? "center" :undefined,width:"35em"}}>
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
                      <img  className={classes.icon}alt="custom software icon"
                       src={customSoftwareIcon}
                       width="250em"

                        />
                  </Grid>

              </Grid>

              </Grid>
              <Grid item  style={{ marginRight: matchesSM ? 0 :"5em"}}> {/** webSites  block */}
              <Grid container direction="row" className={classes.servicesContainer} 
              justify={matchesSM ? "center" :"flex-end"}
              style={{marginBottom:"10em"}}
              >
                  <Grid style={{ marginRight: matchesSM ? 0 :"5em",textAlign: matchesSM ? "center" :undefined,width:"35em"}}>
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
                      <img  className={classes.icon}alt="website icon"
                       width="250em"
                       src={websiteIcon} />
                  </Grid>

              </Grid>

              </Grid>

        </Grid>
    )
}
export default Services