import { useEffect, useState } from "react";

const useCreateEmailPassToken = (user) => {
  const [createUser, setCreateUser]=useState('')
    useEffect(()=>{
      
        const email = user?.user?.email;
        const currentUser = {email: email}
        
        if(email){
            fetch(`https://gentle-hamlet-86123.herokuapp.com/user/${email}`,{
                method: "PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res =>res.json())
            .then(data => {
                // console.log('data is', data)
            })
        }

       

    },[user])

    return [createUser]
};

export default useCreateEmailPassToken;