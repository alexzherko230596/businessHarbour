import React from "react";
import { Trans, useTranslation } from "react-i18next";
import './ElementShowingOff.css'
import '../../index.css'

function ElementShowingOff(props) {
    const {t, i18n} = useTranslation()
    return(
        <div className="advantageCompany">
            <div className="hugeNumber">{props.number}</div>
            <div className="whiteDevider"/>
            <div className="descrShowOff">
                <Trans i18nKey={props.translate}>
                    {props.title}
                </Trans>
            </div>
        </div>
    )
}

export default ElementShowingOff