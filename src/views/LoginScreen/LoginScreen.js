import React from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import MainContainer from '../../layouts/MainContainer'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

export default function LoginScreen() {
  let navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    navigate('/dashboard', { replace: true });
  }

  console.log(watch("username"));

  return (
    <MainContainer>
      <Row className='login_page'>
        <div className='login-container'>
          <Row>
            <div>
              <h1 className='title'>Welcome</h1>
              <p className='sub'>Please login to continue</p>
            </div>
          </Row>
          <Form className='form-login' onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>
                Username
                {errors.username && <span className='required'>*</span>}
              </Form.Label>
              <Form.Control placeholder='Username' type='email' {...register("username", { required: true })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password
                {errors.password && <span className='required'>*</span>}
              </Form.Label>
              <Form.Control placeholder='Password' type='password' {...register("password", { required: true })} />
            </Form.Group>
            <Button type='submit' variant='primary' className='login-btn'>Login</Button>
          </Form>
        </div>
      </Row>
    </MainContainer>
  )
}
