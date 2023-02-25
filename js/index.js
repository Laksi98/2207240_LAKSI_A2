const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', pass);
    localStorage.setItem('cpassword', cpass);
    if(username == "" &&  email == "" && pass == "" && cpass == ""){
        swal(
            'Opps..!',
            'input field has no value!',
            'error'
        );
        // return false;  
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
           swal(
            'Opps..!',
            'Password not matching!',
            'error'
                
            );
             
        }
        else
        {
            swal(
                'Good job!',
                'Register successful!',
                'success'
                
            );
        window.location.href = "login.html";
        }
           
            
    }
    else
    {
        swal(
            'Opps..!',
            'Input mim six digit password!',
            'error'
           
            );
            
    }
    }


}