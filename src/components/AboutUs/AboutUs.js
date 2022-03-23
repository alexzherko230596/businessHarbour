import React from "react"
import { useTranslation } from "react-i18next";
import './AboutUs.css'
import '../../index.css'

function AboutUs() {
    const {t, i18n} = useTranslation()
    return(
        <div className="wrapperAboutUs" id = 'BlockToScrollAboutUs'>
            <div className="container">
                <div className="wrapperBlockAboutUs">
                    <div className="designImageAboutUs"/>
                    <div className="mainInfoBlockAboutUs">
                        <h2>{ t('blockAboutUs') }</h2>
                        <div className="devider"/>
                        <div className="spaceBetweenText">
                            <p>{ t('blockAboutUsSection1') }</p>
                        </div>
                        <div className="spaceBetweenText">
                            <p>{ t('blockAboutUsSection2') }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs