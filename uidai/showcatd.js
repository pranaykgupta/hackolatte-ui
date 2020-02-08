let cat = sessionStorage.getItem('category');
let access_token = sessionStorage.getItem('access_token');
let email = sessionStorage.getItem('email');
if(cat == 'personal'){
    $('#main_title').html('Personal Details');
    // $.ajax({
    //     type: "GET",
    //     url: "../hospital/login_route.php",
    //     data: {
    //         access_token: access_token,
    //         email: email,
    //         // and other details as required
    //     },
    //     success: function(res){
    //         res = JSON.parse(res);
    //         if(res['status'] == 202){
    //             res['data'].forEach(e => {
    //                 $('#main_content').append(`
    //                 <a href="#" class="list-group-item list-group-item-action mb-3">
    //                 <div class="d-flex w-100 justify-content-between">
    //                     <h5 class="mb-1">${e['message']}</h5>               
    //                     <button class="btn btn-primary" data-id="12345">Show More</button>
    //                 </div>
    //                 </a>
    //                 `);
    //             });
    //         }
    //     }
    // })
}else if(cat == 'edu'){
    $('#main_title').html('Educational Details');
    // same for edu
}else if(cat == 'health'){
    $('#main_title').html('Health Details');
    // and for health
}else{
    $('#main_content').html('No data found.....');
}

$('.btn.btn-primary').on('click',function(e){
    var field_id = $(this)[0].dataset.id;
    sessionStorage.field_id = field_id;
    window.location.href = './specificdetail.html';
});