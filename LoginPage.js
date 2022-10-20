import React from 'react'
import axios from 'axios'

function LoginPage() {
  const submitHandle = (event)=>{
    event.preventDefault();
    const mail = event.target.mail.value;
    const pass = event.target.pass.value;
    const mobile = event.target.mobile.value;
    const name = event.target.name.value;

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Accept': 'application/json' },
    //     body: JSON.stringify({FormData})
        // body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // const url = {"https://www.getpostman.com/collections/de477ba120dd4baebb98"}



   axios.post("https://localguider.lineuptechnology.com/api/login" , {name,  mail , pass , mobile} ).then((response)=>{
        console.log(response);
        event.target.reset();
    })
    .catch((error)=>{
        console.log(error);
    });
}
  return (
    <div>
        <iv class="vh-100 d-flex justify-content-center align-items-center ">
            <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h2 class="text-center mb-4 text-primary">Login Form</h2>
                <form onSubmit={submitHandle}>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control border border-primary fs-2" name='name' id="name"  aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary fs-2" name='mail' id="mail" aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile No.</label>
                        <input type="tel" class="form-control border border-primary fs-2" name='mobile' id="mobile"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary fs-2" name='pass' id="pass"  required/>
                    </div>
                    <p class="small"><a class="text-primary" href="forget-password.html" style={{textDecoration:'none'}}>Forgot password?</a></p>
                    <div class="d-grid">
                        <button class="btn btn-primary my-4" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </iv>
    </div>
  )
}

export default LoginPage
