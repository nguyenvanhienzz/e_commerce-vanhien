import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Account, selectAccout } from '../slices/userSlice'
import contryData from '../../Data/ContryData';
import { AiOutlineClose } from 'react-icons/ai'
import { db } from '../firebases/firebase';
import './AccoutSetting.css';

const AccountDetails = () => {
    const selectAccouts = useSelector(selectAccout);
    const [errors, setErrors] = useState({});
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        // email: selectAccouts.email,
        // password: selectAccouts.password,
        phonenumber: '',
        birth: '',
        country: ''
    });
    const [editpassword, setEditpassword] = useState({
        password: '',
        newpassword: '',
        confirmpassword: ''
    })
    const validateInfo = () => {
        var phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        let errors = {};
        if (!values.phonenumber.match(phone)) {
            errors.phonenumber = 'Please enter a valid mobile number.';
        }
        if (!editpassword.password.trim()) {
            errors.password = 'Please enter your current password.';
        }
        else if (editpassword.password !== selectAccouts.password) {
            errors.password = 'Incorrect password';
        }
        if (!editpassword.newpassword.trim()) {
            errors.newpassword = 'Please enter a valid new password. ';
        } else if (editpassword.newpassword.length < 6) {
            errors.newpassword = 'Password must be at least 6 characters long';
        }
        if (!editpassword.confirmpassword.trim()) {
            errors.confirmpassword = 'Please enter a valid new password.';
        } else if (editpassword.confirmpassword !== editpassword.newpassword) (
            errors.confirmpassword = 'Password does not match.'
        )
        return errors;
    }
    const val = validateInfo();
    const handerSave = (e) => {
        dispatch(Account(values));
        e.preventDefault();
        setErrors({ phonenumber: val.phonenumber });
    }
    const handerSaveConfire = () => {
        setErrors({ password: val.password, newpassword: val.newpassword, confirmpassword: val.confirmpassword });
        if (Object.keys(val).length === 0) {
            dispatch(Account({ ...selectAccouts, password: editpassword.newpassword }));
            db.collection("users").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (selectAccouts.email === doc.data().email) {
                        db.collection('users').doc(doc.id).set({
                            ...selectAccouts,
                            password: editpassword.newpassword,
                            password2: editpassword.confirmpassword,
                        })
                    }

                });
            });
            setEditpassword({
                password: '',
                newpassword: '',
                confirmpassword: ''
            });
            setEdit(!edit);
        }
    }

    const handerClone = () => {
        setEdit(!edit);
        setEditpassword({
            password: '',
            newpassword: '',
            confirmpassword: ''
        });
        setErrors({ password: '', newpassword: '', confirmpassword: '' });
    }

    return (
        <>
            <p>Account Details</p>
            <div className='edit-accout'>
                <fieldset>
                    <legend>Email*</legend>
                    <input type='email' name="email" placeholder='Email...' value={values.email} onChange={(e) => {
                        setValues({ ...values, email: e.target.value })
                    }} />
                </fieldset>
                <div className='fieldset-none'>
                    <p>Password</p>
                    <input type='password' placeholder='Password...' value={values.password} /><span onClick={() => setEdit(!edit)}>Edit</span>
                    <p>Phone number</p>
                    <input type='text' placeholder='Phone number...' value={values.phonenumber} onChange={(e) => setValues({ ...values, phonenumber: e.target.value })} />
                    <p className='phone-error'>{errors.phonenumber}</p>
                </div>
                <fieldset>
                    <legend>Date of Birth*</legend>
                    <input type='date' value={values.birth} onChange={(e) => setValues({ ...values, birth: e.target.value })} />
                </fieldset>
                <fieldset>
                    <legend>Country/Region*</legend>
                    <select className='contry-select' value={values.country} onChange={(e) => setValues({ ...values, country: e.target.value })}>
                        {
                            contryData.map((item) => (
                                <option value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>
                </fieldset>
                <button
                    onClick={handerSave}
                    disabled={values.phonenumber != '' ? '' : 'disabled'}
                    className={values.phonenumber != '' ? 'save-btn' : 'save-none'}
                >Save</button>
            </div>

            <div className={edit ? 'edit-password' : 'edit-none'} >
                <div className='details-edit' >
                    <div className={edit ? 'password-defase' : 'password-clone'}>
                        <div>
                            <AiOutlineClose className='icon-close' onClick={handerClone} />
                        </div>
                        <div className='password-new'>
                            <p>Edit Password</p>
                            <div className='password-fieldset'>
                                <fieldset>
                                    <legend>Current Password*</legend>
                                    <input type='password' placeholder='Current Password...' value={editpassword.password} onChange={(e) => setEditpassword({ ...editpassword, password: e.target.value })} />
                                </fieldset>
                                <p className='phone-error'>{errors.password}</p>
                                <fieldset>
                                    <legend>New Password*</legend>
                                    <input type='password' placeholder='New Password...' value={editpassword.newpassword} onChange={(e) => setEditpassword({ ...editpassword, newpassword: e.target.value })} />
                                </fieldset>
                                <p className='phone-error'>{errors.newpassword}</p>

                                <fieldset>
                                    <legend>Confirm New Password*</legend>
                                    <input type='password' placeholder='Confirm New Password...' value={editpassword.confirmpassword} onChange={(e) => setEditpassword({ ...editpassword, confirmpassword: e.target.value })} />
                                </fieldset>
                                <p className='phone-error'>{errors.confirmpassword}</p>

                            </div>
                            <div className='password-requirements'>
                                <p >Password requirements:</p>
                                <p className='icon'><AiOutlineClose className='icon-clone' />Minimum of 8 characters</p>
                                <p className='icon'><AiOutlineClose className='icon-clone' />Uppercase, lowercase letters and one number</p>
                            </div>
                        </div>
                        <button onClick={handerSaveConfire}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails

