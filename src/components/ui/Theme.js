import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue="#0B72B9"
const arcOrange="#FFBA60"
const arcGray="#868686"

const theme = createMuiTheme({
    palette: {
     common:{
         blue:`${arcBlue}`,
         orange:`${arcOrange}`
     },
     primary:{
         main:`${arcBlue}`
     },
     secondary:{
         main:`${arcOrange}`
     }
    },
    typography:{
        tab:{
             fontFamily:"Raleway",
                textTransform:"none",
                fontWeight: 700,
                fontSize:'1rem',
        },
        estimate:{
            fontFamily:"Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"

        },
        h2:{
            fontFamily:"Raleway",
            fontWeight:700,
            fontSize:"2.5rem",
            color:`${arcBlue}`,
            lineHeight:1.5
        },
        h3:{
            fontFamily:"Pacifico",
            fontSize:"2.5rem",
            color:arcBlue

        },
        h4:{
            fontFamily:"Raleway",
            fontSize:"1.75rem",
            color:`${arcBlue}`,
            fontWeight:700
        },
        h6:{
            fontFamily:"Raleway",
            color:`${arcBlue}`,
            fontWeight:500,
            lineHeight:1
        },
        subtitle1:{
            fontSize:"1.25rem",
            fontWeight:300,
            color:`${arcGray}`
        },
        subtitle2:{
            color:"white",
            fontSize:"1.25rem",
            fontWeight:300
        },
        learnButton:{
            borderColor:`${arcBlue}`,
            color:`${arcBlue}`,
            borderWidth:2,
            textTransform:"none",
            borderRadius:50,
            fontWeight:"bold",
            fontFamily:"Roboto",
        },
        caption:{
            fontSize:"1.5rem",
            fontWeight:300,
            color:arcGray
        },
        body1:{
            fontSize:"1.25rem",
            color:arcGray,
            fontWeight:300
        }

    },
    overrides:{
        MuiInputLabel:{
            root:{
                color:arcBlue,
                fontSize:"1rem"
            }
        },
        MuiInput:{
            // FOR THE COLOR IN INPUT 
            root:{
                color:arcGray,
                fontSize:"1.25rem"
            },
            underline:{
                "&:before":{
                    borderBottom:`2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom:`2px solid ${arcBlue}`
                }
            }
        }
    }
  });
export default theme  