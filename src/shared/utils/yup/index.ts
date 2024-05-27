import * as yup from "yup";

export const LoginShema = yup.object().shape({
    email: yup.string().email('Введите корректрный email').required('Это поле обязательное'),
    password: yup.string().min(8, 'Минимальная длина 8 символов').required('Это поле обязательное')
});
