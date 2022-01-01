import React from 'react';
import {BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
// import ListRendering from './ListRendering';
// import Stateinclasscomponent from './Stateinclasscomponent';
// import UnionBank from './UnionBank';

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="a" element={<Main/>}></Route>
                {/* <Route path="b" element={<Change/>}></Route>
                <Route path="c" element={<UnionBank/>}></Route>
                <Route path="d" element={<ListRendering/>}></Route>
                <Route path="e" element={<Stateinclasscomponent/>}></Route>
                <Route path="f" element={<Charge/>}></Route> */}
            </Routes>
            </BrowserRouter>

        </div>
    )
}


function Main()
{
    return(
        <>
        <h1>::Home Page::</h1>
        <Link to="/login">Login</Link>
        </>
    )
}

// function Change()
// {
//     return(
//         <>
//         <h2>:hompage is loading:</h2>
//         </>
//     )
// }
// function Charge()
// {
//     return(
//         <>
//         <h3>:some thing is error:</h3>
//         </>
//     )
// }