import React, { useState } from "react"
import './MainPage.css'
import '../../index.css'
import TopUp from "../TopUp/TopUp"
import { useTranslation } from "react-i18next";

function MainPage() {
    const {t} = useTranslation()
    const [modalactive, setModalActive] = useState(false)
    return(
        <div className="styleMainPage">
            <div className="container">
               <div className="wrapperMainTextMainPage">
                    <h1>POLSKO - BIAŁORUSKIE <br/>CENTRUM WSPIERANIA <br/> PRZEDSIĘBIORCZOŚCI SP. Z O.O.</h1>
                    <div className="mainButtonWrapper">
                        <button className="button" onClick = {() => {setModalActive(true); document.body.style.overflow = "hidden"}}>{t('button')}</button>
                    </div>
               </div>
            </div>
            <TopUp active = {modalactive} setActive = {setModalActive}/>
        </div>
    )
}

export default MainPage