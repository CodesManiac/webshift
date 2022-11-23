import React from 'react';
import Logo from '../assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

type FormData = {
  email: string;
};
const Footer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (value: {}) => {
    const data = value;
    console.log('data is ', data);

    reset();
    Swal.fire({
      icon: 'success',
      title: 'Thanks...',
      text: 'Your subscription has been received!',
      confirmButtonColor: '#e4f22f',
    });
  };
  return (
    <footer className='footer-container'>
      <a href='/' className='logo'>
        <img src={Logo} alt=' webshift' className='l' />
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-container'>
          <input
            type='text'
            autoComplete='name'
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            placeholder='Email address'
            className=''
          />
          <button type='submit'>JOIN OUR MOVEMENT</button>
        </div>
        <span className=''>{errors.email && errors.email.message}</span>
      </form>

      <p className='copyright'>Copyright 2022 Webshift. All Rights Reserved</p>

      <div className='navigations'>
        <a href='/'>Terms of Service</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
