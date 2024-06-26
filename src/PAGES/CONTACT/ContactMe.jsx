import * as Yup from "yup";
import React, { useRef } from "react";
import { Form, Formik } from "formik";
import FormControl from "../../COMPONENTS/FormControl";
import Inbox from "../../ICONS/Inbox";
// import toast from "react-hot-toast";
import ErrorHandler from "../../COMPONENTS/ErrorHandler";
const ContactMe = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const form = useRef();

  const deliverMsg = (msg, onSubmitProps) => {
    console.log(form.current); // FUNC RETURNS WITH THE FORM ELEMENT
    // toast
    //   .promise(
    //     emailjs.sendForm(
    //       "service_akhfykf",
    //       "template_v9dvzt4",
    //       form.current,
    //       "user_ZIWXqpNHRWMObiqSZoEEP"
    //     ),
    //     {
    //       loading: "Sending Email...",
    //       success: <b>Email sent!</b>,
    //       error: <b>Try Again! / Use socials 😁</b>,
    //     }
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text, result.status, result.text);
    //       setTimeout(onSubmitProps.resetForm(), 2000);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       toast.error(error.text);
    //     }
    //   );
    console.log(msg);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Kindly enter your Name"),
    email: Yup.string()
      .email("Please enter a valid Email format")
      .required("Kindly enter your Email"),
  });

  return (
    <div className="ContactMeWrapper">
      <ErrorHandler>
        <div className="ContactMe">
          <div className="intro">
            <Inbox />
            <h2>Drop a Mail Inbox!</h2>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={deliverMsg}
          >
            {(formik) => {
              return (
                <Form ref={form}>
                  <FormControl
                    err={formik.errors}
                    name="name"
                    type="text"
                    label="Name :"
                    placeholder="Adeboyejo David"
                    autoComplete="off"
                    data-fnt={true}
                    star={true}
                  />
                  <FormControl
                    err={formik.errors}
                    name="email"
                    type="email"
                    label="Email :"
                    autoComplete="off"
                    placeholder="official-mail@yahoo.com"
                    star={true}
                  />
                  <FormControl
                    err={formik.errors}
                    name="subject"
                    type="text"
                    label="Subject :"
                    autoComplete="off"
                    placeholder="New E-commerce Site"
                  />
                  <FormControl
                    err={formik.errors}
                    name="message"
                    control="textarea"
                    label="Message :"
                    placeholder="Hey David, I have a project titled 'X' I would love you to get on quickly"
                    autoComplete="off"
                  />
                  <button type="submit" className="msgBtn">
                    Send
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                    </svg>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ErrorHandler>
      <div className="circleWrapper" />
    </div>
  );
};

export default ContactMe;
