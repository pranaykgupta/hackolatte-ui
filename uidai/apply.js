function give_msg(message){
    $('#msg').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${message}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`);
    return;
}

let uid = $('#uidai').val();
let req = $('#updatelist').val();
if(uid == ''){
    give_msg('Please Enter UIDAI');
}else if(req == ''){
    give_msg('Please enter update list');
}else{
    // ajax post request
    $.ajax({
        type: "POST",
        url: "login_route.php",
        data: {
            uid: uid,
            request: req
        },
        success: function(data){
            data = JSON.parse(data);
            if(data['status']==202){
                // setting session variables
                sessionStorage.message = data['message'];
                // and redirecting to work page
                window.location.href = 'show.html';

            }else if(data['status'] == 401 || data['status'] == 422){
              give_msg(data['message']);
            }
        }
    });
}