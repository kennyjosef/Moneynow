import * as yup from "yup"

export const bvnSchema=yup.object().shape({
    bvn:yup
    .string()
    .max(11)
    .required("Required")
})