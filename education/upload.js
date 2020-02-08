// $('#education_upload_button').on('click',function(event){
//   let uid = $('#education_uid').val();
//   let type = $("input[name='education_certificate_type_radio']:checked").val();
//   alert(uid+type);
//   $.ajax({
//       type: "POST",
//       url: "upload_route",
//       data: {
//           uid:uid,
//           type=type
//       },
//       success: function(data){
//           data = JSON.parse(data);
//           if(data['status']==200){
//               // setting session variables
//               // and redirecting to work page
//               alert('success');
//           }else if(data['status'] == 400){
//               alert('failure');
//           }
//       }
//   });
// });

function doSubmit(){

  let uid = $('#education_uid').val();
  let type = $("input[name='education_certificate_type_radio']:checked").val();
  
  // Form Data
  var formData = new FormData();

  var fileSelect = document.getElementById("education_certificate");
  if(fileSelect.files && fileSelect.files.length == 1){
   var file = fileSelect.files[0]
   formData.set("file", file , file.name);
   formData.set("uid", uid );
   formData.set("type", type);
   alert(uid+type+file.name);

   // Http Request  
   var request = new XMLHttpRequest();
  //  request.responseType = 'json';
   //request.open('POST', "http://localhost:8080/testMultipart");
   //request.send(formData);
   //console.log(request.response);
  }
  else{
    alert('No file selected');
  }
}