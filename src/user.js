import React from "react"
import { useParams } from "react-router-dom"
function User(){
    const {id}=useParams()
    return <p>user id is {id}</p>
}
export default User