import React from "react";
import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

const FormProductItem = ({ inputMask, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div
            className={`form-product__item ${props.className ? props.className : ""} ${
                meta.touched && meta.error ? "_error" : ""
            }`}>
            {label ? <div className="form-product__label">{label}</div> : null}
            {inputMask ? (
                <InputMask mask={inputMask} maskChar="_" {...field}>
                    {(inputProps) => <input {...props} className="form-product__input input" />}
                </InputMask>
            ) : (
                <input {...props} {...field} className="form-product__input input" />
            )}
            {meta.touched && meta.error ? <div className="form-product__error">{meta.error}</div> : null}
        </div>
    );
};

const FormProductTextarea = ({ ...props }) => {
    const [field, meta] = useField({ ...props, type: "textarea" });

    return (
        <div className={`form-product__item ${props.className ? props.className : null}`}>
            <textarea {...props} {...field} className="form-product__input input"></textarea>
            {meta.touched && meta.error ? <div className="form-product__error">{meta.error}</div> : null}
        </div>
    );
};

const Form = () => {
    return (
        <section className="product-page__form form-product">
            <div className="form-product__container">
                <h3 className="form-product__title">Удостоверение по безопасности</h3>
                <Formik
                    initialValues={{
                        fullName: "",
                        position: "",
                        work: "",
                        electricGroup: "",
                        purpose: "",
                        date: "",
                        phone: "",
                        email: "",
                        address: "",
                    }}
                    validationSchema={Yup.object({
                        fullName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                        position: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                        work: Yup.string().min(2, "Минимум 2 символа"),
                        electricGroup: Yup.number().min(2, "Минимум - 2").max(5, "Максимум - 5").required("Обязательное поле!"),
                        purpose: Yup.string()
                            .min(2, "Минимум 2 символа")
                            .matches(/(Первичная|Очередная|очередная|первичная)/gi, "Некоректная причина")
                            .required("Обязательное поле!"),
                        date: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                        phone: Yup.string().matches(
                            /^(1[ \-+]{0,3}|\+[0-9][ -+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-.]{0,3}[0-9]{2,4}))?([ \-.][0-9])?([ \-.]{0,3}[0-9]{2,4}){2,3}$/g,
                            "Введите Телефон"
                        ),
                        email: Yup.string().email("Неправильный email адрес").required("Обязательное поле!"),
                        address: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        values = {
                            ...values,
                            phone: values.phone.replace(/[-() ]/g, ""),
                        };
                        resetForm();
                        console.log(JSON.stringify(values, null, 2));
                    }}>
                    <FormikForm className="form-product__form">
                        <div className="form-product__top">
                            <FormProductItem label="Ф.И.О. полностью" type="text" name="fullName" />
                            <FormProductItem label="Название должности/профессии" type="text" name="position" />
                            <FormProductItem label="Если Вы работаете укажите место работы" type="text" name="work" />
                            <FormProductItem label="Группа электробезопасности (2,3,4,5)" type="number" name="electricGroup" />
                            <FormProductItem label="Причина проверки (первичная или очередная)" type="text" name="purpose" />
                            <FormProductItem
                                label=" Укажите дату выдачи удостоверения, которую прописать в удостоверении"
                                type="date"
                                name="date"
                            />
                        </div>
                        <div className="form-product__line"></div>
                        <div className="form-product__bottom">
                            <FormProductItem
                                className="form-product__item_short-1"
                                type="tel"
                                name="phone"
                                placeholder="+7 (__) __ - __ - __"
                                inputMask="+7\ (99) 99 - 99 - 99"
                            />
                            <FormProductItem
                                className="form-product__item_short-2"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            <FormProductTextarea
                                className="form-product__item_long"
                                type="text"
                                name="address"
                                placeholder="Адрес доставки готовых документов (город, адрес, номер телефона, ФИО)"
                            />
                            <button type="submit" className="form-product__button button">
                                Отправить заявку
                            </button>
                        </div>
                    </FormikForm>
                </Formik>
            </div>
        </section>
    );
};

export default Form;
