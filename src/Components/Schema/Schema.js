import * as yup from "yup"
export const basicSchema= yup.object().shape({
    email:yup
    .string()
    .email("Please enter valid email")
    .required("Required"),
})