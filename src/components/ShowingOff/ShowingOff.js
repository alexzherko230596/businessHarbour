import React from "react";
import './ShowingOff.css'
import '../../index.css'
import ElementShowingOff from "../ElementShowingOff/ElementShowingOff";

function ShowingOff() {
    return(
        <div className="showOffBlock" >
            <div className="container">
                <div className="wrappwerShowOff">
                    <ElementShowingOff 
                        number = {'300+'}
                        title = {'Предпринимателей получили поддержку'}
                        translate = {'showOff1'}/>
                    <ElementShowingOff 
                        number = {'20+'}
                        title = {'Сотрудников'}
                        translate = {'showOff2'}/>
                    <ElementShowingOff 
                        number = {'40+'}
                        title = {'Реализованных стартапов'}
                        translate = {'showOff3'}/>
                </div>
            </div>
        </div>
    )
}

export default ShowingOff




