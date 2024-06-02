import * as yup from "yup";

export const LoginShema = yup.object().shape({
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    password: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное')
});

export const RegistShema = yup.object().shape({
    name: yup.string().min(4, 'Минимальная длина 4 символов').required('Это поле обязательное'),
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    password: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное'),
    repeatPassword: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное')
});