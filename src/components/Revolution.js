import React  from 'react'
import Lottie from 'react-lottie'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import vision from '../assets/vision.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'
import consultaion from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
const useStyles=makeStyles(theme=>({
    rowContainer:{
        paddingLeft:"5em",
        paddingRight:"5em"
        
    },

}))
const Revolution=(props)=>{
    const classes=useStyles()
    const theme=useTheme()
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   return(
       <Grid container direction="column" >
            <Grid item className={classes.rowContainer}style={{marginTop:"2em"}}>
               <Typography align={matchesMD?"center":undefined}
               variant="h3" style={{fontFamily:"Pacifico"}} >The Revolution</Typography>
            </Grid>
            <Grid item container alignItems="center"
             direction={matchesMD?"column":"row"} className={classes.rowContainer}
             style={{marginTop:"10em"}}
                >
                <Grid item lg >
                    <img src={vision} alt="vision img "
                     style=
                     {{maxWidth:matchesSM ? 300:"40em",
                     marginRight:matchesMD?0:"5em",marginBottom:matchesMD?"5em":0}} />
                </Grid>
                <Grid item container direction="column" style={{maxWidth:"40em"}} lg >
                    <Grid item >
                        <Typography variant ="h4" align={matchesMD?"center":"right"}
                        gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item > 
                        <Typography variant="body1"align={matchesMD?"center":"right"} paragraph >
                            The rise of computer and subsequently the internet has
                             completely alternd every aspect of hummn life this has increase 
                             our comfort brodened our connection and restaped how we 
                             view the world 
                        </Typography>
                        <Typography variant="body1"align={matchesMD?"center":"right"}paragraph >
                            what once was confined to huge rooms and items of engineers now 
                            resieds in every single one of our hands Marnising This unlimited 
                            potential by usingit to solve problems and better 
                            lives is at the heart of everything we do 
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"}paragraph >
                            we want to help business capitalize on the latest and greatest 
                            technology the best way to predict the future is to be the one 
                            bulding it and we want to help guide the world into this next
                             chapter of technological expansion , exploration , innovation 
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"}paragraph >
                            By holding ourselves to rigorous standatds and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"}paragraph >
                            we see the future where every individual has personalized software 
                            custom tailord to thier lifestyle , culture and interests 
                            helping them overcom life's obstical Each project is a step 
                            to ward that goal 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container alignItems="center" 
            direction={matchesMD?"column":"row"}
             style={{marginTop:"10em",marginBottom:"10em"}}
            className={classes.rowContainer}>
                <Grid item container direction="column" style={{maxWidth:"40em"}} lg >
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        variant ="h4" gutterBottom>Techonolgy </Typography>
                    </Grid>
                    <Grid item > 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" paragraph >
                            The rise of computer and subsequently the internet has
                             completely alternd every aspect of hummn life this has increase 
                             our comfort brodened our connection and restaped how we 
                             view the world 
                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" paragraph >
                            what once was confined to huge rooms and items of engineers now 
                            resieds in every single one of our hands Marnising This unlimited 
                            potential by usingit to solve problems and better 
                            lives is at the heart of everything we do 
                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" paragraph >
                            we want to help business capitalize on the latest and greatest 
                            technology the best way to predict the future is to be the one 
                            bulding it and we want to help guide the world into this next
                             chapter of technological expansion , exploration , innovation 
                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" paragraph >
                            By holding ourselves to rigorous standatds and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" align="right"paragraph >
                            we see the future where every individual has personalized software 
                            custom tailord to thier lifestyle , culture and interests 
                            helping them overcom life's obstical Each project is a step 
                            to ward that goal 
                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container  justify={matchesMD?"center":"flex-end"} lg >
                <Lottie options={defaultOptions}
                    style={{maxWidth:"40em",margin:0}}                    
                   />
                </Grid>
            </Grid>
            <Grid item container justify="center" direction="row" className={classes.rowContainer}>
            <Grid item >
               <Typography variant ="h4" gutterBottom>Process  </Typography>
             </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#838383",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined} 
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Consultaion </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  
                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={consultaion} alt="consultaion img" style={{maxWidth:matchesMD?300:1000}} />
                </Grid>
            </Grid>

            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#FF7373",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" 
                alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Mockup </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={mockup} alt="mokup img" width="100%" style={{maxWidth:400}}/>
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#39B54A",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                         style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Review </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={review} alt="review img" width="100%" style={{maxWidth:300}} />
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#A67C52",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column"alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Design </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={design} alt="design img" width="100%" style={{maxWidth:500}} />
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#39B54A",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Review </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={review} alt="review img" width="100%" style={{maxWidth:400}} />
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#FBB03B",height:matchesMD?"115em":"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Build </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={build} alt="build img" width="100%" style={{maxWidth:matchesMD?700:1000}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#C1272D",height:matchesMD ?"105em":"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined} lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Launch </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>    
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={launch} alt="launch img" width="100%" style={{maxWidth:matchesMD?700:220}}/>
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD?"column":"row"} 
            style={{backgroundColor:"#8E45CE",height:matchesMD ?"105em":"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined}  lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Maintain </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  
                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>               
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={maintain} alt="maintain img" width="100%"  style={{maxWidth:matchesMD ? 250:400}} />
                </Grid>
            </Grid>
            <Grid item container  direction={matchesMD ?"column":"row"} 
            style={{backgroundColor:"#838383",height:"90em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" alignItems={matchesMD?"center":undefined}  lg>
                    <Grid item >
                        <Typography align={matchesMD?"center":undefined}
                        style={{color:"#000",marginTop:"10em"}}
                        variant="h4"gutterBottom >Iterate </Typography>
                    </Grid>
                    <Grid item >
                    <Typography align={matchesMD?"center":undefined}
                    variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1" style={{color:"#ffffff",maxWidth:"17em"}}
                         paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  
                        </Typography> 
                        <Typography align={matchesMD?"center":undefined}
                        variant="body1"style={{color:"#ffffff",maxWidth:"17em"}} paragraph >
                            By holding ourselves to rigorous standards and pristen quality 
                            we can ensure you have the absolute best tools neccessary to 
                            thrive in this new frontier  

                        </Typography>               
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={iterate} alt="iterate img" width="100%"  style={{maxWidth:matchesMD?400 :700}} />
                </Grid>
            </Grid>
            
            
       </Grid>
   )
}
export default Revolution