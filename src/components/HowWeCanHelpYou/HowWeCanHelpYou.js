import React from "react";
import './HowWeCanHelpYou.css'
import '../../index.css'
import '../ElementHelpOpportynity/ElementHelpOpportynity'
import ElementHelpOpportynity from "../ElementHelpOpportynity/ElementHelpOpportynity";
import { useTranslation } from "react-i18next";

function HowWeCanHelpYou() {
    const {t, i18n} = useTranslation()
    return(
        <div className="wrapperHowWeCanHelpYou"  id = 'BlockToScroolHelpYou'>
            <div className="container">
                <h2>{t('blockHowCanWeHalpYou')}</h2>
                <div className="designBlockOpportunity">
                    <ElementHelpOpportynity 
                        path = {require('../../img/help1.jpg')}
                        title = {'Переехать предпринимателям и сотрудникам в Польшу'}
                        translate = {'ourHelp1'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help2.jpg')}
                        title = {'Помощь в логистике, транспортных средств, аренды, управления офисами и размещения сотрудников.'}
                        translate = {'ourHelp2'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help3.jpg')}
                        title = {'Легализация пребывания в Евросоюзе'}
                        translate = {'ourHelp3'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help4.jpg')}
                        title = {'Юридическая помощь'}
                        translate = {'ourHelp4'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help5.jpg')}
                        title = {'Поддержка в бухгалтерии и налоговых расчетов'}
                        translate = {'ourHelp5'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help6.jpg')}
                        title = {'Финансовая поддержка из инвестиционных фондов'}
                        translate = {'ourHelp6'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help7.jpg')}
                        title = {'Установление деловых контактов между организациями и учреждениями из ЕС.'}
                        translate = {'ourHelp7'}/>
                    <ElementHelpOpportynity 
                        path = {require('../../img/help8.jpg')}
                        title = {'Финансирование специалистов из различных программ помощи'}
                        translate = {'ourHelp8'}/>
                </div>
            </div>
        </div>
    )
}

export default HowWeCanHelpYou