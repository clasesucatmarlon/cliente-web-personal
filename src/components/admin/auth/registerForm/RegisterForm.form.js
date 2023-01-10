import * as Yup from 'yup';

export function initialValuesForm () {
    return {
        email: '',
        password: '',
        repeatPassword: '',
        conditionsAccepted: false
    }
}

export function validationSchema () {
    return Yup.object({
        email: Yup.string()
            .email('Is not valid the email')
            .required('Obligatory email'),
        password: Yup.string()
            .required('Obligatory password'),
        repeatPassword: Yup.string()
            .required('Obligatory repeat password')
            .oneOf([Yup.ref('password')], 'Passwords must be the same'),
        conditionsAccepted: Yup.bool().isTrue(true)
    })
}