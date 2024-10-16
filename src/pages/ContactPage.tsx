import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faMapLocation } from "@fortawesome/free-solid-svg-icons"

import "./ContactPage.css"

export function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-page__info">
                <h2>Information</h2>
                <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-info__icon"/>
                    <a className="contact-info__text" href="mailto:kalexopoulos@protonmail.com">
                        kalexopoulos@protonmail.com
                    </a>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="contact-info__icon" icon={faPhone}/>
                    <a className="contact-info__text" href="tel:+306946501050">
                        +306946501050
                    </a>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="contact-info__icon" icon={faMapLocation}/>
                    <span className="contact-info__text">
                        Athens, Greece
                    </span>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="contact-info__icon" icon={faGithub}/>
                    <a className="contact-info__text" href="https://github.com/souperk">
                        souperk
                    </a>
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="contact-info__icon" icon={faLinkedin}/>
                    <a className="contact-info__text" href="https://www.linkedin.com/in/kostas-alexopoulos-3aab75120/">
                        Kostas Alexopoulos
                    </a>
                </div>
            </div>
        </div>
    )
}