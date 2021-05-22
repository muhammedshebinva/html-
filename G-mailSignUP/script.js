function showPassword() {
    var x = document.getElementById("password-inp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

    var y=document.getElementById("confirm-password");

    if(y.type==="password"){
        y.type="text";
    }else{
        y.type="password"
    }
  }

  $(document).ready(function(){
    $('#signup-form').validate({
      rules:{
        fname:{
          required:true,
          
        },
        lname:{
          required:true,
        },
        password:{
          required:true,
          minlength:8

        },
        password_confirm:{
          required:true,
          minlength:8,
          equalTo: "#password-inp"
        }

      }
    })
  })
