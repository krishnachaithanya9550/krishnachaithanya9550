import React,{useState} from 'react'
export default function FormRenderingInFunctions() {
    let initialData={
        uname:"",
        pword:"",
        email:""
        
    }
    let [values,updatevalues]=useState(initialData);
const changeUsername=(event)=>{
  updatevalues({
      ...values,uname:event.target.value
  })
}

const changePassword=(event)=>{
  updatevalues({
     ...values, pword:event.target.value
  })
}

const changeEmail=(event)=>{
    updatevalues({
       ...values, email:event.target.value
    })
  }
const submitUserData=(event)=>{
  event.preventDefault()
  console.log(`${values.uname} ${values.pword} ${values.email}`)
}
    return (
        <div>
             <form onSubmit={submitUserData} method="get/">
                    <input type="text" value={values.uname} 
                    onChange={changeUsername}/>
                    <br></br>
                    <input type="text" value={values.pword}
                    onChange={changePassword}/>
                    <br></br>
                    <input type="text" value={values.email}
                    onChange={changeEmail}/>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
        </div>
    )
}
