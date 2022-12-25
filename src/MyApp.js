import React, { useEffect } from 'react'

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

// const MyApp = props => {
//     return <Navbar/>
// }

// const Navbar = props => {
//     return <Brand/>
// }

// const Brand = props => {
//     let value = React.useContext(MyContext)
//     return <h1>{value}</h1>
// }

//functional component in context

// class MyApp extends React.Component {
//     render() {
//         return <Navbar/>
//     }
// }

// class Navbar extends React.Component {
//     render() {
//         return <Brand/>
//     }
// }

// class Brand extends React.Component {
//     static contextType = MyContext

//     render() {
//         return(
//             <h1>{this.context}</h1>
//         )
//     }
// }

//useEffect

const MyApp = props => {
    useEffect(() => {
        const btn = document.getElementById('click')
        btn.addEventListener('click', () => {
            console.log('Hello react');
        })
    })
     return <button id="click">Click</button>
}

export default MyApp