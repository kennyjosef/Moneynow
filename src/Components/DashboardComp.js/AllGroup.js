// import React from 'react'
// import axios from 'axios'
// const AllGroup = () => {
//     const createGroup =()=>{
//         axios.get(url,
//           {headers:{authorization:`Bearer ${token}`}})
//         .then(res=>{
//           console.log(res.data.data)
//           localStorage.setItem("groupOne", res.data.data[0]._id)
//           localStorage.setItem("groupTwo",res.data.data[1]._id)
//           console.log("sliver group id", localStorage.getItem("groupOne"))
//           console.log( "silverGold id is", localStorage.getItem("groupTwo"))
//         })
//         .catch(error=>{
//           console.log(error)
//         })
//       }
//       createGroup()
//   return (
//     <div>

//     </div>
//   )
// }

// export default AllGroup
import React from "react";
import { createContext } from "react";

export const userContext= createContext(null)
