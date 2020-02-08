let field_id = sessionStorage.getItem('field_id');
let cat = sessionStorage.getItem('category');
let access_token = sessionStorage.getItem('access_token');
let email = sessionStorage.getItem('email');
if(cat == 'personal'){
    $('#main_title').html('Personal : '); 
}else if(cat == 'edu'){
    $('#main_title').html('Educational : ');
}else if(cat == 'health'){
    $('#main_title').html('Health : ');
}
// $.ajax({
    //     type: "GET",
    //     url: "../hospital/login_route.php",
    //     data: {
    //         access_token: access_token,
    //         email: email,
    //         id: field_id, 
    //         // and other details as required
    //     },
    //     success: function(res){
    //         res = JSON.parse(res);
    //         if(res['status'] == 202){
    //             res['data'].forEach(e => {
    //                 $('#main_content').append(`
    //                <li class="list-group-item">Doctor Licence Number</li>
    //                 `);
    //             });
    //         }
    //     }
    // })

