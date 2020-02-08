import FormData from 'form-data';
// $('document').ready(
//     $.ajax({
//         type: "GET",

//     })
// );
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
    let email = $('#email_id').val();
    let password = $('#pass').val();
    $.ajax({
        type: "POST",
        url: "login_route.php",
        data: {
            email: email,
            password: password
        },
        success: function(data){
            data = JSON.parse(data);
            if(data['status']==202){
                // setting session variables
                sessionStorage.message = data['message'];
                sessionStorage.access_token = data['access_token'];
                sessionStorage.admin_email = data['email'];
                // and redirecting to work page
                window.location.href = 'show.html';

            }else if(data['status'] == 401 || data['status'] == 422){
              give_msg(data['message']);
            }
        }
    });
    }
});

$('#add_new').on('click',function(event){
    let doc_number = $('#doc_id').val();
    let birth_cer = $('#birth_certificate').val();
    let parent_name = $('#parentName').val();
    let parent_email = $('#parentEmail').val();
    let phone_no = $('#phone_no').val();
    let admin_email = sessionStorage.getItem('admin_email');
    let access_token = sessionStorage.getItem('access_token');
    if(doc_number == ''){
      give_msg('Enter Doctor Licence Number');
    }else if(!birth_cer){
      give_msg('Choose file as birth certificate');
    }else if(parent_name == ''){
      give_msg('Enter Parent Name');
    }else if(parent_email == ''){
      give_msg("Enter parent's email");
    }else if(validateEmail(parent_email) == false){
      give_msg("Enter a valid parent's email")
    }else if(!phone_no){
      give_msg('Enter phone number');
    }else{
      var fl = new FormData();
      jQuery.each(jQuery('#file')[0].files, function(i, file) {
          fl.append('file-'+i, file);
      });
    $.ajax({
        type: "POST",
        url: 'login_route.php',
        data: {
            access_token: access_token,
            admin_email: admin_email,
            doc_number: doc_number,
            birth_cer: fl,
            parent_name: parent_name,
            parent_email: parent_email,
            phone_no: phone_no
        },
        success: function(data){
            data = JSON.parse(data);
            if(data['status'] == 202){
                sessionStorage.message = data['message'];
                window.location.href = "./show.html";
                
            }else if(data['status'] == 404 || data['status'] == 401){
                give_msg(data['message']);
            }	
        }
    })
  }
});

// var addbtn = document.getElementById('add_new');
// addbtn.addEventListener('click',function(){

// });
