// login function

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const Name = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;


    // let's get value in localstorage which store user in registration field
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if( Name== "" && pass == ""){
        swal(
            'Opps..!',
            'input field has no value!',
            'error'
        );
       
    }
    else
    {
        if(Name == username && pass ==password ){
            swal(
            'Good job!',
           'login successful!',
           'success'
              
            );
            window.location.href = "home.html";
            
        }
        else {
           swal(
           'Opps..!',
            'Something is wrong!',
            'error'
              
            );
            
        }
    }


};