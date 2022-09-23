import React, { useMemo } from 'react';
import styles from './CustomInput.module.scss';
import PropTypes from 'prop-types';
import { PatternFormat } from 'react-number-format';


const CustomInput = (props) => {
    const { type, placeholder, label, field, form } = props;
    const { name, value } = field;
    const { touched, errors } = form;

    return useMemo(() => (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <br></br>
            {name === 'phone' ?
                <PatternFormat
                    valueIsNumericString={false}
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    {...field}
                    allowEmptyFormatting
                    format="(###) ### ## ##"
                    patternChar="#"
                    mask="#"
                />

                :
                <input
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    {...field} />}

            {/* <input
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                {...field} /> */}
            <br></br>
            <span className={styles.error}>{touched[name] && errors[name] ? errors[name] : ''}</span>
            <br></br>
        </>
    ), [value, field, touched, errors, label, name, placeholder, type])
}
// [value, touched, errors]
CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    }),
    form: PropTypes.shape({
        touched: PropTypes.any.isRequired,
        errors: PropTypes.objectOf(PropTypes.string).isRequired
    })
};
CustomInput.defaultProps = {
    type: 'text',
    placeholder: '',
    label: '',
};

export default CustomInput;