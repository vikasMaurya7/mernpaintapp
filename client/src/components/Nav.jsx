import React from 'react';
const Nav = ({user,setLoginUser}) => {
  
  
  return (
    <div className='navbar' style={navStyle.navbar}>
        <div className="title" style={navStyle.title}>Painting App</div>
        {
          (user)&&(
                <div className="logout" style={navStyle.logout} onClick ={()=>setLoginUser(null)} >Log out</div>
          )
        }
    </div>
  )
}

export default Nav;

const navStyle = {
    navbar:{
        width:"100vw",
        height:"10vh",
        padding:"10px 10vw",
        backgroundColor:"black",
        color:"#fff",
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between",
        paddingTop:"2.5vh"
    },
    title:{
      fontSize:"25px",
      textTransform:"captialize",
    },
    logout:{
      cursor:"pointer",
      color:"#fff",
      border:"1px solid white",
      padding :"10px 20px",
      backgroundColor:"red",
      fontWeight:"bold"

    },
    
}