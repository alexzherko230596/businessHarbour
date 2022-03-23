import React, {useRef, useState} from "react"
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css'

function Header() {
    const {t, i18n} = useTranslation()
    const header = useRef()
    const burgerInfo = useRef()
    const burgerMenu = useRef()
    const [disabled, setDisabled] = useState(localStorage.getItem('i18nextLng') === 'ru')

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
        setDisabled(!disabled)
    }
    const toggleBurgerMenu = () => {
        header.current.classList.toggle('active')
        burgerInfo.current.classList.toggle('active')
        burgerMenu.current.classList.toggle('active')
    }
    const hideBurgerMenu = () =>{
        header.current.classList.toggle('active')
        burgerInfo.current.classList.toggle('active')
        burgerMenu.current.classList.toggle('active')
    }
    return (
        <div ref={header} className='headerWrapper'>
            <div className="container">
                <div className="menuWrapper">
                    <div className="navMenu">
                        <ul>
                            <li>
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollAboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('aboutUs')}
                                </Link>
                                {/* <a className="linkMenu" href="#AboutUsBlock">{t('aboutUs')}</a> */}
                            </li>
                            <li>
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScroolHelpYou"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('ourOffer')}
                                </Link>
                            </li>
                            {/* <a className="linkMenu" href="#">{t('ourOffer')}</a></li> */}
                            <li>
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollGoogleMap"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('contacts')}
                                </Link>
                                {/* <a className="linkMenu" href="#">{t('contacts')}</a> */}
                            </li>
                        </ul>
                    </div>
                    <img src={require('../../icons/handshakeBelPol.png')} alt = 'Handshake' className="headerMainIMG"/>
                    <div className="secondWrapper">
                        <div className="wrapperImages">
                            {/* <image className="headerStyleImg" src="" alt="Italian Trulli"/> */}
                            <div className="imagePath">
                                <a href="https://pl-pl.facebook.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/facebook.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://web.telegram.org/z/" target="_blank" rel="noreferrer"><img src={require('../../icons/VK.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/instagram.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.whatsapp.com/?lang=pl" target="_blank" rel="noreferrer"><img src={require('../../icons/telegram.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/whatsUp.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                        </div>
                        <div className="wrapperLanguages">
                            <button disabled = {disabled} className={localStorage.getItem('i18nextLng') === 'ru' ? "buttonChangeLanguage buttonChangeLanguageActive" : "buttonChangeLanguage"} onClick = {() => changeLanguage("ru")}>RUS</button>
                            <button disabled = {!disabled} className={localStorage.getItem('i18nextLng') === 'en' ? "buttonChangeLanguage buttonChangeLanguageActive" : "buttonChangeLanguage"} onClick = {() => changeLanguage("en")}>ENG</button>
                        </div>
                    </div>
                </div>

                <div ref={burgerMenu} className="burgerMenu" onClick={toggleBurgerMenu}>
                    <div className="middleBurgerMenu"/>
                </div>
                
                <div ref={burgerInfo} className="wrapperBurgerMenu">
                    <img src={require('../../icons/handshakeBelPol.png')} alt = 'Handshake' className="headerMainIMG"/>
                    <div className="navMenuMobile">
                        <ul>
                            <li className="mobileFirstlinkMenu">
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollAboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick = {hideBurgerMenu}>
                                {t('aboutUs')}
                                </Link>
                                {/* <a className="linkMenu" href="#AboutUsBlock">{t('aboutUs')}</a> */}
                            </li>
                            <li>
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScroolHelpYou"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick = {hideBurgerMenu}>
                                {t('ourOffer')}
                                </Link>
                            </li>
                            {/* <a className="linkMenu" href="#">{t('ourOffer')}</a></li> */}
                            <li>
                                <Link
                                    className="linkMenu"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollGoogleMap"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick = {hideBurgerMenu}>
                                {t('contacts')}
                                </Link>
                                {/* <a className="linkMenu" href="#">{t('contacts')}</a> */}
                            </li>
                        </ul>
                    </div>
                    <div className="secondWrapper">
                        <div className="wrapperImages">
                            <div className="imagePath">
                                <a href="https://pl-pl.facebook.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/facebook.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://web.telegram.org/z/" target="_blank" rel="noreferrer"><img src={require('../../icons/VK.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/instagram.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.whatsapp.com/?lang=pl" target="_blank" rel="noreferrer"><img src={require('../../icons/telegram.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                            <div className="imagePath">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={require('../../icons/whatsUp.png')} alt = 'facebook' width="24" height="24"/></a>
                            </div>
                        </div>
                        <div className="wrapperLanguages">
                            <button disabled = {disabled} className={localStorage.getItem('i18nextLng') === 'ru' ? "buttonChangeLanguage buttonChangeLanguageActive" : "buttonChangeLanguage"} onClick = {() => changeLanguage("ru")}>RUS</button>
                            <button disabled = {!disabled} className={localStorage.getItem('i18nextLng') === 'en' ? "buttonChangeLanguage buttonChangeLanguageActive" : "buttonChangeLanguage"} onClick = {() => changeLanguage("en")}>ENG</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header