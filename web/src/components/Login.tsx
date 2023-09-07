import "../css/login.css";
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { onchangeLoginStatus } from "../store";





function Login(){
    const dispatch = useDispatch();    

    let loginStatus = useSelector((state : {loginStatus : string})=>{
        return state.loginStatus;
    })

    function 로그인창닫기(e :React.MouseEvent){
        if( e.target === e.currentTarget){
            dispatch(onchangeLoginStatus(""));
        }
    }



    
    return <div className={`login-wrap ${loginStatus}`} onClick={(e)=>{로그인창닫기(e)}}>
                    <div className="login-box">
                        <div className="login-logoBox">
                        
                        </div>
                        <div className="login-subjectBox">로그인</div>
                        <div className="login-inputBox">
                            <input type="text" placeholder="아이디"/>
                        </div>
                        <div className="login-inputBox">
                            <input type="password" placeholder="비밀번호"/>
                        </div>
                        <button className="login-btn">로그인</button>
                        <div>회원가입이나 비번찾기 등등</div>
                        <div className="OR">OR</div>

                    </div>
            </div>
}

export default Login;