import "../css/login.css";
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { onchangeLoginStatus } from "../store";

import {SiKakao,} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";




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
                        <div className="login-subjectBox">LOGIN</div>
                        <div className="login-inputBox">
                            <input type="text" placeholder="아이디"/>
                        </div>
                        <div className="login-inputBox">
                            <input type="password" placeholder="비밀번호"/>
                        </div>
                        <button className="login-btn">로그인</button>
                        <div className="login-joinAndFindBox">
                            <div>
                                <span className="joinFindText">회원가입</span> 
                                    &nbsp;&nbsp;&nbsp;
                                <span className="joinFindText">ID/PW찾기</span></div>
                        </div>
                        <div className="OR">OR</div>
                        <div className="login-slBox">
                            <div className="login-slBtnBox kakao"><SiKakao/></div>
                            <div className="login-slBtnBox google"><FcGoogle/></div>
                        </div>
                    </div>
            </div>
}

export default Login;