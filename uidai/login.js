function give_msg(message){
    $('#msg').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${message}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`);
    return;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  
  $('#login_sub').on('click',function(event){
    if($('#email_id').val() == ''){
      give_msg('Please enter your email address.');
    }else if($('#pass').val() == ''){
      give_msg('Please enter your password.');
    }else if(validateEmail($('#email_id').val()) == false){
      give_msg("Enter valid email id!");
    }
    else{
      const formData = new FormData();
      let email = $('#email_id').val();
      let password = $('#pass').val();
      const url = "http://192.168.137.220:3000/uidai/login";
      formData.append("email", email);
      formData.append("password", password);
      // const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      fetch(url, {
      method: "POST",
      // headers: myHeaders,
      mode: "no-cors",
      body: formData
      })
      .then(result => {
        console.log("Success:", result);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  });