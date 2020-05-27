import React,{useState,useEffect}  from 'react'
import Lottie from 'react-lottie'
import axios from 'axios'
import {cloneDeep} from 'lodash'
import { makeStyles,useTheme  } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton'
import check from '../assets/check.svg'
import send from '../assets/send.svg'
import software from '../assets/software.svg'
import mobile from '../assets/mobile.svg'
import website from '../assets/website.svg'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import camera from '../assets/camera.svg'
import upload from '../assets/upload.svg'
import persons from '../assets/persons.svg'
import person from '../assets/person.svg'
import people from '../assets/people.svg'
import info from '../assets/info.svg'
import bell from '../assets/bell.svg'
import users from '../assets/users.svg'
import iphone from '../assets/iphone.svg'
import gps from '../assets/gps.svg'
import customized from '../assets/customized.svg'
import data from '../assets/data.svg'
import android from '../assets/android.svg'
import globe from '../assets/globe.svg'
import biometrics from '../assets/biometrics.svg'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import estimateAnimation from '../animations/estimateAnimation/data.json'
const useStyles =makeStyles(theme=>({
    icon:{
        width:"12em",
        height:"10em"
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height:50,
        width:225,
        fontSize:"1.25rem",
        marginTop:"5em",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }

    },
    message:{
      border: `2px solid ${theme.palette.common.blue}`,
      marginTop:"5em",
      borderRadius:5
  },
  specialTotal:{
    fontSize:"1.5rem",
    fontFamily:"Raleway",
    fontWeight:700,
    color:theme.palette.common.orange
  }

}))
const defaultQuestions=[
    {
        id:1,
        title:"which service are you interested in",
        active:true,
        subtitle: "",
        options:[
            {
                id:1,
                title:"Custom Software Development",
                subtitle:null,
                icon:software,
                iconAlt:"icon software",
                selected:false,
                cost:0
             },
             {
                id:2,
                title:" IOS / AndroidApp Development ",
                subtitle:null,
                icon:mobile,
                iconAlt:"icon IosDevelopment",
                selected:false,
                cost:0
             },
             {
                id:3,
                title:" Website Development",
                subtitle:null,
                icon:website,
                iconAlt:"icon website",
                selected:false,
                cost:0
             }
         ]

    },
]

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  
  
  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle:"Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];
 const Estimate =(props)=>{
  const theme=useTheme()
  const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
  const matchesLG=useMediaQuery(theme.breakpoints.up('lg'))
  const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))
 
  const [total,setTotal]=useState()
  const [service,setService]=useState([])
  const [platforms,setPlatforms]=useState([])
  const [features,setFeatures]=useState([])
  const [customFeatures,setcustomFeatures]=useState("")
  const [category,setCategory]=useState("")
  const [users,setUsers]=useState("")
  const [disabled,setDisabled]=useState(true)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [emailhelper,setemailHelper]=useState("")
  const [phone,setPhone]=useState('')
  const[phonehelper ,setphoneHelper]=useState("")
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)
  const [alert,setAlert]=useState({open:false,message:"",backgroundColor:""})



     const [questions,setQuestions]=useState(defaultQuestions)
     const classes=useStyles()
     const[dialogOpen,setdialogOpen]=useState(false)
     const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: estimateAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
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
    const getTotal=()=>{
      let cost=0
      const selections=questions.map(question=>question.options.filter(option=>option.selected)
      ).filter(question=>question.length > 0)
      selections.map(options=>options.map(option=> cost+= option.cost))
      if(questions.length > 2){
        const userCost= questions.
        filter(question=>question.title === "How many users do you expect?")
        .map(question=>question.options.filter(option=>option.selected))[0][0]
        setUsers(userCost.title)
        cost -=userCost.cost
        cost *=userCost.cost
      }
      setTotal(cost)
   
    }
      const nextQuestion=()=>{
          const newQuestion=cloneDeep(questions)
          const currentlyActive=newQuestion.filter(question=>question.active)
          const activeIndex=currentlyActive[0].id -1
          const nextIndex=activeIndex + 1

          newQuestion[activeIndex]={...currentlyActive[0],active:false}
          newQuestion[nextIndex]={...newQuestion[nextIndex],active:true}
          setQuestions(newQuestion)
      }
      const previousQuestion=()=>{
        const newQuestion=cloneDeep(questions)
        const currentlyActive=newQuestion.filter(question=>question.active)
        const activeIndex=currentlyActive[0].id -1
        const previousIndex=activeIndex - 1

        newQuestion[activeIndex]={...currentlyActive[0],active:false}
        newQuestion[previousIndex]={...newQuestion[previousIndex],active:true}
        setQuestions(newQuestion)

    }
    
    const DisablefrowardArrow=()=>{
      const newQuestion=cloneDeep(questions)
      const currentlyActive=newQuestion.filter(question=>question.active)
      if(currentlyActive[0].id == newQuestion[newQuestion.length - 1].id){
        return true
      }else{
        return false
      }
    }
    const DisableBackArrow=()=>{
      const newQuestion=cloneDeep(questions)
      const currentlyActive=newQuestion.filter(question=>question.active)
      if(currentlyActive[0].id == 1){
        return true
      }else{
        return false
      }
    }
    const handelSelect=id=>{
      const newQuestion=cloneDeep(questions)
      const currentlyActive=newQuestion.filter(question=>question.active)
      const activeIndex=currentlyActive[0].id -1
      const newSelected= newQuestion[activeIndex].options[id-1]
      const previousSelected=currentlyActive[0].options.filter(option => option.selected)
      switch(currentlyActive[0].subtitle){
        case 'Select one.' :
          if(previousSelected[0]){
            previousSelected[0].selected=!previousSelected[0].selected
          }
      newSelected.selected=!newSelected.selected
          break;
          default:
            newSelected.selected=!newSelected.selected
          break;
      }
      switch(newSelected.title){
        case "Custom Software Development":
          setQuestions(softwareQuestions)
          setService(newSelected.title)
          setPlatforms([])
          setUsers('')
          setFeatures([])
          setcustomFeatures('')
          setCategory('')
            break;
            case " IOS / AndroidApp Development ":
              setQuestions(softwareQuestions)
              setService(newSelected.title)
              setPlatforms([])
              setUsers('')
              setFeatures([])
              setcustomFeatures('')
              setCategory('')

              break;
              case " Website Development":
                setQuestions(websiteQuestions)
                setService(newSelected.title)
                setPlatforms([])
                setUsers('')
                setFeatures([])
                setcustomFeatures('')
                setCategory('')

                break;
                default:
                  setQuestions(newQuestion)

                break;
      }

    }
    const getplatforms=()=>{
      let newPlatforms=[]
      if(questions.length >2){
       questions.filter(question=>question.title ==="Which platforms do you need supported?")
        .map(question=>question.options.filter(option=>option.selected))[0]
        .map(option=>newPlatforms.push(option.title))
        setPlatforms(newPlatforms)
      }

    }
    const getFeatures=()=>{
      let newFeatures=[]
      if(questions.length >2){
       questions.filter(question=>question.title ==="Which features do you expect to use?")
        .map(question=>question.options.filter(option=>option.selected))
        .map(option=>option.map(newfeature=>newFeatures.push(newfeature.title)))
        setFeatures(newFeatures)
      }

    }
    const getCustomFeatures=()=>{
      if(questions.length > 2){
        let newCustomFeatures=
        questions.filter(question =>question.title ==="What type of custom features do you expect to need?")
          .map(question=>question.options.filter(option=>option.selected))[0][0].title
          setcustomFeatures(newCustomFeatures)
      }
    }
    const getCategory=()=>{
      if(questions.length <= 2){
      const newCategory=questions.filter(question=>question.title === "Which type of website are you wanting?")[0]
      .options.filter(option=>option.selected)[0].title
      setCategory(newCategory)
      }
    }
    const softwareSelections=(
      <Grid  container diection="column" 
      style={{marginTop:matchesLG ?"14em" :matchesMD ? "5em" : matchesSM ? "1em" :0,
      marginLeft:matchesMD ? "2em" :matchesSM ? "0.5em" : 0 }}>
      <Grid item container alignItems="center"style={{marginBottom:"1.25em"}}>
        <Grid item xs={2}>
          <img src={check} alt="check mark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" >
            you want {service}
             {platforms.length > 0 ? 
             `  for ${
              //if only web application is selected...
              platforms.indexOf("Web Application") > -1 &&
              platforms.length === 1
                ? //then finish sentence here
                  "a Web Application."
                : //otherwise, if web application and another platform is selected...
                platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 2
                ? //then finish the sentence here
                  `a Web Application and an ${platforms[1]}.`
                : //otherwise, if only one platform is selected which isn't web application...
                platforms.length === 1
                ? //then finish the sentence here
                  `an ${platforms[0]}`
                : //otherwise, if other two options are selected...
                platforms.length === 2
                ? //then finish the sentence here
                  "an iOS Application and an Android Application."
                : //otherwise if all three are selected...
                platforms.length === 3
                ? //then finish the sentence here
                  "a Web Application, an iOS Application, and an Android Application."
                : null
            }`
              :null 
            }
          </Typography>
        </Grid>
      </Grid>
      <Grid item container  alingItems="center" style={{marginBottom:"1.25em"}}>
        <Grid item xs={2}>
          <img src={check} alt="check mark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" >
          {"with "}
{/* if we have features... */}
{features.length > 0
  ? //...and there's only 1...
    features.length === 1
      ? //then end the sentence here
      `${features[0]}.`
      : //otherwise, if there are two features...
    features.length === 2
      ? //...then end the sentence here
      `${features[0]} and ${features[1]}.`
      : //otherwise, if there are three or more features...
      features
    //filter out the very last feature...
    .filter(
      (feature, index) =>
      index !== features.length - 1
    )
    //and for those features return their name...
    .map((feature, index) => (
      <span key={index}>{`${feature}, `}</span>
    ))
  : null}
{features.length > 2
    ? //...and then finally add the last feature with 'and' in front of it
    ` and ${features[features.length - 1]}.`
    : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alingItems="center">
        <Grid item xs={2} >
          <img src={check} alt="check mark" />
        </Grid>
        <Grid item xs={10} >
          <Typography variant="body1" >
           The custof featuers will be of {customFeatures}
           {`and the project will be used by about ${users} `}
          </Typography>
        </Grid>
      </Grid>
      
    </Grid>
    )
    const websiteSelection=(
      <Grid  container diection="column">
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="check mark" />
        </Grid>
        <Grid item xs={!0} >
            <Typography variant="body1" >
              you want {" "} {category === "Basic" ? "a Basic website":`an ${category} website`}
            </Typography>
        </Grid>
      </Grid>

     
      
    </Grid>
      


    )
    const sendEstimate=()=>{
      setLoading(true)
      axios.get(`https://us-central1-materialui-course-c4970.cloudfunctions.net/sendMail`,{
        params:{
            name:name,
            email:email,
            message:message,
            phone:phone,
            total:total,
            features:features,
            customFeatures:customFeatures,
            users:users,
            platforms:platforms,
            service,service,
            category:category
        }
    }
        )
        .then(res=>{
            setLoading(false)
            setdialogOpen(false)
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
        })

    }
    const ButtonContent=(
      <>
          place request <img src={send} alt="air" style={{marginLeft:"1em"}}/>
      </>
  )
  const EstimateDisable=()=>{
   let selectedQuestion=[]
   let disabled=true
    if(questions.length == 2 && questions[1].title==="Which type of website are you wanting?"){
      selectedQuestion=questions.map(question=>question.options.filter(option=>option.selected))
      .filter(question=>question.length >0)
     if(selectedQuestion.length >0){
      setDisabled(false)

     }else{
       setDisabled(true)
     }
    }else{
      if(questions.length >=2 && questions[1].title === "Which platforms do you need supported?"){
        selectedQuestion=questions.map(question=>question.options.filter(option=>option.selected))
        .filter(question=>question.length >0)
          if(selectedQuestion.length == 5){
            setDisabled(false)
          }else{
            setDisabled(true)
          }
       }
    }
  }
  useEffect(()=>{
    EstimateDisable()
  },[questions])
     return(
         <Grid container direction="row">
             <Grid item container direction="column" lg  alignItems={matchesMD ?"center" :undefined} >
                 <Grid item style={{marginLeft:"2em",marginTop:"5em"}} >
                     <Typography variant="h2" >
                         Estimate
                     </Typography>
                 </Grid>
                 <Grid item style={{marginRight:matchesMD?0:"10em",maxWidth:"50em",marginTop:"7.5em"}}>
                     <Lottie options={defaultOptions} height="100%" width="100%" />
                 </Grid>

             </Grid>
             <Grid item container direction="column"
              lg style={{marginRight:matchesMD ? 0:"2em",marginBottom:"25em"}}
              alignItems="center"
              >
                  {
                  questions.filter(question=>question.active).map((question,index)=>(
                      < React.Fragment key={index}>
                        <Grid item  >
                                <Typography variant="h2" align="center" 
                                style={{fontWeight:500,fontSize:"2.25rem",
                                marginTop:"5em",lineHeight:"1.25em"}}
                               >
                                   {question.title}
                                </Typography>
                                <Typography 
                                variant="body1"
                                align="center"
                                style={{marginBottom:"2.5em"}}
                                gutterBottom
                                 >
                                        {question.subtitle}
                                </Typography>
                        </Grid>
                        <Grid item container >
                            {question.options.map((option,index)=>(
                                      <Grid item container direction="column" 
                                        key={index}
                                        component={Button}
                                        onClick={()=>handelSelect(option.id)}
                                        style={{display:"grid",textTransform:"none",
                                        marginBottom:matchesSM?"1em":0,
                                        backgroundColor: option.selected ? theme.palette.common.orange
                                          :null
                                      }}
                                      md>
                                      <Grid item  style={{maxWidth:"15em"}}>
                                          <Typography variant="h6" align="center" style={{marginBottom:"1em"}} >
                                            {option.title}
                                              </Typography> 
                                              <Typography variant="caption" align="center" >
                                                  {option.subtitle}
                                              </Typography>
                                      </Grid>
                                      <Grid item >
                                          <img src={option.icon} alt={option.iconAlt} className={classes.icon}/>
                                      </Grid>
                                  </Grid>

                            ))}
                      
                         </Grid>
                      </ React.Fragment>
                  ))
                  }
                 <Grid item container justify="space-between" style={{marginTop:"3em",width:"18em"}} >
                     <Grid item >
                         <IconButton disabled={DisableBackArrow()} onClick={previousQuestion}>
                             <img src={DisableBackArrow() ? backArrowDisabled:backArrow} alt="previous question" />
                         </IconButton>
                     </Grid>
                     <Grid item >
                         
                             <IconButton disabled={DisablefrowardArrow()} onClick={nextQuestion}>
                               <img src={DisablefrowardArrow()?forwardArrowDisabled:forwardArrow} alt="next question" />
                            </IconButton>
                         
                    
                     </Grid>
                 </Grid>
                 <Grid item >
                     <Button 
                     onClick={()=>
                      {setdialogOpen(true);getTotal();getplatforms();getFeatures();
                        getCustomFeatures();getCategory()}}
                        disabled={disabled}
                      variant="contained" className={classes.estimateButton}>
                         Get Estimate 
                     </Button>
                 </Grid>
                 
             </Grid>
             <Dialog open={dialogOpen} onClose={()=>setdialogOpen(false)}
              style={{zIndex:1302}}  
                        fullWidth
                        maxWidth="lg"
              fullScreen={matchesXS}     
             >
                  <Grid container justify="center">
                    <Grid item >
                      <Typography variant="h4" align="center" >
                        Estimate
                      </Typography>
                    </Grid>
                  </Grid>
                  <DialogContent >
                    <Grid container justify="space-around" >
                      <Grid item container direction="column"  md={7} style={{maxWidth:"20em"}}>
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
                                <Grid item >
                                  <Typography variant="body1" paragraph >
                                    we can created this digital solution for an estimated {""}
                               <span  className={classes.specialTotal} >{total}$</span>
                                  </Typography>
                                  <Typography variant="body1" paragraph >
                                    fill your email and name and phone and place your request and 
                                    we 'll get back to you with details moving forward and a final price 
                                  </Typography>
                                </Grid>

                      </Grid>
                      <Grid item container direction="column" md={5} style={{maxWidth:"30em"}} >
                          <Grid item >
                           {questions.length > 2 ? softwareSelections : websiteSelection} 
                          </Grid>
                          <Grid item container direction={matchesSM ?"column" :"row"}
                          justify={matchesSM ? undefined : "space-between"}>
                            <Grid item align="center">
                              <Button variant="contained" 
                                onClick={()=>sendEstimate()}
                                disabled={
                                  name.length ===0 ||
                                  message.length === 0 ||
                                  emailhelper.length !== 0 ||
                                  phonehelper.length !== 0 ||
                                  email.length ===0 ||
                                  phone.length === 0
                                }
                               className={classes.estimateButton} >
                                  {loading ?
                           <CircularProgress size={24} className={classes.buttonProgress} />:
                               ButtonContent}
                                
                              </Button>
                            </Grid>
                            <Grid item align="center">
                             <Grid item >
                               <Button color="primary" onClick={()=>setdialogOpen(false)} 
                               style={{ marginTop:matchesSM  ? "2em":"8em"}}
                               >Cancle</Button>
                             </Grid>
                            </Grid>
                          </Grid>
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
         </Grid>
     )
 }
 export default Estimate
























