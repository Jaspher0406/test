import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import MainContainer from "../../layouts/MainContainer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormTextInput from "../../components/TextInput.js/FormTextInput";
import TextForm from "../../components/Text/TextForm";

export default function LoginScreen() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/dashboard", { replace: true });
  };

  console.log(watch("username"));

  return (
    <div className="login">
      <div className="login-table">
        <h2 className="mb-4">Log In</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <TextForm text='Username' />
            {errors.username && <span className="required">*</span>}
            <FormTextInput
              placeholder="Enter your username"
              type="text"
              register={register("username", { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <TextForm text='Password' />
            {errors.password && <span className="required">*</span>}
            <FormTextInput
              placeholder="Enter your password"
              type="password"
              register={register("password", { required: true })}
            />
          </Form.Group>
          <div className="center mt-4">
            <PrimaryButton label="Submit" type="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
}
