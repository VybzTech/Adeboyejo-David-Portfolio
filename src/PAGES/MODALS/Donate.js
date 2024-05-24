import * as Yup from "yup";
import CheckBox from "../../COMPONENTS/CheckBox";
import DonateCard from "../MODALS/DonateCard";
import { Form, Formik } from "formik";
import FormControl from "../../COMPONENTS/FormControl";
import React, { useState } from "react";
// import { Button } from '@material-ui/core'

const Donate = () => {
  const initialValues = {
    name: "",
    comment: "",
  };

  const onSubmit = (values) => {
    console.log("form values", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your Name / Select anonymous"),
  });

  const [nameDis, setNameDis] = useState(false);
  const [placeholder, setPlaceholder] = useState("Please enter your Name");

  return (
    <div id="donate">
      <h1>Donate</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={false}
      >
        {(formik) => {
          return (
            <Form>
              <FormControl
                err={formik.errors}
                name="name"
                type="text"
                label="Name :"
                disabled={nameDis}
                placeholder={!nameDis ? placeholder : ""}
              />
              <FormControl
                err={formik.errors}
                name="comment"
                control="textarea"
                label="Comment / Dedication :"
              />
              <CheckBox
                name="anonymous"
                nameDis={nameDis}
                setNameDis={setNameDis}
                label="Anonymous transfer"
                setPlaceholder={setPlaceholder}
              />
              <DonateCard />
              <button type="submit">DONATE</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Donate;
