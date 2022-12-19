import * as yup from "yup"

export const loginSchema= yup.object().shape({
    email:yup
    .string()
    .email("Please enter valid email")
    .required("Required"),
    password:yup
    .string()
    .min(8)
    .required("Required"),
})