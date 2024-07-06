import * as yup from "yup";

export const LoginShema = yup.object().shape({
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    password: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное')
});

export const RegistShema = yup.object().shape({
    name: yup.string().min(4, 'Минимальная длина 4 символов').required('Это поле обязательное'),
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    password: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное'),
    repeatPassword: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное'),
    numberPhone: yup.string().min(10, 'Минимальная длина 10 символов').required('Это поле обязательное'),
    date: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное')
});

export const FormShema = yup.object().shape({
    fullName: yup.string().min(4, 'Минимальная длина 2 символов').required('Это поле обязательное'),
    // address: yup.string().min(4, 'Минимальная длина 2 символов').required('Это поле обязательное')
});

export const ChangeDataProfileShema = yup.object().shape({
    name: yup.string().min(4, 'Минимальная длина 4 символа').required('Это поле обязатеьное'),
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    numberPhone: yup.string().min(15, 'Минимальная длина 10 символа').required('Это поле обязательное')
});