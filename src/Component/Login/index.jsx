import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth, db } from '../firebases/firebase';
import { LognIn, selectlogin, Account, selectAccout } from '../slices/userSlice';
import './Login.css';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const selectlogins = useSelector(selectlogin);
    const selectAccouts = useSelector(selectAccout);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const handerChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }
    const validateInfo = () => {
        let errors = {};
        if (!values.email.trim()) {
            errors.email = 'Pleace enter a email';
        }
        if (!values.password.trim()) {
            errors.password = 'Pleace enter a password';
        }
        else if (selectlogins) {
            db.collection('users').get().then((snap) => {
                snap.forEach((doc) => {
                    const products = selectlogins.find(item => item.email === doc.data().email && item.password === doc.data().password)
                    if (products) {
                        return;
                    }
                    else {
                        dispatch(LognIn({
                            username: doc.data().username,
                            email: doc.data().email,
                            password: doc.data().password,
                            password2: doc.data().password2
                        }))

                    }
                })
            })
            const product = selectlogins.find(item => item.email === values.email && item.password === values.password)
            if (!product) {
                errors.full = 'Your email or password was entered incorrectly';
            }
        }
        return errors;
    }
    const val = validateInfo();
    const singin = (e) => {
        e.preventDefault();
        setErrors(validateInfo());
        if (Object.keys(val).length > 0) {
            return;
        }
        else {

            auth.signInWithEmailAndPassword(values.email, values.password)

                .then(() => {
                    const products = selectlogins.find(item => item.email === values.email)
                    if (products) {
                        dispatch(Account({
                            username: products.username,
                            email: products.email,
                            password: products.password,
                        }))
                    }
                    history.push('/')
                })
                .catch(error => alert(error))
        }

    }
    return (
        <section className='login'>
            <div className='login-main'>
                <img src='https://i.pinimg.com/originals/7f/1d/72/7f1d721686762aba6c1b895da4dbf7de.png' />
                <h2>YOUR ACCOUNT FOR<span><br /> EVERYTHING NIKE</span></h2>
                <div className='input-login'>
                    <p className='p-error'>{errors.full}</p>
                    <div className='input-check'>
                        <input type='email' placeholder='Email address' value={values.email} onChange={handerChange} name='email' /><br />
                        <p className='error-pleace'>{errors.email}</p>
                    </div>
                    <div className='input-check'>
                        <input type='password' placeholder='Password' value={values.password} onChange={handerChange} name='password' /><br />
                        <p className='error-pleace'>{errors.password}</p>
                    </div>
                    <button onClick={singin}>SIGN IN</button>
                    <p>Not a Member? <span onClick={() => history.push('/account')}>Join Us</span></p>
                </div>
            </div>
        </section >
    )
}

export default Login
