import { useFormik } from 'formik';
import { useState } from 'react';
import './App.css';
import { registerFormSchema } from './schemas/formSchema';

function App() {
  const [submitted, setSubmitted] = useState('');

  //form submit function - only executes after validation
  const onSubmit = (values, actions) => {
    console.log('Submitted', values);
    setSubmitted('Form submitted successfully....!!')
    actions.resetForm();
  }

  //formik useForm hooks to initialize errors,values etc
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    //our custom schema
    validationSchema: registerFormSchema,
    onSubmit,
  })

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className='input-box'>
          <label>Name</label>
          <input
            type="text"
            placeholder='Your name'
            id='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'input-error' : ''}
          />
          {errors.name && touched.name && <span className='error-message'>{errors.name}</span>}
        </div>
        <div className='input-box'>
          <label>Email</label>
          <input
            type="email"
            placeholder='Your Email'
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {errors.email && touched.email && <span className='error-message'>{errors.email}</span>}
        </div>
        <div className='input-box'>
          <label>Password</label>
          <input
            type="password"
            placeholder='Your Password'
            id='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {errors.password && touched.password && <span className='error-message'>{errors.password}</span>}
        </div>
        <div className='input-box'>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder='Confirm Password'
            id='confirmpassword'
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmpassword && touched.confirmpassword ? 'input-error' : ''}
          />
          {errors.confirmpassword && touched.confirmpassword && <span className='error-message'>{errors.confirmpassword}</span>}
        </div>
        <input disabled={isSubmitting} type="submit" />
        {submitted && <h4>{submitted}</h4>}
      </form>
    </div>
  );
}

export default App;
