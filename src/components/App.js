import React,{useState} from 'react';
// import {Button,Typography} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Header from './ui/Header'
import theme from'./ui/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApps from'./MobileApps'
import Websites from './Websites'
import Revolution from './Revolution'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Estimate from './Estimate'
const App=()=>{
  const [value,setValue]=useState(0)
  const [selectedindex,setSelectedIndex]=useState(0)


  return (
    <ThemeProvider theme={theme}>
      <Router>
         <Header value={value} setValue={setValue} selectedindex={selectedindex} 
         setSelectedIndex={setSelectedIndex} />
      <Switch>
        <Route exact path="/" render=
        {(props)=><LandingPage
        {...props}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />}/>
        <Route exact path="/services" render=
        {(props)=><Services
        {...props}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />}/>
        <Route exact path="/custom-software" render={(props)=><CustomSoftware
          {...props} setSelectedIndex={setSelectedIndex}
        />}/>
        <Route exact path="/mobile-development" render={(props)=>
        <MobileApps {...props}value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path="/web-development" render={(props)=>
        <Websites {...props}value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>




        <Route exact  path="/revolution" render={(props)=><Revolution
          {...props} setSelectedIndex={setSelectedIndex}/>}/>

        <Route exact path="/about-us" render={(props)=>
        <AboutUs {...props}value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>

        <Route exact path="/contact-us" render={(props)=>
        <Contact {...props}value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
      <Route exact path="/estimate" render={(props)=>
        <Estimate {...props}value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
      </Switch>
      <Footer value={value} setValue={setValue} selectedindex={selectedindex} 
         setSelectedIndex={setSelectedIndex}/>
  </Router>
    </ThemeProvider>
    
  );
}

export default App;
