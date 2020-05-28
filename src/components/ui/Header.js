import React ,{useState,useEffect}from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../assets/logo.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {Link}  from "react-router-dom"
import { Menu, MenuItem } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



function ElevationScroll(props) {
    const { children} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 5 : 0,
    });
  }
  const useStyles = makeStyles(theme=>({
    toolbarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:"3em",
      [theme.breakpoints.down('md')]:{
        marginBottom:'2em'
      },
      [theme.breakpoints.down('xs')]:{
        marginBottom:'2em',
        margin:0
      }
    },
    logo:{
      height:"7em",
      [theme.breakpoints.down('md')]:{
        height:'6em'
      },
      [theme.breakpoints.down('xs')]:{
        height:'5em'
      }

    },
    logocontainer:{
      padding:0,
      "&:hover":{
        backgroundColor:'transparent'
      }
    },
    tabContainer:{
      marginLeft:'auto'
    },
    tab:{
      ...theme.typography.tab,
      minWidth:10,
      marginLeft:"25px"

    },
    button:{
      borderRadius:"50px",
      marginLeft:"50px",
      marginRight:'25px',
      height:'45px',
      ...theme.typography.estimate,
      "&:hover":{
        backgroundColor:theme.palette.secondary.light
    }
    },
    menu:{
      backgroundColor:theme.palette.common.blue,
      color:"white",
      borderRadius:"0px"
    },
    menuitem:{
      ...theme.typography.tab,
      opacity:0.5,
      color:"white",
      "&:hover":{
        opacity:1
      }
    },
    drawerIcon:{
      height:"50px",
      width: "50px"
    },
    drawerIconContainer:{
      marginLeft:"auto",
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    drawer:{
      backgroundColor:theme.palette.common.blue
    },
    drawerItem:{
      ...theme.typography.tab,
      color:"white",
      opacity:"0.7"
    },
    drawerItemSelecter:{
      "& .MuiListItemText-root":{
      opacity:"1"
      },

    },
    drawerEstimateItem:{
      backgroundColor:theme.palette.common.orange
    },
    appbar:{
      zIndex:theme.zIndex.modal +1
    }
  }))

export default function Header (props){
  const classes=useStyles()
  const [anchorEl,setAnchorEl]=useState(null)
  const [open,setOpen]=useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)//check the user in  ios device or  not 
  const [openDrawer,setOpenDrawer]=useState(false)
  const theme=useTheme();// can access the default theme 
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleMenuitemClick=(e,i)=>{
    setAnchorEl(null)
    setOpen(false)
    props.setSelectedIndex(i)
  }

  const handlechange=(e,value)=>{
    props.setValue(value)
  }
  const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const handleClose=(e)=>{
    setAnchorEl(null)
    setOpen(false)
  }
  const menuoptions=[
    {name:"Services",link:"/services",activeIndex:1,selectedIndex:0},
    {name:'Custom software Development ',link:"/custom-software",activeIndex:1,selectedIndex:1},
    {name:'Mobile App Development ',link:"/mobile-development",activeIndex:1,selectedIndex:2},
    {name:'web Development ',link:"/web-development",activeIndex:1,selectedIndex:3} 
  ]
  const routes=[
    {name:"Home",link:"/",activeIndex:0},
    {name:'Services ',link:"/services",activeIndex:1,ariaOwns:anchorEl ? "simple-menu" : undefined,
    ariaHaspopup:anchorEl ? "true" : undefined,onMouseOver:e=>handleClick(e)
    
  },
  {name:'The Rwvolution',link:"/revolution",activeIndex:2},
    {name:'About Us ',link:"/about-us",activeIndex:3},
    {name:'Contact Us ',link:"/contact-us",activeIndex:4} 
  ]
  useEffect(()=>{
    [...menuoptions,...routes].forEach((route)=>{
      switch(window.location.pathname){
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== props.selectedindex){
              props.setSelectedIndex(route.selectedIndex)
              }
          }
          break;
          case'/estimate':
            props.setValue(5)
            break;

          default:break;
      }
    })
    
  },[props.value,props.selectedindex,menuoptions,routes,props])
  const tabs=(
    <>
      <Tabs  
      value={props.value}className={classes.tabContainer}
       onChange={handlechange} indicatorColor="secondary">
         {routes.map((route,index)=>(
           <Tab key={index}
           aria-owns={route.ariaOwns}
           aria-haspopup={route.ariaHaspopup}
          onMouseOver={route.onMouseOver}
         className={classes.tab} component={Link} to={route.link} label={route.name}  />
         ))
         }       
               </Tabs>
               
                <Button variant='contained' 
                value={props.value}
                component={Link} to ="/estimate"
                onClick={()=>props.setValue(5)}
                color='secondary' className={classes.button} >Free Estimates</Button>
             
                  <Menu 
                  classes={{paper:classes.menu}}
                  MenuListProps={{onMouseLeave:handleClose}}
                  
                  id="simple-menu" anchorEl={anchorEl}
                  style={{zIndex:1303}}
                  open={open} onClose={handleClose}
                  elevation={0}
                  keepMounted
                  >
                    
                 {menuoptions.map((option,i)=>(
                   <MenuItem key={i} component={Link}
                    to={option.link}
                     classes={{root:classes.menuitem}}
                     onClick={(event)=>{handleMenuitemClick(event,i);props.setValue(1)}}
                     selected={i === props.selectedindex && props.value === 1}
                     >
                   {option.name}
                   </MenuItem>
                 ))}
                  </Menu>

    </>
  )
  const drawer=(
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
      open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}
      classes={{paper:classes.drawer}}
      >
        <div className={classes.toolbarMargin } />

            <List disablePadding>
              {routes.map((route,index)=>(
                <ListItem  key={index} classes={{selected:classes.drawerItemSelecter}}
                onClick={()=>{setOpenDrawer(false);props.setValue(route.activeIndex)}} 
                divider button component={Link} to={route.link}
                 selected={props.value === route.activeIndex}>
                <ListItemText
                 className={classes.drawerItem}

                 disableTypography>{route.name}</ListItemText>
              </ListItem>

              ))}
             <ListItem 
            classes={{root:classes.drawerEstimateItem,selected:classes.drawerItemSelecter}} 
             onClick={()=>setOpenDrawer(false)}
              divider button component={Link} to="/Estimate">
                <ListItemText className={classes.drawerItem}
                 disableTypography>free Estimate</ListItemText>
              </ListItem>
            </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon  className={classes.drawerIcon}/>
      </IconButton>


    </>
  )
    return (
      <>
       <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                  <Button disableRipple	 className={classes.logocontainer} component={Link} to="/" onClick={()=>props.setValue(0)}>
                  <img src={logo} alt="company logo" className={classes.logo}/>
                  </Button>
                  {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>
    )
}
