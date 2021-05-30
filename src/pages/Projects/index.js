import React from 'react';
import '../Homepage/homepage.css'
import './projects.css'
import Image from './mera_bazaar.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const ProjectPage = () => {
    
    return(
        <div style={{width:'65%',margin:'auto',marginTop:'120px'}}>
            <section className='projects'>
                <h2 className="numbered-heading" data-sr-id="3">Some Things I’ve Built</h2>
                <ul>
                    <li class="featured__StyledProject-ywnbqt-1 huabVa" data-sr-id="4">
                        <div class="project-content">
                            <div style={{width:'100%'}}>
                                <p className="project-overline">Featured Project</p>
                                <h3 className="project-title"><a href="https://merabazaar.org">Mera Bazaar</a></h3>
                                <div className="project-description">
                                    <div>
                                        An E-commerce platform with various functionalities like 
                                        Easy login & registration,
                                        User-friendly product filtering,
                                        Chatting with the shop owner,
                                        Searching through categories,
                                        Real-time updates for orders and many more.
                                    </div>
                                </div>
                                <ul className="project-tech-list">
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Firebase</li>
                                </ul>
                                <div className='project-links'>
                                    {/* <GitHubIcon/>
                                    <span>..</span> */}
                                    <OpenInNewIcon/>
                                </div>
                            </div>
                        </div>
                        <div className='overlay'>
                            <div className="project-image ">
                                <a href="https://merabazaar.org">
                                    <div className='overlay'>
                                            <img src={Image} height='400px'  style={{borderRadius:'4px'}}/>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </section>
            
        </div>
    );

}

export default ProjectPage;