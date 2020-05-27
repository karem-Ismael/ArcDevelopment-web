import React  from 'react'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import history from '../assets/history.svg'
import Avatar from '@material-ui/core/Avatar';
import profile from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'
const useStyles=makeStyles(theme=>({
    missionStatment:{
        fontStyle:"italic",
        fontWeight:300,
        fontSize:"1.5rem",
        maxWidth:"50em",
        lineHeight: 1.4   
    },
    rowContainer:{
        paddingLeft:"5em",
        paddingRight:"5em"
        
    },
    avatar:{
        height:"25em",
        width:"25em",
        [theme.breakpoints.down('md')]:{
            width:"20em",
            height:"20em"

        }
    }
}))
const AboutUs =()=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    
    return (
        <Grid container  direction="column" >
            <Grid item align={matchesMD? "center":undefined}className={classes.rowContainer} style={{marginTop:"2em"}}>
                <Typography   align={matchesMD? "center":undefined} variant="h2" >
                    About Us 
                </Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer}>
                <Typography  align={matchesMD? "center":undefined} variant="h4" align="center" className={classes.missionStatment} >
                            we want to help business capitalize on the latest and greatest 
                            technology the best way to predict the future is to be the one 
                            bulding it and we want to help guide the world into this next
                             chapter of technological expansion , exploration , innovation 

                </Typography>
            </Grid>
            <Grid item container alignItems={matchesMD ? "center":undefined}  className={classes.rowContainer} justify="space-around">
                <Grid item  align={matchesMD? "center":undefined} >
                    <Grid  item container direction="column" style={{maxWidth:"35em"}} lg >
                        <Grid item >
                            <Typography variant="h4" gutterBottom >
                                History
                            </Typography>
                        </Grid>  
                        <Grid item >
                            <Typography  variant="body1" paragraph 
                            style={{fontWeight:700,fontStyle:"italic"}}>
                                we 're the new kind on the block
                            </Typography>
                            <Typography  variant="body1" paragraph    >
                            we want to help business capitalize on the latest and greatest 
                            </Typography>
                            <Typography  variant="body1" paragraph    >
                            we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                            </Typography>
                            <Typography  variant="body1" paragraph    >
                                we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                                chapter of technological expansion , exploration , innovation  
                                bulding it and we want to help guide the world into this next

                            </Typography>
                            <Typography  variant="body1" paragraph    >
                            technology the best way to predict the future is to be the one 
                            </Typography>
                        </Grid>      
                    </Grid>
                </Grid>
                <Grid item align={matchesMD? "center":undefined}>
                    <Grid item container justify="center" lg >
                        <img src={history} alt="history img" 
                        style={{maxHeight:"22em",width:matchesMD ? 400:"30em"}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center">
                <Grid item >
                    <Typography  variant="h4" align="center" gutterBottom >Team</Typography>     
                </Grid>
                <Grid item >
                <Typography variant="body1" align="center" paragraph >
                    Karem Mohamed , Founder
                    </Typography>  
                    <Typography variant="body1" align="center" paragraph >
                            i start coding when iam 18 years old 
                    </Typography>     

                </Grid>
                <Grid item >
                <Avatar alt="founder"  src={profile} className={classes.avatar} />
                </Grid>
                <Grid item container direction={matchesMD ?"column" :"row"} >
               
                    <Grid item container 
                     alignItems={matchesMD ? "center":undefined}
                     direction="column" lg>
                          <Hidden lgUp>
                    <Grid item lg 
                    style={{maxWidth:"45em",padding:"1.25em"}} >
                        <Typography variant="body1" align="center" paragraph >
                                we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                                chapter of technological expansion , exploration , innovation  
                                bulding it and we want to help guide the world into this next
                        </Typography>
                        <Typography variant="body1" align="center" paragraph >
                                we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                                chapter of technological expansion , exploration , innovation  
                                bulding it and we want to help guide the world into this next

                        </Typography>
                    </Grid>
                    </Hidden>
                        <Grid item >
                            <img alt="yearbook img " src={yearbook}  />

                        </Grid>
                        <Grid item >
                            <Typography variant="caption" >
                                page of sophere yratbook 
                                </Typography> 
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item lg style={{maxWidth:"45em",padding:"1.25em"}} >
                        <Typography variant="body1" align="center" paragraph >
                                we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                                chapter of technological expansion , exploration , innovation  
                                bulding it and we want to help guide the world into this next
                        </Typography>
                        <Typography variant="body1" align="center" paragraph >
                                we want to help business capitalize on the latest and greatest 
                                technology the best way to predict the future is to be the one 
                                bulding it and we want to help guide the world into this next
                                chapter of technological expansion , exploration , innovation  
                                bulding it and we want to help guide the world into this next

                        </Typography>
                    </Grid>

                    </Hidden>
                    <Grid item container direction="column" lg 
                    alignItems={matchesMD ? "center":"flex-end"}>
                        <Grid item >
                            <img src={puppy} alt="puppy img " />
                        </Grid>
                        <Grid item >
                            <Typography variant="caption" >
                                my blah blah blah blah blah , blah 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}
export default AboutUs