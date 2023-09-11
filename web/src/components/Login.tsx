import "../css/login.css";
import React, { useState,useEffect, Dispatch } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { onchangeLoginStatus } from "../store";

import {SiKakao,} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";
import { AnyAction } from "@reduxjs/toolkit";




function Login(){
    const dispatch = useDispatch();    
    let [mode , setMode] = useState("login");

    let loginStatus = useSelector((state : {loginStatus : string})=>{
        return state.loginStatus;
    })

    function 로그인창닫기(e :React.MouseEvent){
        if( e.target === e.currentTarget){
            dispatch(onchangeLoginStatus(""));
            setMode("login");
        }
    }

    function onChangeMode( x : string  ){
        setMode( x )
    }

    
    return <div className={`login-wrap ${loginStatus}`} onClick={(e)=>{로그인창닫기(e)}}>
                {mode === "login" &&  <LoginComp setMode = {onChangeMode} dispatch={dispatch}/>}
                {mode === "join" && <JoinComp  setMode = {onChangeMode} dispatch={dispatch}/>}
                {mode === "find" && <FindComp  setMode = {onChangeMode} dispatch={dispatch} />}
            </div>
}

export default Login;



function LoginComp({setMode,dispatch} : {setMode : (x:string) => void,dispatch : Dispatch<AnyAction>}){
    return  <div className="login-commonBox loginBox">
    <div className="login-logoBox"></div>
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
            <span className="joinFindText" onClick={()=>{setMode("join")}}>회원가입</span> 
            {/* <span className="joinFindText" onClick={()=>{setMode("find")}}>ID/PW찾기</span>] */}
            </div>
    </div>
    <div className="OR">OR</div>
    <div className="login-slBox">
        <div className="login-slBtnBox kakao"><SiKakao/></div>
        <div className="login-slBtnBox google"><FcGoogle/></div>
    </div>
</div>
}



function JoinComp({setMode,dispatch} : {setMode : (x:string) => void, dispatch : Dispatch<AnyAction>}){

    class InputData {
        message : string;
        status : boolean;
        color : string;
        constructor(m : string , c :string){
            this.message = m;
            this.status = false;
            this.color = c;
        }
    }

    let [id,setId] = useState("");
    let [pw,setPw] = useState("");
    let [phone,setPhone] = useState("");
    let [idMessage,setIdM] = useState(new InputData("아이디를 입력해주세요","gray"))
    let [pwMessage,setPwM] = useState(new InputData("비밀번호를 입력해주세요","gray"))
    let [phoneMessage,setPhoneM] = useState(new InputData("휴대폰 번호를 입력해주세요(하이픈 제외)","gray"));
    let [pwCheckMessage,setPwMC] = useState(new InputData("비밀번호 확인","gray"));
    function setter(state : InputData, color :string , message : string , status : boolean , set : React.Dispatch<React.SetStateAction<InputData>>){
        let copy = {...state};
        copy.color = color;
        copy.status = status;
        copy.message = message;
        set(copy);
    }

    const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    const phoneRegex = /^(010|011|016|017|018|019)\d{3,4}\d{4}$/;
    function onChangeId(e : React.ChangeEvent<HTMLInputElement>){
        setId(e.target.value);
        if(e.target.value === "")
            setter(idMessage, "gray","아이디를 입력해주세요", false ,setIdM);
        else if(e.target.value.length < 6 || e.target.value.length > 15){
            setter(idMessage,"tomato","아이디는 6자 이상 15자 이하로 입력해주세요",false,setIdM)
            return
        }else if(!idRegex.test(e.target.value)){
            setter(idMessage,"tomato","영문 및 숫자로 이루어진 아이디를 입력해주세요",false,setIdM);
            return
        }
        else {
            setter(idMessage,"green","올바른 형식입니다",true,setIdM);
        }
    }
    
    function onChangePw(e : React.ChangeEvent<HTMLInputElement>){
        setPw(e.target.value);
        if(e.target.value === "")
            setter(pwMessage, "gray","비밀번호를 입력해주세요", false ,setPwM);
        else if(e.target.value.length < 6 || e.target.value.length > 15){
            setter(pwMessage,"tomato","비밀번호는 8자 이상 20자 이하로 입력해주세요",false,setPwM)
            return
        }else if(!pwRegex.test(e.target.value)){
            setter(pwMessage,"tomato","대문자와 특수문자 숫자가 포함된 비밀번호를 입력해주세요",false,setPwM);
            return
        }
        else {
            setter(pwMessage,"green","올바른 형식입니다",true,setPwM);
        }

    }

    function onChangePwCheck( e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.value === "")
        setter(pwCheckMessage,"gray","비밀번호 확인",false,setPwMC)
        else if(pw !== e.target.value){
            setter(pwCheckMessage,"tomato","동일한 비밀번호를 입력해주세요",false,setPwMC)
        }
        else if (!pwRegex.test(pw)){
            setter(pwCheckMessage,"tomato","올바른 비밀번호를 입력해주세요",false,setPwMC)
        }
        else {
            setter(pwCheckMessage,"green","비밀번호 확인 완료",true,setPwMC)
        }
    }

    function onChangePhone (e : React.ChangeEvent<HTMLInputElement>){
        setPhone(e.target.value);
        if(e.target.value === "") 
            setter(phoneMessage,"gray","휴대폰 번호를 입력해주세요(하이픈 제외)",false,setPhoneM)
        else if(!phoneRegex.test(e.target.value)){
            setter(phoneMessage,"tomato","올바른 형식의 휴대폰 번호를 입력해주세요",false,setPhoneM)
        }else {
            setter(phoneMessage,"green","올바른 형식입니다",true,setPhoneM)
        }
    }

    function join(){
        if(idMessage.status === false){
            alert("올바른 아이디를 입력해주세요");
            return
        }else if(pwMessage.status === false){
            alert("올바른 비밀번호를 입력해주세요");
            return
        }else if (pwCheckMessage.status === false){
            alert("동일한 비밀번호를 입력해주세요");
            return
        }else if (phoneMessage.status === false) {
            alert("올바른 휴대폰 번호를 입력해주세요");
            return; 
        }
        else {
            let confirm = window.confirm("회원가입 하시겠습니까?");
            if(confirm){
                alert("회원가입이 완료 되었습니다.")
                setMode("login");
                dispatch(onchangeLoginStatus(""))
            }else {
                alert("회원가입이 취소 되었습니다.")
            }
        }


    }


 let text = `standard form contract 은 을 영어로 번역한 것입니다. 샘플 번역 문장: 참고:
                             계속하려면 서비스 약관에 동의하고 앱 서명을 선택해야 합니다.
                             standard form contract 은 "약관"을 영어로 번역한 것입니다. 
                             샘플 번역 문장: 참고: 계속하려면 서비스 약관에 동의하고 앱 서명을 선택해야 합니다.
                             standard form contract 은 "약관"을 영어로 번역한 것입니다.
                              샘플 번역 문장: 참고: 계속하려면 서비스 약관에 동의하고 앱 서명을 선택해야 합니다.
                             `
   
    return <div className="login-commonBox joinBox">
            <div className="login-logoBox"></div>
            <div className="login-subjectBox">JOIN</div>
            <div className="login-inputBox">
                <input placeholder="아이디" type="text" onChange={(e)=>{onChangeId(e)}} value={id}/>
                <span className="안내메시지" style={{color : idMessage.color}}>{idMessage.message}</span>
            </div>
            <div className="login-inputBox">
                <input placeholder="비밀번호" type="password" onChange={(e)=>{onChangePw(e)}} value={pw}/>
                <span className="안내메시지" style={{color : pwMessage.color}}>{pwMessage.message}</span>
            </div>
            <div className="login-inputBox">
                <input placeholder="비밀번호 확인" type="password" onChange={(e)=>{onChangePwCheck(e)}}/>
                <span className="안내메시지" style={{color : pwCheckMessage.color}}>{pwCheckMessage.message}</span>
            </div>
            <div className="login-inputBox">
                <input placeholder="휴대폰 번호" type="text" onChange={(e)=>{onChangePhone(e)}} maxLength={11}/>
                <span className="안내메시지" style={{color : phoneMessage.color}}>{phoneMessage.message}</span>
            </div>
            <div className="login-termsBox">
                <span>{text}</span>
            </div>
            <div className="login-cbBox">   
                   약관동의<input type="checkbox"/>
            </div>
            
            <button className="login-btn" onClick={()=>{join()}}>회원가입</button>
        </div>

}

function FindComp({setMode ,dispatch} : {setMode : (x:string) => void,dispatch : Dispatch<AnyAction>}){
    return <div className="login-commonBox findBox">
            <div className="login-logoBox"></div>
            <div className="login-subjectBox">ID/PW FIND</div>
    </div>
} 





   