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
                    href="https://github.com/souperk"
                    className="introduction__link"
                >
                    <img className="introduction__logo" src="/icons/logo-github.png" alt="GitHub"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/kostas-alexopoulos-3aab75120/"
                    className="introduction__link"
                >
                    <img className="introduction__logo" src="/icons/logo-linkedin.png" alt="LinkedIn"/>
                </a>
            </div>
            <div className="introduction__description">
                <p>
                    With over <strong>8 years of professional experience</strong>, I have built a diverse
                    skill set across a wide range of tools and technologies, focusing on full-stack application development
                    for enterprise systems. My core strengths lie in applying robust software development principles
                    and fostering cross-language transferable skills to deliver high-quality, scalable solutions.
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