import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import './Footer.css'
import '../../index.css'

function Footer() {
    const {t} = useTranslation()
    return(
        <div className="wrapperBlockFooter">
            <div className="container">
                <div className="wrapperFooter">
                    <div className="wrapperFooterOneBlock">
                        <img src={require('../../icons/handshakeBelPol.png')} alt = 'handShake Belarus and Polish' width="140" height="78" style = {{marginBottom: '32px'}}/>
                        POLSKO - BIAŁORUSKIE <br/>CENTRUM WSPIERANIA <br/> PRZEDSIĘBIORCZOŚCI SP. Z O.O.
                    </div>

                    <div className="wrapperFooterOneBlock">
                        <div className="boldCaptionFooter">
                            {t('contacts')}                      
                        </div>
                        <ul className="listFooterText">
                            <li className="styleTextListFooter change" style = {{lineHeight: 1.5}}>02-697 Warszawa <br/>ul. Rzymowskiego 28</li>
                            <li className="styleTextListFooter">+44 599 333 222</li>
                            <li className="styleTextListFooter">biuro@pbcwp.pl</li>
                        </ul>
                    </div>

                    <div className="wrapperFooterOneBlock">
                        <div className="boldCaptionFooter putLeftFooterMenu">{t('footerMenu')}</div>
                        <ul className="listFooterText">
                            <li className="styleTextListFooter">
                                <Link
                                    className="changeColorVisited"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollAboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('aboutUs')}
                                </Link>
                                {/* <a href="#" className="changeColorVisited">{t('aboutUs')}</a> */}
                            </li>
                            <li className="styleTextListFooter">
                                <Link
                                    className="changeColorVisited"
                                    activeClass="linkMenuHover"
                                    to="BlockToScroolHelpYou"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('ourOffer')}
                                </Link>
                                {/* <a href="#" className="changeColorVisited">{t('ourOffer')}</a> */}
                            </li>
                            <li className="styleTextListFooter">
                                <Link
                                    className="changeColorVisited"
                                    activeClass="linkMenuHover"
                                    to="BlockToScroolBusinessHarbour"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('blockBusinessHarbourHeader1')}Business Harbour
                                </Link>
                                {/* <a href="#" className="changeColorVisited">{t('blockBusinessHarbourHeader1')}Business Harbour</a> */}
                            </li>
                            <li className="styleTextListFooter">
                                <Link
                                    className="changeColorVisited"
                                    activeClass="linkMenuHover"
                                    to="BlockToScrollGoogleMap"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                {t('contacts')}
                                </Link>
                                {/* <a href="#" className="changeColorVisited">{t('contacts')}</a> */}
                            </li>
                        </ul>
                    </div>

                    <div className="wrapperFooterOneBlock">
                        <div className="boldCaptionFooter">{t('socialMedia')}</div>
                        <ul className="listFooterText">
                            <li className="styleTextListFooter"><a href="https://pl-pl.facebook.com/" className="changeColorVisited" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li className="styleTextListFooter"><a href="https://web.telegram.org/z/" className="changeColorVisited" target="_blank" rel="noreferrer">Telegram</a></li>
                            <li className="styleTextListFooter"><a href="https://www.instagram.com/" className="changeColorVisited" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li className="styleTextListFooter"><a href="https://www.whatsapp.com/?lang=pl" className="changeColorVisited" target="_blank" rel="noreferrer">WhatsApp</a></li>
                            <li className="styleTextListFooter"><a href="https://www.linkedin.com/" className="changeColorVisited" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer