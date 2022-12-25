import React from 'react'

// const MyContext = React.createContext();

// const MyApp = props => {
//     return (
//         <div>
//             <MyContext.Provider value="Hello Context">
//                 <Navbar/>
//             </MyContext.Provider>
//         </div>
//     )
// }

// const Navbar = props => {
//     return(
//         <Brand/>
//     )
// }
// const Brand =props => {
//     return(
//         <MyContext.Consumer>
//            {value => <h1>{value}</h1>}
//         </MyContext.Consumer>
//     )
// }

const MyContext = React.createContext("Hello React Context")

const MyApp = props => {
    return <Navbar/>
}

const Navbar = props => {
    return <Brand/>
}

const Brand = props => {
    let value = React.useContext(MyContext)
    return <h1>{value}</h1>
}

export default MyApp