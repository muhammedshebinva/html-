$(document).ready(function(){
    $('#login-form').validate({
        rules:{
            uname:{
                required:true,
                minlength:4
            },
            password:{
                required:true,
                minlength:4

            }
        }
    })
})