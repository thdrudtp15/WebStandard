import "../css/login.css";

import React, { useEffect } from 'react';






function Login(){

    
    return <div className="login-wrap" onClick={()=>{}}>
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
                    </div>
            </div>
}

export default Login;