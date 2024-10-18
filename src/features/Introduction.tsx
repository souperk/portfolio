import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import avatarJpg from "/avatar.jpg"

import "./Introduction.css"

export function Introduction() {
    return (
        <div className="introduction">
            <div className="introduction__title">
                Kostas Alexopoulos
            </div>
            <div className="introduction__nickname">
                @souperk
            </div>
            <img
                className="introduction__avatar"
                src={avatarJpg} alt="Avatar Picture"
            />
            <div className="introduction__links">
                <a
                    className="introduction__link"
                    href="https://github.com/souperk"
                    target="_blank"
                >
                    <FontAwesomeIcon className="introduction__logo" icon={faGithub}/>
                </a>
                <a
                    className="introduction__link"
                    href="https://www.linkedin.com/in/kostas-alexopoulos-3aab75120/"
                    target="_blank"
                >
                    <FontAwesomeIcon className="introduction__logo" icon={faLinkedin}/>
                </a>
            </div>
            <div className="introduction__description">
                <p>
                    With over <strong>8 years of professional experience</strong>, I have built a diverse
                    skill set across a wide range of tools and technologies, focusing on full-stack application
                    development for enterprise systems. My strengths center around a deep commitment to software
                    development best practices, combined with both broad and specialized knowledge of the tools I use. I
                    excel in adapting quickly to new challenges and environments, ensuring I deliver high-quality,
                    scalable solutions that are built to last.
                </p>
                <p>
                    I thrive in fast-paced, <strong>agile environments</strong>, where the ability to quickly deliver
                    new features and adapt to evolving requirements is key.
                </p>
                <p>

                    Since 2021, I have embraced the <strong>Continuous Architecture</strong> approach,
                    ensuring that software design is resilient, scalable, and adaptable to changing
                    business needs. This method enables me to align architecture with evolving
                    requirements and deliver long-term value, ensuring that my work supports future
                    growth and innovation.
                </p>
                {/*<p>*/}
                {/*    <Link to="/about">Read more...</Link>*/}
                {/*</p>*/}
            </div>
        </div>
    )
}