import React, { Component } from 'react'
import '../States.css'

export default class Stateinclasscomponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"kowshik",
            count:5

        }
    }
    render() {
        setTimeout(()=>{
            this.setState({
                name:"N",
                
            })

        },5000)
        return (
            <div className='demo'>
                <h1>Welcome {this.state.name}</h1>
                <h1>Count is {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                    }

                    )
                }

                }>Click to Increment</button>
                <br/><br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count = 0
                    }

                    )
                }

                }>Click to reset</button>
                <br/><br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    }

                    )
                }

                }>Click to Decrement</button>
    
    

            </div>
        )
    }
}
