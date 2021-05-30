import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './homepage.css'
import Image from './image.jpg'
import Image2 from '../Projects/mera_bazaar.png'
import useWindowDimensions from './../../getdimensions'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const HomePage = () => {

    const { height, width } = useWindowDimensions();
    console.log(height,width);

    const classes = useStyles();
    
    return(
        <div>
            <header className='nav-bar'>
                <nav>
                    <div>
                        <ul style={{display:'flex',justifyContent:'center',margin:'20px'}} className="nav-ul">
                            <a href="/#about"><li className = "nav-li">About</li></a>
                            <a href="/#projects"><li className = "nav-li">Work</li></a>
                            <a href="/#contact"><li className = "nav-li">Contact</li></a>

                            {/* <li classname = "nav-li"><a href="/#contact">Contact</a></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
            <div style={{width:(height<width)?'70%':'90%',margin:'auto',marginTop:'40px'}}>
                <div id="about" style={{transitionDelay: '100ms'}}>
                    <h1>Hi, my name is</h1>
                </div>
                <h2 className='big-heading'>Priya Mishra.</h2>
                <br/>
                <h3 className='big-heading'>I build things for the web.</h3>
                <br/> 
                <div  style={{display:(height<width)?'flex':'block'}}>
                    <div>
                        <p>
                            I'm a Mumbai-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. 
                            {/* Currently, I'm a software engineer at <a href="https://cimpress.com/">Cimpress</a> focused on building accessible, human-centered products. */}
                        </p>
                        
                        <div class="fadeup-enter-done" style={{transitionDelay: '500ms'}}>
                            <a href="mailto:priya81199@gmail.com" class="email-link btn" >
                                Get In Touch
                            </a>
                        </div>
                        
                    </div>
                    <div style={{margin:'auto',padding:'10px',border: '2px solid #64ffda',borderRadius: (height<width)?width*0.18:width*0.36,height:(height<width)?width*0.18:width*0.36,width:(height<width)?width*0.18:width*0.36}}>
                        <img src={Image} height={(height<width)?width*0.18:width*0.36} width={(height<width)?width*0.18:width*0.36} style={{borderRadius:(height<width)?width*0.18:width*0.36,padding:'10px'}} className='profile-img'/>
                    </div>
                </div>
                <br/><br/>
                <h2 data-sr-id="3" id="projects" style={{}}>
                        Some Things I’ve Built
                </h2>
                <hr/>
                <div>
                    <ul>
                        <li style={{marginTop:'50px'}}>
                            <div className="project-wrapper" style={{display:(height<width)?'flex':'block'}}>   
                                <img src={Image2} height={(height<width)?width*0.20:width*0.50} style={{borderRadius:'5px'}}/>
                                <div className="project-desc" style={{width:(height<width)?'auto':'100%'}}>
                                    <p style={{color: '#64ffda',marginTop:'0',
                                    fontFamily:  '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
                                    fontSize: '14px',
                                    fontWeight: '400'}}>
                                        Featured Project
                                    
                                    </p>
                                    <div style={{display:'flex'}}>
                                        <h3><a href="https://merabazaar.org">Mera Bazaar</a></h3>
                                        <div className='project-links'>
                                            <OpenInNewIcon/>
                                        </div>
                                    </div>
                                    <div>
                                        An E-commerce platform with various functionalities like 
                                        Easy login & registration,
                                        User-friendly product filtering,
                                        Chatting with the shop owner,
                                        Searching through categories,
                                        Real-time updates for orders and many more.
                                    </div>
                                    
                                    <ul style={{display:'flex',justifyContent:'start',margin:'20px 0px'}} className='nav-ul'>
                                        <li className='tech-li'>
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height='40px' width='40px'/>
                                            <div>React.js</div>
                                        </li>
                                        <li className='tech-li'>
                                            <img src="https://nodejs.org/static/images/logo.svg" height='40px' width='40px'/>
                                            <div>Node.js</div>
                                        </li>
                                        <li className='tech-li'>
                                            <img src="https://www.gstatic.com/devrel-devsite/prod/v702c60b70d68da067f4d656556a48e4ab1cf14be10bb79e46f353f3fdfe8505d/firebase/images/touchicon-180.png" height='40px' width='40px'/>
                                            <div>Firebase</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* {(height>width)?<hr/>:<div/>}
                        <li style={{marginTop:'50px'}}>
                            <div className="project-wrapper" style={{display:(height<width)?'flex':'block'}}>   
                                <div className="project-desc" style={{width:(height<width)?'auto':'100%'}}>
                                    <p style={{color: '#64ffda',marginTop:'0',
                                    fontFamily:  '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
                                    fontSize: '14px',
                                    fontWeight: '400'}}>
                                        Featured Project
                                    </p>
                                    <div style={{display:'flex'}}>
                                        <h3><a href="https://merabazaar.org">Mera Bazaar</a></h3>
                                        <div className='project-links'>
                                            <OpenInNewIcon/>
                                        </div>
                                    </div>
                                    <div>
                                        An E-commerce platform with various functionalities like 
                                        Easy login & registration,
                                        User-friendly product filtering,
                                        Chatting with the shop owner,
                                        Searching through categories,
                                        Real-time updates for orders and many more.
                                    </div>
                                    
                                    <ul style={{display:'flex',justifyContent:'start',margin:'20px 0px'}} className='nav-ul'>
                                        <li className='tech-li'>
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height='40px' width='40px'/>
                                            <div>React.js</div>
                                        </li>
                                        <li className='tech-li'>
                                            <img src="https://nodejs.org/static/images/logo.svg" height='40px' width='40px'/>
                                            <div>Node.js</div>
                                        </li>
                                        <li className='tech-li'>
                                            <img src="https://www.gstatic.com/devrel-devsite/prod/v702c60b70d68da067f4d656556a48e4ab1cf14be10bb79e46f353f3fdfe8505d/firebase/images/touchicon-180.png" height='40px' width='40px'/>
                                            <div>Firebase</div>
                                        </li>
                                    </ul>
                                </div>
                                <img src={Image2} height={(height<width)?width*0.20:width*0.50} style={{borderRadius:'5px',zIndex:'0'}}/>      
                            </div>
                        </li> */}
                    </ul>
                </div>
                <br/>
                <h2 data-sr-id="3" style={{visibility: 'visible', opacity: '1', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'}}>
                        Get In Touch
                </h2>
                <hr/>
                <div id="contact">
                    <p>If you wanna get in touch, talk to me for any project or just say hi,
                    fill up the form below or send an email to 
                    priya81199@gmail.com
                    and let's talk.</p><br/>
                    <div className='field'>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Name"
                            variant="outlined"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle style={{color:'#ccd6f6'}}/>
                                </InputAdornment>
                            ),
                            
                            }}
                        /><br/>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="Email"
                            variant="outlined"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AlternateEmailIcon style={{color:'#ccd6f6'}}/>
                                </InputAdornment>
                            ),
                            
                            }}
                        /><br/>
                        <TextField
                            className={classes.margin}
                            multiline="true"
                            rows = "3"
                            id="input-with-icon-textfield"
                            label="Message"
                            variant="outlined"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <MailIcon style={{color:'#ccd6f6'}} />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div>
                            <a href="mailto:priya81199@gmail.com" class="email-link btn" >
                                Say Hello
                            </a>
                    </div>
                </div>
            </div>
            <br/><br/>
            <footer style={{display:"flex",justifyContent:'center'}}>
                <div className='footer-div'>
                    {
                        (height>width)?
                        <>
                            <ul className="footer-links">
                                <a href="https://github.com/Priya-81199"><li><GitHubIcon/></li></a>
                                <a href="https://www.instagram.com/_s.a.a.n.j.h_/"><li><InstagramIcon/></li></a>
                                <a href="https://twitter.com/CoderCooks"><li><TwitterIcon/></li></a>
                                <a href="https://www.linkedin.com/in/priya-mishra-577447177/"><li><LinkedInIcon/></li></a>
                            </ul>
                            <center>
                                <a href="mailto:priya81199@gmail.com" style={{fontFamily:'monospace!important'}}>
                                    priya81199@gmail.com
                                </a>
                            </center>
                        </>
                        :<div/>
                    }
                </div>
            </footer>
            {(height<width)?
                <div className='stands-social'>
                    <ul className='social-links'>
                        <a href="https://github.com/Priya-81199"><li><GitHubIcon/></li></a>
                        <a href="https://www.instagram.com/_s.a.a.n.j.h_/"><li><InstagramIcon/></li></a>
                        <a href="https://twitter.com/CoderCooks"><li><TwitterIcon/></li></a>
                        <a href="https://www.linkedin.com/in/priya-mishra-577447177/"><li><LinkedInIcon/></li></a>
                    </ul>
                </div>:<div/>
            }
            {(height<width)?
                <div className='stands'>
                    <div className='email-stand'>
                        <a href="mailto:priya81199@gmail.com">
                            priya81199@gmail.com
                        </a>
                    </div>
                </div>:<div/>
            }
        </div>
    );

}

export default HomePage;