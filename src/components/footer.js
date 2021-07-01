import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"70vh",
        width:"100%",
        
    }
    return (
        <div>
        <footer className="bg-light text-dark py-3 " style={footerstyle}>
        <p className="text-center">


             Copyright &copy; mytodoslist.com
        </p>
    
        </footer>
        </div>
    )
}
