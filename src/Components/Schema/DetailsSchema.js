import * as yup from "yup"
export const detailsSchema= yup.object().shape({
    firstName:yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required("Required"),
    lastName:yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required("Required"),
    phoneNumber:yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('A phone number is required'),
    referralId:yup 
    .string()
    

})