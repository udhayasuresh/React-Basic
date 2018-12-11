import React, { Component } from 'react';
import '../css/styles.css'



const Header = (props) =>{
   
     //console.log(this.props.keyword)

    return (
     <header>
         <div className="logo">Logo</div>
         <input type="text" onChange={props.keyword}/>

     
     </header>    
    );
} 

export default Header;