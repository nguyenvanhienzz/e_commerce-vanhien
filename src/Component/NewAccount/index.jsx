import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth, db } from '../firebases/firebase';
import { LognIn, selectlogin } from '../slices/userSlice';
import './NewAccount.css';

const Account = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const selectlogins = useSelector(selectlogin);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState({});
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

    }
    const validateInfo = () => {
        let errors = {};
        if (!values.username.trim()) {
            errors.username = 'Pleace enter a full name';
        }
        else if (values.username.length < 5) {
            errors.username = 'Pleace full name must be more than 5 characters ';
        }
        if (!values.email.trim()) {
            errors.email = 'Pleace enter a email';
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
            const product = selectlogins.find(item => item.email === values.email)
            if (product) {
                errors.email = 'The Email was registered? Please register with another email';
            }

        }
        if (!values.password.trim()) {
            errors.password = 'Pleace enter a password';
        }
        else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';

        }
        if (!values.password2.trim()) {
            errors.password2 = 'Pleace enter a password';
        }
        else if (values.password2 !== values.password) {
            errors.password2 = 'Password do not match';
        }
        return errors;
    }
    const val = validateInfo();
    const register = () => {
        setErrors(validateInfo());
        if (Object.keys(val).length > 0) {
            return;
        } else {
            auth
                .createUserWithEmailAndPassword(values.email, values.password)
                .then(auth => {
                    db.collection('users').add({
                        username: values.username,
                        email: auth.user.email,
                        password: values.password,
                        password2: values.password2
                    }).then(() => {
                        setValues({
                            username: '',
                            email: '',
                            password: '',
                            password2: '',
                        });
                        alert('đăng kí thành công')
                        history.push('/login');
                    }).catch(error => console.log(error))
                })
        }
    }

    return (
        <section className='account'>
            <div className='account-main'>
                <img src='https://i.pinimg.com/originals/7f/1d/72/7f1d721686762aba6c1b895da4dbf7de.png' onClick={() => history.push('/')} />
                <h2>BECOME A NIKE MEMBER</h2>
                <div className='input-account'>
                    <div className='input-chek'>
                        <input type='text' placeholder='Your name' value={values.username} onChange={handleChange} name='username' /><br />
                        <span className='check'>{errors.username}</span>
                    </div>
                    <div className='input-chek'>
                        <input type='email' placeholder='Email address' value={values.email} onChange={handleChange} name='email' /><br />
                        <span className='check'>{errors.email}</span>
                    </div>
                    <div className='input-chek'>
                        <input type='password' placeholder='Password' value={values.password} onChange={handleChange} name='password' /><br />
                        <span className='check'>{errors.password}</span>
                    </div>

                    <div className='input-chek'>
                        <input type='password' placeholder='Re-enter password' value={values.password2} onChange={handleChange} name='password2' /><br />
                        <span className='check'>{errors.password2}</span>
                    </div>
                    <button onClick={register}>JOIN US</button>
                    <p className='member'>Already a Member? <span onClick={() => history.push('/login')} className='signin'> Sign In.</span></p>
                </div>
            </div>
        </section >
    )
}

export default Account
