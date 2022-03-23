import React, { useState } from "react";
import ElementFAQ from "../ElementFAQ/ElementFAQ";
import { useTranslation } from "react-i18next";
import './FAQ.css'
import '../../index.css'

function FAQ(){
    const {t, i18n} = useTranslation()
    const [list, toggleList] = useState(false)
    function handleList(){
        toggleList(!list)
    }
    return(
        <div className="blockFAQ">
            <div className="container" style = {{alignItems: 'center'}}>
                <div className="wrapperFAQ">
                    <div className="deviderFAQ"/>

                    <ElementFAQ 
                        onClick = {handleList}
                        title={'Польская инвестиционная зона'}
                        descr = {'Вся территория Польши стала такой экономической зоной, благодаря которой компании, инвестирующие в любую точку страны, могут рассчитывать на освобождение от подоходного налога. Решение о поддержке инвестиций принимается после выполнения определенных критериев.'}
                        translateTitle = {'FAQ1'}
                        translateDescr = {'FAQ1Answer'}/>
                    <ElementFAQ 
                        onClick = {handleList}
                        title={'Льготы на исследования и разработки'}
                        descr = {'Компании могут вычесть из своей налоговой базы до 200% (и 250% в случае научно-исследовательских центров) расходов, связанных, например, с заработной платой, использованием оборудования или приобретением материалов, предназначенных для научных исследований.'}
                        translateTitle = {'FAQ2'}
                        translateDescr = {'FAQ2Answer'}/>
                    <ElementFAQ 
                        onClick = {handleList}
                        title={'Инновационный бокс'}
                        descr = {'Существует 5% льготная налоговая ставка на доход, полученный от продажи прав интеллектуальной собственности. Льготная ставка применяется в течение всего периода патентной охраны, а также полностью соответствует подходу ОЭСР'}
                        translateTitle = {'FAQ3'}
                        translateDescr = {'FAQ3Answer'}/>
                    <ElementFAQ 
                        onClick = {handleList}
                        title={'Программа поддержки инвестиций'}
                        descr = {'Программа субсидирования государственных грантов позволяет компаниям получить поддержку в размере до 20% от затрат на проекты в случае стратегических или инновационных производственных.'}
                        translateTitle = {'FAQ4'}
                        translateDescr = {'FAQ4Answer'}/>

                </div>
            </div>
        </div>
    )
}

export default FAQ