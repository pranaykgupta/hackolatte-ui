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
    let doc_name = $('#doc_id').val();
    let birth_cer = $('#birth_certificate').val();
    let parent_name = $('#parentName').val();
    let parent_email = $('#parentEmail').val();
    let phone_no = $('#phone_no').val();
    $.ajax({
        type: "GET",
        url: 'add_route',
        data: {
            doc_name: doc_name,
            birth_cer: birth_cer,
            parent_name: parent_name,
            parent_email: parent_email,
            phone_no: phone_no
        },
        success: function(data){
            data = JSON.parse(data);
            if(data['status'] == 200){
                var userName = "Shekhar Shete";
                '<%Session["UserName"] = "' + userName + '"; %>';
                window.location.href = "./main.html";
                
            }else if(data['status'] == 400){
                $('#msg').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>${data['message']}</strong> You should check in on some of those fields below.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>`);
            }	
        }
    })
});

// var addbtn = document.getElementById('add_new');
// addbtn.addEventListener('click',function(){

// });
