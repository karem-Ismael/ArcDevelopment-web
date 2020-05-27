import React  from 'react'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link}  from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import backArrow from "../assets/backArrow.svg"
import Hidden from '@material-ui/core/Hidden';
import forwardArrow from "../assets/forwardArrow.svg"
import CallToAction from './ui/CallToAction'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

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
const Websites=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container direction="column" >
               <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center": undefined}>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3em"}}>
                        <IconButton style={{backgroundColor:"transparent"}}
                            component={Link} to="/mobile-development"
                            onClick={()=>props.setSelectedIndex(2)}
                        >
                            <img src={backArrow} alt="backArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
             
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item >
                        <Typography align={matchesMD? 'center':"inheret"}variant="h2">Websites  Development</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1"  align={matchesMD? 'center':"inheret"} paragraph>
                            Having a website is a necciesty in today's business world ,They 
                            give you one central , piblic location to let people know who you 
                            are , what you do , and why you are the best at it 
                        </Typography>
                        <Typography variant="body1" paragraph  align={matchesMD? 'center':"inheret"} >
                            from simply having your hours posted to having a full fledged 
                            online store making yourselg as accessable as possible to users
                            online drives growth and enables you to reach new customers
                          
                        </Typography>
                        
                    </Grid>
                </Grid>
                <Hidden mdDown >
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} 
                        component={Link} to="/services" 
                        onClick={()=>props.setSelectedIndex(0)}
                        >
                            <img src={forwardArrow} alt="forwardArrow" />
                        </IconButton>
                    </Grid>
                </Hidden>
               
            </Grid>
            <Grid item container direction={matchesSM ?"column":"row"} alignItems="center" className={classes.rowContainer}>
                <Grid item >
                        <Grid  item container direction="column" style={{marginTop:"7em"}} >
                            <Grid item >
                                <Typography variant="h4" >Analytics</Typography>
                            </Grid>
                            <Grid item >
                                <img src={analytics} alt="analytic img" style={{marginLeft:"-2.75em"}}/>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item >
                    <Typography variant="body1" style={{maxWidth:"30em"}} > 
                        Knowladge is power , and data is 21st century gold Analyzing this 
                        data can reveal hidden patterens and trends in your business,
                        empovering you to make smarter descioun with measurable effect 
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" justify={matchesSM ?"center":"flex-end"}alignItems="center" className={classes.rowContainer}>
                <Grid item style={{marginTop:"7em",marginBottom:"7em"}} >
                        <Grid  item container align="center" direction="column" >
                            <Grid item >
                                <Typography variant="h4" >E-commerce </Typography>
                            </Grid>
                            <Grid item >
                                <img src={ecommerce} alt="ecommerce img" />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1em"}} >
                    <Typography variant="body1" style={{maxWidth:"30em"}} paragraph > 
                        it's no secret that people like to shop online 
                    </Typography>
                    <Typography variant="body1" style={{maxWidth:"30em"}} paragraph> 
                       In 2017 $2.3 trillion was spent in e-commerce , and it's time 
                       for  your slice of that pie 
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ?"column":"row"} alignItems="center" className={classes.rowContainer}>
                <Grid item >
                        <Grid  item container direction="column" >
                            <Grid item >
                                <Typography variant="h4" >Outreach </Typography>
                            </Grid>
                            <Grid item >
                                <img src={outreach} alt="outreach img" />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1em"}}>
                    <Typography variant="body1" style={{maxWidth:"30em"}} > 
                        Draw people in with  a dazzling websites showing of your products 
                        online in a great way to help customr decied what's right for 
                        them before visiting in person  
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container style={{marginTop:"7em",marginBottom:"7em"}} direction={matchesSM ?"column":"row"} justify="flex-end"alignItems="center" className={classes.rowContainer}>
                <Grid item >
                        <Grid  item container align="center" direction="column" >
                            <Grid item >
                                <Typography variant="h4" >Search Engine Optmization  </Typography>
                            </Grid>
                            <Grid item >
                                <img src={seo} alt="seo img" />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1em"}} >
                    <Typography variant="body1" style={{maxWidth:"30em"}} paragraph > 
                       how ofen have you ever been to the second page of Google results 
                    </Typography>
                    <Typography variant="body1" style={{maxWidth:"30em"}} paragraph> 
                       if you 're  like us , probably never
                    </Typography>
                    <Typography variant="body1" style={{maxWidth:"30em"}} paragraph> 
                       customers don't go there either , so we make sure your website is
                       desigend to end up on top 
                    </Typography>
                </Grid>
            </Grid>
            <Grid item >
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )


}
export default Websites