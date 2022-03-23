import React from "react";
import { useTranslation } from "react-i18next";
import './BusinessHarbor.css'
import '../../index.css'
import polishFlag from '../../icons/polandFlag.png'
import mapPoland from '../../img/mapPoland.jpg'

function BusinessHarbor() {
    const {t} = useTranslation()
    return(
        <div className="blockBusinessHarbor" id = 'BlockToScroolBusinessHarbour'>
            <div className="container">
                <div className="wrapperBusinessHarbor wrapperBusinessHarborReverse">
                    <div className="styleText">
                        <h3>{t('blockBusinessHarbourHeader1')} Business Harbour</h3>
                        <img src={polishFlag} alt = {'Polish Flag'} className = 'styleImgBusinessHarbour showStyleImgBusinessHarbour'/>
                        <div className="devider hideDevider" style = {{marginTop: '28px', marginBottom: '28px'}}/>
                        <p className="designDescr">{t('blockBusinessHarbourText1')}</p>
                    </div>
                    <img src={polishFlag} alt = {'Polish Flag'} className = 'styleImgBusinessHarbour hideStyleImgBusinessHarbour'/>
                </div>

                <div className="devider showDevider" style = {{marginTop: '28px', marginBottom: '28px'}}/>

                <div className="wrapperBusinessHarbor">
                    <img src={mapPoland} alt = {'Polish map'} className = 'styleImgBusinessHarbour hideStyleImgBusinessHarbour'/>
                    <div className="styleText">
                        <h3 className="h3__BusinessHarbour">{t('blockBusinessHarbourHeader2')}</h3>
                        <img src={mapPoland} alt = {'Polish Flag'} className = 'styleImgBusinessHarbour showStyleImgBusinessHarbour'/>
                        <div className="devider hideDevider" style = {{marginTop: '28px', marginBottom: '28px'}}/>
                        <p className="designDescr">{t('blockBusinessHarbourText2')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessHarbor