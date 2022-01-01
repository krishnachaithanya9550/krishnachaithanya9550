import React from 'react'

export default function ListRendering() {
    let emplist=[
        {
            name:"A",
            salary:"5LPA",
            designation:"Employee"
        },

        {
            name:"B",
            salary:"5LPA",
            designation:"Employee"
        },

        {
            name:"C",
            salary:"5LPA",
            designation:"Employee"
        },

        {
            name:"D",
            salary:"5LPA",
            designation:"Employee"
        }

    ]
    return (
        <div>
            <h1>ListRendering</h1>
            {/* {
            emplist.map(element=> {
                <h1>{element}</h1>
             
            })
        } */}

        {
            emplist.map(
                empdata=> 
                <>
                <h1>{empdata.name}</h1>
                <h1>{empdata.salary}</h1>
                <h1>{empdata.designation}</h1>
                </>
             
            )
        }
        </div>
    )
}
