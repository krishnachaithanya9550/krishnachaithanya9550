import React,{useStates} from 'react'

export default function StateinFunctionalComponents() {
    let [name,updatename]=useState("Krishna")
    return (
        <div>
            
            <h1  onMouseover={()=>{updatename("krishna")}}
            onMouseLeave={()=>{updatename("krish")}}>
            {name}
            </h1>
        </div>
    )
}
