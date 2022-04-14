import React from "react";
import Helmet from "react-helmet";

import images from "../constants/images";
import { Breadcrumbs, Socials } from "../_components";

import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

const FormContactsItem = ({ inputMask, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {inputMask ? (
                <InputMask mask={inputMask} maskChar="_" {...field}>
                    {() => (
                        <input
                            {...props}
                            className={`form-contacts__input input ${meta.touched && meta.error ? "_error" : ""}`}
                        />
                    )}
                </InputMask>
            ) : (
                <input
                    {...props}
                    {...field}
                    className={`form-contacts__input input ${meta.touched && meta.error ? "_error" : ""}`}
                />
            )}
            {meta.touched && meta.error ? <div className="form-contacts__error">{meta.error}</div> : null}
        </>
    );
};

const FormContactsTextarea = ({ ...props }) => {
    const [field, meta] = useField({ ...props, type: "textarea" });

    return (
        <>
            <textarea {...props} {...field} className="form-contacts__textarea input"></textarea>
            {meta.touched && meta.error ? <div className="form-contacts__error">{meta.error}</div> : null}
        </>
    );
};

const Contacts = () => {
    return (
        <>
            <Helmet>
                <meta name="Contacts" content="Contacts Page" />
                <title>Контакты</title>
            </Helmet>

            <Breadcrumbs />
            <section className="page-contacts">
                <div className="page-contacts__container">
                    <div className="page-contacts__content content-contacts">
                        <h1 className="content-contacts__title title">Контакты</h1>
                        <div className="content-contacts__text">Мы работаем по всей России</div>
                        <div className="content-contacts__links">
                            <a href="tel:88000000000" className="contacts__phone _icon-phone">
                                8 800 000-00-00
                            </a>
                            <a href="mailto:email@email.com" className="contacts__mail _icon-mailsymbol">
                                email@email.com
                            </a>
                        </div>
                        <Socials className="content-contacts__socials" />
                        <div className="content-contacts__qr qr-contacts">
                            <div className="qr-contacts__image">
                                <img src={images.defaultImages.qr} alt="QR код" />
                            </div>
                            <div className="qr-contacts__content">
                                <h3 className="qr-contacts__title">Все наши контакты в этом QR коде</h3>
                                <div className="qr-contacts__text">
                                    Считать QR код Вы можете с помощью специального приложения для IOS или Android
                                </div>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            fullName: "",
                            phone: "",
                            email: "",
                            documents: "",
                        }}
                        validationSchema={Yup.object({
                            fullName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
                            phone: Yup.string().matches(
                                /^(1[ \-+]{0,3}|\+[0-9][ -+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-.]{0,3}[0-9]{2,4}))?([ \-.][0-9])?([ \-.]{0,3}[0-9]{2,4}){2,3}$/g,
                                "Введите Телефон"
                            ),
                            email: Yup.string().email("Неправильный email адрес").required("Обязательное поле!"),
                            documents: Yup.string().min(2, "Минимум 2 символа"),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            values = {
                                ...values,
                                phone: values.phone.replace(/[-() ]/g, ""),
                            };
                            resetForm();
                            console.log(JSON.stringify(values, null, 2));
                        }}>
                        <FormikForm action="#" className="page-contacts__form form-contacts">
                            <h2 className="form-contacts__title">Форма обратной связи</h2>
                            <FormContactsItem type="text" name="fullName" placeholder="Как к Вам обращаться?" />
                            <FormContactsTextarea type="text" name="documents" placeholder="Желаемые документы" />
                            <FormContactsItem
                                type="tel"
                                name="phone"
                                inputMask="+7\ (99) 99 - 99 - 99"
                                placeholder="+7 (__) __ - __ - __"
                            />
                            <FormContactsItem type="text" name="email" placeholder="Email" />
                            <button type="submit" className="form-contacts__button button">
                                Отправить заявку
                            </button>
                        </FormikForm>
                    </Formik>
                    <div className="page-contacts__bg">
                        <img src={images.defaultImages.map} alt="Карта России" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
