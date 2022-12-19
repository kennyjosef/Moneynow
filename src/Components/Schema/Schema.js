import * as yup from "yup"
// const passReg= /^(?=.*\d)(?=.*[a-z])(?=.*(A-Z)).{5,}$/
export const basicSchema= yup.object().shape({
    email:yup
    .string()
    .email("Please enter valid email")
    .required("Required"),
    // password:yup
    // .string()
    // .min(5)
    // .matches(passReg, {message:"Please create a stronger password"})
    // .required("Required")
})