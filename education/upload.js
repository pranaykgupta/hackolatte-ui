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

function doSubmit() {
  let uid = $("#education_uid").val();
  let type = $("input[name='education_certificate_type_radio']:checked").val();

  var fileSelect = document.getElementById("education_certificate");
  let filess = "";
  if (fileSelect.files && fileSelect.files.length == 1) {
    filess = fileSelect.files[0];
  } else {
    filess = "nothing";
  }
  if (!uid && !type) {
    var formData = new FormData();
    formData.append("access_token", "");
    formData.append("uid", uid);
    formData.append("type", type);
    formData.append("edu_cert", filess);

    fetch("http://192.168.137.220:3000/edu/addQualification", {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
      .then(result => {
        console.log("Success:", result.body);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    alert("Enter values");
  }
}
