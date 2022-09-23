import React from 'react';
import { Formik, Form, Field } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenFormAC } from '../../store/form/actionCreators';
import { resetCartAC, resetCounterCartAC } from '../../store/cart/actionCreators';
import styles from './OrderForm.module.scss';

const OrderForm = () => {
    const cart = useSelector(store => store.cart.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, { resetForm }) => {
        console.log('Customer', values)
        console.log('Cart', cart);
        dispatch(setIsOpenFormAC(false));
        resetForm();
        navigate('/');
        dispatch(resetCartAC());
        dispatch(resetCounterCartAC());
    }

    const initialValues = {
        name: '',
        lastName: '',
        age: '',
        address: '',
        phone: '',
    }

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(2, 'Name should be more then 1 letters')
            .max(24, 'Name should be less then 24 letters')
            .matches(/^[aA-zZ]+$/, 'Name should consist of only latin letters')
            .required('Name is required'),
        lastName: yup.string()
            .min(2, 'Last name should be more then 2 letters')
            .matches(/^[aA-zZ]+$/, 'Last name should consist of only latin letters')
            .required('Last name is required'),
        age: yup.number().positive().integer().min(16, 'Ordering only for people older 16').required('Age is required'),
        address: yup.string().min(10, 'Address should be fully').required('Address is required'),
        phone: yup.string().min(10, 'Phone should be with operators code').required('Phone is required')
    })

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({
                isValid,
            }) => (
                <Form>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        label="Name"
                        component={CustomInput}
                    />
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        label="Last name"
                        component={CustomInput}
                    />
                    <Field
                        type="text"
                        name="age"
                        placeholder="Age"
                        label="Age"
                        component={CustomInput}
                    />
                    <Field
                        type="text"
                        name="address"
                        placeholder="Address"
                        label="Address"
                        component={CustomInput}
                    />
                    <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        label="Phone"
                        component={CustomInput}
                    />
                    <button className={styles.checkout} type="submit" disabled={!isValid}>Checkout</button>
                </Form>
            )}
        </Formik>
    )
}

export default OrderForm;