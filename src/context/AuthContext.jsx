import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchCourese = async ()=>{
    const response = await axios.get("http://localhost:5020/courses");
    return response.data;
  }

 

  const login = async (email, password) => {
    try {
      const payload ={
        Username:email,
        Password:password
      }
      const res = await axios.post('http://localhost:5020/user/login',payload);
      console.log(res)
      if(res.data.username){
        localStorage.setItem("token",res.data.username)
        setUser(res.data.username);
        navigate('/dashboard');
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };


  const signup = async (email, password) => {
    try {
      console.log(email,password)
      const payload ={
        Username:email,
        Password:password
      }
      const response = await axios.post("http://localhost:5020/user/signup",payload);
      console.log(response.data)
      if(response.data.id){
        alert("signup successfull");
      }

      navigate('/login');
    } catch (error) {
      console.error(error);
      // alert('Signup failed');
    }
  };



  return (
    <AuthContext.Provider value={{ user, login, signup,fetchCourese }}>
      {children}
    </AuthContext.Provider>
  );
};
