import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    nome: yup
        .string('nome should be a string')
        .required('name is required'),

    email: yup
        .string('email should be a string')
        .email('please provide a valid email address')
        .required('email address is required'),

    password: yup
        .string('password should be a string')
        .min(5, 'password should have a minium lenght of 5')
        .max(12, 'password should have a max lenght of 12')
        .required("password is required"),

    confirmPassword: yup
        .string("password should be a string")
        .oneOf([yup.ref("password")])
        .required("confirm password is required"),

    accountType: yup
        .string("account type should be a string")
        .oneOf(["personal", "commercial, studing"])
        .required("account type is required"),
    remember: yup.boolean().oneOf([true], 'Please, tick checkbox'),
    toggle: yup.boolean().oneOf([true], 'Please toggle accept')
})