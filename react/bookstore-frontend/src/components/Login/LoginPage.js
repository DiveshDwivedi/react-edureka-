import React from "react";
const Login = () => {
return (
<>
<div className="card my_login_card" >
<div className="card-body">
<form>
<div className="mb-3">
<label className="form-label">
Email address
</label>
<input
type="email"
className="form-control"
id="exampleInputEmail1"
aria-describedby="emailHelp"
/>
</div>
<div className="mb-3">
<label className="form-label">
Password
</label>
<input
type="password"
className="form-control"
id="exampleInputPassword1"
/>
</div>
<button type="submit" className="btn btn-primary">
Submit
</button>
</form>
</div>
</div>
</>
);
};
export default Login;