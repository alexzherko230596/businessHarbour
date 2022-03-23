import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './TableBusinessHarbor.css'
import '../../index.css'


function TableBusinessHarbor() {
    const {t} = useTranslation()
    const [activeTab, setActiveTab] = useState(true)
    const handleFormFirst = () => {
        if(!activeTab){
            setActiveTab(!activeTab)
        }
    }
    const handleFormSecond = () => {
        if(activeTab){
            setActiveTab(!activeTab)
        }
    }
    return (
        <div className="blockTableBusinessHarbor">
            <div className="container additionalMarginTable">
                <div className="wrapperTableTab">
                    <div className= "workSpaceTab" style = {activeTab ? {color: '#fff', backgroundColor: '#d31027', cursor: 'default'} : {color: '#000',backgroundColor: '#f0f0f0', cursor: 'pointer'}} onClick = {handleFormFirst}>{t('tableTab1')}</div>
                    <div className="newInvestitions" style = {activeTab ? {color: '#000',backgroundColor: '#f0f0f0', cursor: 'pointer'} : {color: '#fff', backgroundColor: '#d31027', cursor: 'default'}} onClick = {handleFormSecond}>{t('tableTab2')}</div>
                </div>
                {activeTab ? 
                <table>
                   <thead> 
                       <tr>
                            <th style = {{width: '25%'}}>{t('tableTitle1')}</th>
                            <th style = {{width: '20%'}}>{t('tableTitle2')}</th>
                            <th style = {{width: '15%'}}>{t('tableTitle3')}</th>
                            <th className="hideblockTable" style = {{width: '15%'}}>{t('tableTitle4')}</th>
                            <th style = {{width: '25%'}}>{t('tableTitle5')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tableCell">
                            <td>{t('tableRow1_1')}</td>
                            <td>{t('tableRow1_2')}</td>
                            <td>10</td>
                            <td className="hideblockTable">{t('tableRow1_4')}</td>
                            <td>{t('tableRow1_5')} 15 000/ 20 000</td>
                        </tr>
                        <tr className="tableCell">
                            <td>{t('tableRow2_1')}</td>
                            <td>1.5/0.3</td>
                            <td>150/150</td>
                            <td className="hideblockTable">{t('tableRow2_4')}</td>
                            <td>{t('tableRow1_5')} 12 000/ 15 000</td>
                        </tr>
                        <tr className="tableCell">
                            <td>{t('tableRow3_1')}</td>
                            <td>1.5/0.3</td>
                            <td>250/50</td>
                            <td className="hideblockTable">​{t('tableRow3_4')}</td>
                            <td>{t('tableRow1_5')} 12 000/ 15 000</td>
                        </tr>
                    </tbody>
                </table>
                :
                <table>
                   <thead> 
                       <tr>
                            <th style = {{width: '25%'}}>Тип инвестиций</th>
                            <th style = {{width: '20%'}}>Минимальные затраты</th>
                            <th style = {{width: '15%'}}>Минимальная занятость</th>
                            <th className="hideblockTable" style = {{width: '15%'}}>Другие требования</th>
                            <th style = {{width: '25%'}}>Максимальная поддержка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tableCell">
                            <td>B+R</td>
                            <td>{t('tableRow1_2')}</td>
                            <td>10</td>
                            <td className="hideblockTable">{t('tableRow1_4V2')}</td>
                            <td>{t('tableRow1_5')} 15%/20%</td>
                        </tr>
                        <tr className="tableCell">
                            <td>{t('tableRow2_1')}</td>
                            <td>7</td>
                            <td>20</td>
                            <td className="hideblockTable">{t('tableRow1_4V2')}</td>
                            <td>{t('tableRow1_5')} 10%/15%</td>
                        </tr>
                        <tr className="tableCell">
                            <td>{t('tableRow3_1V2')}</td>
                            <td>160</td>
                            <td>100</td>
                            <td className="hideblockTable">{t('tableRow1_4V2')}</td>
                            <td>{t('tableRow1_5')} 10%/15%</td>
                        </tr>
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default TableBusinessHarbor