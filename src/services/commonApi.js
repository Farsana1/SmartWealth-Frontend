import axios from "axios"

export const commonApi = async(httpRequest,url,reqBody)=>{
    const reqConfigure= {
        method:httpRequest,
        url,
        data :reqBody,
        headers:{
            "Content-Type":"application/json"
        },withCredentials: true,
    }
return await axios(reqConfigure).then((result)=>
{
    return result
}).catch((err)=>{
    return err
})
}