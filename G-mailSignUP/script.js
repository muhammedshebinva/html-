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
