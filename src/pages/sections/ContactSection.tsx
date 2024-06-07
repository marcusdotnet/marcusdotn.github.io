import React, { FormEvent, FormEventHandler, useState } from "react";
import Section from "../../components/Section";
import * as styles from "./ContactSection.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isMobile } from "react-device-detect";

export default function ContactSection() {
    const [wasMessageSent, setWasMessageSent] = useState(false);

    const EmailContact = () => (
    <a className={styles.email} href="mailto:marcusnirgi@gmail.com">
        <svg className={styles.contact_icon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16667 4.16667H20.8333C21.9792 4.16667 22.9167 5.10417 22.9167 6.25001V18.75C22.9167 19.8958 21.9792 20.8333 20.8333 20.8333H4.16667C3.02083 20.8333 2.08333 19.8958 2.08333 18.75V6.25001C2.08333 5.10417 3.02083 4.16667 4.16667 4.16667Z" stroke="#DCDCDC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.9167 6.25L12.5 13.5417L2.08333 6.25" stroke="#DCDCDC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <span>marcusnirgi@gmail.com</span>
    </a>
    )

    const MainContacts = () => (
    <div className={styles.main_contact_container}>
        <a href="https://github.com/marcusdotn" className={styles.contact_icon}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.375 19.7917C4.16667 21.3542 4.16667 17.1875 2.08333 16.6667M16.6667 22.9167V18.8854C16.7057 18.3887 16.6386 17.8894 16.4698 17.4206C16.301 16.9519 16.0343 16.5244 15.6875 16.1667C18.9583 15.8021 22.3958 14.5625 22.3958 8.87501C22.3956 7.42066 21.8361 6.02209 20.8333 4.96876C21.3082 3.69637 21.2746 2.28995 20.7396 1.04167C20.7396 1.04167 19.5104 0.67709 16.6667 2.58334C14.2792 1.93628 11.7625 1.93628 9.375 2.58334C6.53125 0.67709 5.30208 1.04167 5.30208 1.04167C4.76706 2.28995 4.73348 3.69637 5.20833 4.96876C4.19805 6.0299 3.63804 7.44111 3.64583 8.90626C3.64583 14.5521 7.08333 15.7917 10.3542 16.1979C10.0115 16.5521 9.74715 16.9744 9.57844 17.4374C9.40974 17.9005 9.34042 18.3938 9.375 18.8854V22.9167" stroke="#DCDCDC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>

        <a href="https://m.me/mnirgi" className={styles.contact_icon}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0C5.45833 0 0 5.15833 0 12.125C0 15.7688 1.49375 18.9188 3.92604 21.0938C4.13021 21.276 4.25312 21.5323 4.2625 21.8063L4.33021 24.0292C4.35208 24.7385 5.08437 25.2 5.73333 24.9135L8.21458 23.8188C8.425 23.726 8.66042 23.7094 8.88229 23.7698C10.0219 24.0833 11.2354 24.25 12.5 24.25C19.5417 24.25 25 19.0917 25 12.125C25 5.15833 19.5417 0 12.5 0ZM20.0062 9.32917L16.3344 15.1552C15.75 16.0823 14.499 16.3125 13.6229 15.6552L10.7021 13.4646C10.4344 13.2635 10.0656 13.2646 9.79896 13.4677L5.85417 16.4604C5.32812 16.8594 4.64062 16.2302 4.99271 15.6708L8.66458 9.84479C9.24896 8.91771 10.5 8.6875 11.376 9.34479L14.2969 11.5354C14.5646 11.7365 14.9333 11.7354 15.2 11.5323L19.1448 8.53958C19.6719 8.14063 20.3583 8.76979 20.0062 9.32917Z" fill="#DCDCDC"/>
            </svg>
        </a>

        <a href="https://www.linkedin.com/in/marcus-nirgi" className={styles.contact_icon}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 8.33334C18.3243 8.33334 19.914 8.99182 21.0861 10.1639C22.2582 11.336 22.9167 12.9257 22.9167 14.5833V21.875H18.75V14.5833C18.75 14.0308 18.5305 13.5009 18.1398 13.1102C17.7491 12.7195 17.2192 12.5 16.6667 12.5C16.1141 12.5 15.5842 12.7195 15.1935 13.1102C14.8028 13.5009 14.5833 14.0308 14.5833 14.5833V21.875H10.4167V14.5833C10.4167 12.9257 11.0751 11.336 12.2473 10.1639C13.4194 8.99182 15.0091 8.33334 16.6667 8.33334Z" stroke="#DCDCDC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.25 9.375H2.08333V21.875H6.25V9.375Z" stroke="#DCDCDC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16667 6.25001C5.31726 6.25001 6.25 5.31727 6.25 4.16668C6.25 3.01608 5.31726 2.08334 4.16667 2.08334C3.01607 2.08334 2.08333 3.01608 2.08333 4.16668C2.08333 5.31727 3.01607 6.25001 4.16667 6.25001Z" stroke="#DCDCDC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    </div>
    )

    return <Section 
    header="Contact"
    id="contact"
    className={styles.section}
    style={{
        backgroundColor: "black"
    }}
    >
    
    <div className={styles.main_container}>
        <div className={styles.header_container}>
            <h2 className={styles.title}>Need something done?</h2>
            <label className={styles.subtitle}>Let's talk!</label>
        </div>

            <Formik 
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validate={(values) => {
                const errors: {name?: string, email?: string, message?: string} = {};

                if (values.name.trim().length == 0) {
                    errors.name = "Please enter your name!";
                }


                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Please enter a valid email address!";
                }

                if (values.message.trim().length < 10) {
                    errors.message = "Please enter the contents of your message! (min: 10 characters)"
                }

                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                fetch("https://formspree.io/f/xvoenndw", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                }).then(() => {
                    setWasMessageSent(true);
                    resetForm();
                });
            }}
            >
                {({ touched, isSubmitting, isValid, dirty}) => (
                <Form className={styles.form}>
                    <label className="-mb-4" htmlFor="name">NAME</label>
                    <Field type="text" name="name" id="name" placeholder="John Doe" />
                    <ErrorMessage name="name" component="div" className={styles.error_message} />

                    <label className="-mb-4" htmlFor="email">EMAIL</label>
                    <Field type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
                    <ErrorMessage name="email" component="div" className={styles.error_message} />

                    <label className="-mb-4" htmlFor="message">MESSAGE</label>
                    <Field component="textarea" name="message" id="message" rows={5} placeholder="Hey, I need some help..." />
                    <ErrorMessage name="message" component="div" className={styles.error_message} />


                    {!isMobile ? <EmailContact /> : null}

                    <div className={styles.send_message_container}>
                        {!isMobile ? <MainContacts /> : null}

                        <button disabled={
                            !dirty || isSubmitting || Object.keys(touched).length != 3  || !isValid
                        } type="submit" className={styles.send_button}>
                            SEND
                        </button>
                    </div>

                    {isMobile ? <EmailContact /> : null}
                    {isMobile ? <MainContacts /> : null}
                    {wasMessageSent ? <label className={styles.message_sent}>Message sent! I'll get back to you ASAP!</label> : null}
                </Form>
                )}
            </Formik>
    </div>
   </Section>
}   