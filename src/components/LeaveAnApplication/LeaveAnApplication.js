import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import TopUp from "../TopUp/TopUp";
import './LeaveAnApplication.css'
import '../../index.css'

function LeaveAnApplication() {
    const {t} = useTranslation()
    const [modalactive, setModalActive] = useState(false)
    return(
        <div className="blockLeaveAnApplication">
            <div className="container">
                <div className="wrapperApplication">
                    <div className="imgWarsawCity"/>
                    <div className="wrapperApplicationAdvantages">
                        <p className="wrapperApplicationDescr">{t('blockLeaveAnApplication')}</p>
                        <div className="someAdvantagesApplication">

                            <div className="oneAdvantagesApplication">
                                <img src={require('../../icons/family.png')} alt = 'Family moving' width="24" height="24" />
                                <p className="styleOptionTextOffer">{t('movingTheWholeFamily')}</p>
                            
                            </div>
                            <div className="oneAdvantagesApplication">
                                <img src={require('../../icons/marketAccess.png')} alt = 'Family moving' width="24" height="24" />
                                <p className="styleOptionTextOffer">{t('accessToMarket')}</p>
                            
                            </div>
                            <div className="oneAdvantagesApplication">
                                <img src={require('../../icons/businessCase.png')} alt = 'Family moving' width="24" height="24" />
                                <p className="styleOptionTextOffer">{t('opportunityToOpenEntrepreneurship')}</p>
                            
                            </div>
                        </div>
                        {/* <div className="buttonAdvantage" onClick = {() => setModalActive(true)}>
                            <div className="buttonAdvantageText">{t('buttonWithoutBorders')}</div>
                            <img src={require('../../icons/arrowRight.png')} alt = 'Arrow right' width="22" height="7" style = {{marginLeft: '12px'}}/>
                        </div> */}
                         <button className="button button__form button_text"  onClick = {() => {setModalActive(true); document.body.style.overflow = "hidden"}}>{t('button')}</button>
                    </div>
                </div>
                <TopUp active = {modalactive} setActive = {setModalActive}/>
            </div>
        </div>
    )
}

export default LeaveAnApplication