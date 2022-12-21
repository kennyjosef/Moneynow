import * as yup from "yup"
const bvnRegex = RegExp(/^[0-9]*$/);
export const bvnSchema=yup.object().shape({
    bvn:yup
    .string()
    .max(11)
    .matches(bvnRegex, {message:"Input valid BVN"})
    .required("Required")

})