import React from "react";

import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

const FormPopupItem = ({ inputMask, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div
            className={`form-popup__row ${props.className ? props.className : ""} ${meta.touched && meta.error ? "_error" : ""}`}>
            {label ? <div className="form-popup__label">{label}</div> : null}
            {inputMask ? (
                <InputMask mask={inputMask} maskChar="_" {...field}>
                    {(inputProps) => <input {...props} className="form-popup__input input" />}
                </InputMask>
            ) : (
                <input {...props} {...field} className="form-popup__input input" />
            )}
            {meta.touched && meta.error ? <div className="form-popup__error">{meta.error}</div> : null}
        </div>
    );
};

const _PopupCall = () => {
    return (
        <div id="popup_call" aria-hidden="true" className="popup">
            <div className="popup__wrapper">
                <div className="popup__content">
                    <button data-close type="button" className="popup__close">
                        <span></span>
                    </button>
                    <div className="popup__text">Оставте ваши данные и вскоре мы с вами свяжемся!</div>
                    <Formik
                        initialValues={{
                            fullName: "",
                            phone: "",
                        }}
                        validationSchema={Yup.object({
                            fullName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                            phone: Yup.string()
                                .required("Обязательное поле!")
                                .matches(
                                    /^(1[ \-+]{0,3}|\+[0-9][ -+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-.]{0,3}[0-9]{2,4}))?([ \-.][0-9])?([ \-.]{0,3}[0-9]{2,4}){2,3}$/g,
                                    "Введите Телефон"
                                ),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            values = {
                                ...values,
                                phone: values.phone.replace(/[-() ]/g, ""),
                            };
                            resetForm();
                            console.log(JSON.stringify(values, null, 2));
                        }}>
                        <FormikForm className="popup__form form-popup">
                            <FormPopupItem label="Ф.И.О. полностью" type="text" placeholder="Введите ваше имя" name="fullName" />
                            <FormPopupItem
                                label="Номер телефона"
                                name="phone"
                                type="tel"
                                placeholder="Введите номер телефона"
                                inputMask="+7\ (99) 99 - 99 - 99"
                            />
                            <button type="submit" className="form-popup__button button">
                                Оставить заявку
                            </button>
                        </FormikForm>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default _PopupCall;
