import React, {useRef, useState} from "react";
import { Trans } from "react-i18next";
import './ElementFAQ.css'
import '../../index.css'

function ElementFAQ(props) {
    const [list, toggleList] = useState(true)
    const firstArrow = useRef()
    const secondArrow = useRef()

    const handleList = () =>{
        toggleList(!list)
        firstArrow.current.classList.toggle('firstArrowHandle')
        secondArrow.current.classList.toggle('secondArrowHandle')
    }
    return(
        <div className="wrapperElementFAQ">
            <div className="firstArrow">
                <div className="secondArrow" ref={secondArrow} onClick={handleList}>
                    <div className = 'inscriptionFAQ' ref={firstArrow}>
                        <div className="textBlockFAQ">
                            <Trans i18nKey={props.translateTitle}>
                                {props.title}
                            </Trans>
                        </div>
                    </div>
                </div>
            </div>
                <div className="descrTextFAQ" style = {list ? {maxHeight: '0px'} : {maxHeight: '120px'}}>
                    <div className="dotFAQ"/>
                    <div className="answerFAQ">
                        <span>
                            <Trans i18nKey={props.translateDescr}>
                                {props.descr}
                            </Trans>
                        </span>
                    </div>
                </div>
            <div className="deviderFAQ"/>
        </div>
    )
}

export default ElementFAQ