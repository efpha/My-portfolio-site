import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

function Experience(){
return(
    <div className="experience-container" id="Experience">
      <div className="experience-title">
        <h4>Explore my</h4>
        <h2>Skills</h2>
      </div>
      <div className="experience-card-container">
        <div className="card-frontend-dev">
            <p className="role-title">Frontend Development</p>
            <div className="experince-languages">
                <div className="row-1">
                    <section>
                        <div className="icon-experience">
                        <FontAwesomeIcon className="actual-icon" icon={faCertificate} />
                            <p>javaScript</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>TypeScript</p>
                        </div>
                        <p className="experience-level">Beginner</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>CSS</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                </div>
                <div className="row-2">
                <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>React.js</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>HTML</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>BOOTSTRAP</p>
                        </div>
                        <p className="experience-level">Beginner</p>
                    </section>
                </div>

            </div>
        </div>
        <div className="card-backend-dev">
            <p className="role-title">Backend Development</p>
            <div className="experince-languages">
                <div className="row-1">
                <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>Node.js</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>Express.js</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>Git and Github</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section>                      
                </div>
                <div className="row-2">
                <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>RESTful APIs</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section> 
                    <section>
                        <div className="icon-experience">
                            <FontAwesomeIcon className="actual-icon" icon={faCertificate} size="1x"/>
                            <p>mySQL</p>
                        </div>
                        <p className="experience-level">Intermediate</p>
                    </section> 
                </div>
            </div>
        </div>
      </div>
    </div>
)
}

export default Experience;