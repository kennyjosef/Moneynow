import React,{createContext} from 'react'
import axios from "axios";

export const DataContext = createContext()


const UserName = () => {
    const getUserName = () =>  {
        axios.get(`https://moneynow.onrender.com/api/username?id=${localStorage.getItem("userID")}`)
        .then(res => {
          console.log(res)
        //   let data= res
        //   console.log(data)
        })
        .catch(err => console.log(err))
      }
      getUserName()
  return (
    <DataContext.Provider>
            <div>
                 {/* {res} */}
            </div>
    </DataContext.Provider>
  )
}

export default UserName
