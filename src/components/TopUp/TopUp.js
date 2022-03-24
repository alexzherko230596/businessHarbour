import React, {useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com'
import './TopUp.css'
import '../../index.css'
import close from '../../icons/close.svg'

const TopUp = ({active, setActive}) => {
    const {t} = useTranslation()
    const form = useRef()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [comment, setComment] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorName, setErrorName] = useState(false)
    const [errorMobile, setErrorMobile] = useState(false)
    const regexpEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexpMobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const [isShownMainModal, setShowMainModal] = useState(true)
    const [isShownSuccessModal, setShowSuccessModal] = useState(false)
    const [isShownErrorModal, setShowErrorModal] = useState(false)
    const validateForm = (data, regex) => {
       if(regex){
            if(!regex.test(data)){
                return false
            }
       }
        if(!data) {
            return false
        }
        return true
    }
    const handleForm = (e) => {
        e.preventDefault();
        if(validateForm(email, regexpEmail) && validateForm(name) && validateForm(mobile, regexpMobile)){
            sendEmail(email, name, mobile)
        }
        else {
            if(!validateForm(email, regexpEmail)){
                setErrorEmail(true)
            }
            if(!validateForm(name)){
                setErrorName(true)
            }
            if(!validateForm(mobile, regexpMobile)){
                setErrorMobile(true)
            }
        }
    }
    const sendEmail = (email, name, mobile) =>{
        setShowMainModal(false)
        emailjs.sendForm('ReactGmail', process.env.REACT_APP_MAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_USER_NAME)
        .then((result) => {
            setShowSuccessModal(true)
        }, (error) => {
            setShowErrorModal(true)
        });
    }
    const onCloseModal = () => {
        setActive(false); 
        setEmail(''); 
        setName(''); 
        setMobile(''); 
        setErrorEmail(false); 
        setErrorName(false); 
        setErrorMobile(false); 
        setShowMainModal(true); 
        setShowErrorModal(false); 
        setShowSuccessModal(false)
    }
    console.log(process.env)
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={onCloseModal}>
            <img src={close} alt = 'close modal window' className="makingCloseItem"/>
            <div className="modal__window" style = {isShownMainModal ? {display: 'flex'} : {display: 'none'}} onClick={e => e.stopPropagation()}>
               <div className="styleParentForm">
                <div className="modal__h1">{t('popupApplication')}</div>
                <div className="modal__descr">{t('popupDesct')}</div>
                <form ref={form} onSubmit={handleForm} noValidate>
                    <input type={'email'} value={email} onChange = {e => {setEmail(e.target.value); setErrorEmail(false)}} placeholder = 'Enter your email' id="email" name="form_email" style = {errorEmail ? {border: '1px solid red'} : {border: '1px solid #c9c9c9'}}/>
                    <input type={'text'} value={name} onChange = {e => {setName(e.target.value); setErrorName(false)}} placeholder = 'Enter your name' id="name" name="form_name" style = {errorName ? {border: '1px solid red'} : {border: '1px solid #c9c9c9'}}/>
                    <input type={'text'} value={mobile} onChange = {e => {setMobile(e.target.value); setErrorMobile(false)}} placeholder = 'Enter your phone number' id="phoneNumber" name="form_phoneNumber" style = {errorMobile ? {border: '1px solid red'} : {border: '1px solid #c9c9c9'}}/>
                    <label className="form__comment">{t('popupComment')}</label>
                    <textarea value={comment} onChange = {e => setComment(e.target.value)} name="form_comment"></textarea>
                    <button type = 'submit' className="button button__form">{t('button')}</button>
                </form>
               </div>
            </div>
            <div className="modalForm" style = {isShownSuccessModal ? {display: 'flex'} : {display: 'none'}} onClick={e => e.stopPropagation()}>
                <img src={require('../../icons/iconSuccess.png')} alt = 'Success send form' width="140" height="140" style = {{marginBottom: '32px'}}/>
                <div className="modalH1GotCustomerForm">{t('modalSuccessH1')}</div>
                <div className="modalDescrGotCustomerForm">{t('modalSuccessDescr')}</div>
            </div>
            <div className="modalForm" style = {isShownErrorModal ? {display: 'flex'} : {display: 'none'}} onClick={e => e.stopPropagation()}>
                <img src={require('../../icons/iconeFailed.png')} alt = 'Failed send form' width="140" height="140" style = {{marginBottom: '32px'}}/>
                <div className="modalH1GotCustomerForm">{t('modalErrorH1')}</div>
                <div className="modalDescrGotCustomerForm">{t('modalErrorDescr')} biuro@pbcwp.pl</div>
            </div>
        </div>
    )
}

export default TopUp