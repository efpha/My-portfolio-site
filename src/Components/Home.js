import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import dev_me from './images/roundimg.png'

function Home(){
return(
    <div className="home-container">
        <div className="home-card">
            <div className="home-content">
                    <div className="cards-container">
                        <div className="card-1">
                            <img className="dev_me_img" src={dev_me} alt="Site owner"/>
                        </div>
                        <div className="card-2"> 
                            <h4>Hi, I'm</h4>
                            <h2>Keffa Muthuri</h2>
                            <h3>Frontend Developer</h3>
                            <div className="twin-btn">
                                <button className="btn-D">Download cv</button>
                                <button className="btn-C">Contact info</button>
                            </div>
                        </div>
                        <div className="icons-container">
                            <ul>
                                <li>                    
                                    <a href="https://github.com/efpha" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="social_media_icon" icon={faGithub} size="2x" />
                                    <p>Github</p>
                                    </a>
                                </li>
                                <li>                    
                                    <a href="https://www.linkedin.com/in/syncd3v/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="social_media_icon" icon={faLinkedin} size="2x" />
                                    <p>linkedin</p>
                                    </a>
                                </li>
                                <li>                    
                                    <a href="https://x.com/ef_pha" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="social_media_icon" icon={faXTwitter} size="2x"/>
                                    <p>Twitter/X</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home;