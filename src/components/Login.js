
const Login = () =>{
    return(
        <div className="login_section">
            <div className="login_container">
                <h1 style={{textAlign: 'center',color: 'var(--main-color)'}}>Login</h1>
                <input type="text" placeholder="Mobile Number"/>
                <input type="text" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;