import React from 'react'

const MyContext = React.createContext();

const MyApp = props => {
    return (
        <div>
            <MyContext.Provider value="Hello Context">
                <Navbar/>
            </MyContext.Provider>
        </div>
    )
}

const Navbar = props => {
    return(
        <Brand/>
    )
}
const Brand =props => {
    return(
        <MyContext.Consumer>
           {value => <h1>{value}</h1>}
        </MyContext.Consumer>
    )
}

export default MyApp