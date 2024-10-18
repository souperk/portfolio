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
                <a
                    className="contact-info contact-info--link"
                    href="mailto:kalexopoulos@protonmail.com"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="contact-info__icon"/>
                    <span className="contact-info__text">
                        kalexopoulos@protonmail.com
                    </span>
                </a>
                <a
                    className="contact-info contact-info--link"
                    href="tel:+306946501050"
                    target="_blank"
                >
                    <FontAwesomeIcon className="contact-info__icon" icon={faPhone}/>
                    <span className="contact-info__text">
                        +306946501050
                    </span>
                </a>
                <div className="contact-info">
                    <FontAwesomeIcon className="contact-info__icon" icon={faMapLocation}/>
                    <span className="contact-info__text">
                        Athens, Greece
                    </span>
                </div>
                <a
                    className="contact-info contact-info--link"
                    href="https://github.com/souperk"
                    target="_blank"
                >
                    <FontAwesomeIcon className="contact-info__icon" icon={faGithub}/>
                    <span className="contact-info__text">
                        souperk
                    </span>
                </a>
                <a className="contact-info contact-info--link"
                   href="https://www.linkedin.com/in/kostas-alexopoulos-3aab75120/"
                   target="_blank"
                >
                    <FontAwesomeIcon className="contact-info__icon" icon={faLinkedin}/>
                    <span className="contact-info__text">
                        Kostas Alexopoulos
                    </span>
                </a>
            </div>
        </div>
    )
}