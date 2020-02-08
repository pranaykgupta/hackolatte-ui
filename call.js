// $('document').ready(
//     $.ajax({
//         type: "GET",

//     })
// );

$('#login_sub').on('click',function(event){
    let email = $('#email_id').val();
    let password = $('#pass').val();
    $.ajax({
        type: "POST",
        url: "login_route",
        data: {
            email: email,
            password: password
        },
        success: function(data){
            data = JSON.parse(data);
            if(data['status']==200){
                // setting session variables
                // and redirecting to work page

            }else if(data['status'] == 400){
                $('#msg').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>${data['message']}</strong> You should check in on some of those fields below.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>`);
            }
        }
    });
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
