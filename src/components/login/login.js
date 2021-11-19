import React, {useState} from "react";
import "./login.css"

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";


const Login = ({loginHandler}) =>{
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);

    const [pass, setPass] = useState("");
    const [passErr, setErrPass] = useState(false);

    const handlerLogin = (e) => {
        e.preventDefault();
        loginHandler(true);
        
    }

    return(
        <div className="card login-card mt-2 container">
            <form>
                <div className="form-group text-left">
                    <TextField
                        type="tel"
                        error={isError}
                        value={mobile}
                        className="line"
                        label="Enter Phone Number"
                        onChange={(e) => {
                        setmobile(e.target.value);
                        if (e.target.value.length > 9) {
                            setIsError(true);
                            }
                        }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">
                            +380
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="form-group text-left pass">
                    <TextField
                        type="password"
                        error={passErr}
                        value={pass}
                        label="Enter password"
                        className="line"
                        onChange={(e) => {
                            setPass(e.target.value);
                            if(e.target.value.length < 6){
                                setErrPass(true);
                            }
                        }}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handlerLogin}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;