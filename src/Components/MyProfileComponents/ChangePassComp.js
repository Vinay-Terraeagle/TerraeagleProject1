import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import '../../Styles/Myprofile.css'
import axios from 'axios'
import { BASE_URL, TOKEN } from '../../Backend/config';
import {CheckCircleFill} from "react-bootstrap-icons"


export default function ChangePassComp() {

    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is Mandatory')
          .min(3, 'Password must be at 3 char long'),
        password_confirmation: Yup.string()
          .required('Password is Mandatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState


      function onSubmit(data ) {
        console.log(JSON.stringify(data, null, 4))
        const config = {
            headers: {
                Authorization: TOKEN
            }
        }
        reset();
        // return false
        axios.post(`${BASE_URL}/profile/Deepti22/updateUserPassword`,data, config).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        })
      };

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className='bg-white rounded-bottom'>
                        <div className='password-div'>
                            <div className='pass-row'>
                                <form className='passform' onSubmit={handleSubmit(onSubmit)}>
                                <label>Current Password</label>
                                <input placeholder="Confirm Password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}  type="password"/>
                                <div  className='invalid-feedback'>{errors.password?.message}</div> 
                                <label className='mt-2'>Change Password</label>
                                <input placeholder="Confirm Password"  {...register('password_confirmation')} className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`} type="password"/>
                                <div className="invalid-feedback">{errors.password_confirmation?.message}</div>
                                <div className='mt-3'>
                                    <button className='savepass' type='submit'>Save Password</button>
                                </div>

                                {/* password change alert */}
                                <div className='passwordchange_success d-flex justify-content-center mt-5 align-items-baseline'>
                                    <CheckCircleFill className='mr-1' style={{fontSize:'20px',color:'green'}}/>
                                    <h5>Password Changed Successfully</h5>
                                </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
