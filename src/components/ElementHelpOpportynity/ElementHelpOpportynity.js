import React from "react";
import { Trans } from "react-i18next";
import './ElementHelpOpportynity.css'

function ElementHelpOpportynity(props) {
    return(
        <div className="oneOperationHelp">
            <img src={props.path} className = 'oneOperationIMG'/>
            <div className="devider deviderHorizontal"/>
            <div className="wrapperDescrHelp">
                <p>
                    <Trans i18nKey={props.translate}>
                        {props.title}
                    </Trans>
                </p>
            </div>
        </div>
    )
}

export default ElementHelpOpportynity