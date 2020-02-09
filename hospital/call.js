
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


$("#add_new").on("click", function(event) {
  let doc_number = $("#doc_id").val();

  // let birth_cer = $("#birth_certificate").val();
  let parent_name = $("#parentName").val();
  let parent_email = $("#parentEmail").val();
  let phone_no = $("#phone_no").val();
  let names = $("#names").val();
  let dob = $("#dob").val();
  let parent_address = $("#parentAddress").val();
  let admin_email = $("#admin_email").val();
  let access_token = $("#access_token").val();

  let fileSelect = document.getElementById("birth_certificate");
  let filess = "";
  if (fileSelect.files && fileSelect.files.length == 1) {
    filess = fileSelect.files[0];
  } else {
    filess = "nothing";
  }

  if (doc_number == "") {
    give_msg("Enter Doctor Licence Number");
  } else if (parent_name == "") {
    give_msg("Enter Parent Name");
  } else if (parent_address == "") {
    give_msg("Enter Parent Address");
  } else if (parent_email == "") {
    give_msg("Enter parent's email");
  } else if (validateEmail(parent_email) == false) {
    give_msg("Enter a valid parent's email");
  } else if (!phone_no) {
    give_msg("Enter phone number");
  } else if (!names) {
    give_msg("Enter Name");
  } else if (!dob) {
    give_msg("Enter Date of Birth");
  } else if (filess == "nothing") {
    give_msg("No files selected");
  } else {
    const formData = new FormData();

    formData.append("admin_email", admin_email);
    formData.append("access_token", access_token);
    formData.append("doctor_number", doc_number);
    formData.append("file", filess);
    formData.append("parent", parent_name);
    formData.append("email", parent_email);
    formData.append("address", parent_address);
    formData.append("phone", phone_no);
    formData.append("name", names);
    formData.append("dob", dob);
    give_msg("Successfully Uploaded");
    /*const formData = new FormData();

  let fileSelect = document.getElementById("birth_certificate");
  let filess = "";
  if (fileSelect.files && fileSelect.files.length == 1) {
    filess = fileSelect.files[0];
  } else {
    filess = "nothing";
  }
  console.log(filess);
  formData.append("admin_email", "abc3@gmail.com");
  formData.append(
    "access_token",
    "$2a$12$Gc9DjXO5WXh/bDpQYt0Hwur3mXScsvtb3rMcQn6AzNWf8qybOHz1S"
  );
  formData.append("doctor_number", "9898989898");
  formData.append("file", filess);
  formData.append("parent", "MR. 3rd");
  formData.append("email", "abc3@gmail.com");
  formData.append("address", "house no.7, patna");
  formData.append("phone", "9999999999");
  formData.append("name", "name3");
  formData.append("dob", "18/12/2019");*/

    fetch("http://192.168.137.220:3000/hospi/generate", {
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
  }
});

$("#add_report").on("click", function(event) {
  let doc_number = $("#doc_id").val();
  let admin_email = $("#admin_email").val();
  let access_token = $("#access_token").val();
  let type = $('#type').val();
  let uid = $('#uid').val();

  let fileSelect = document.getElementById("reciept");
  let filess = "";
  if (fileSelect.files && fileSelect.files.length == 1) {
    filess = fileSelect.files[0];
  } else {
    filess = "nothing";
  }

  if (doc_number == "") {
    give_msg("Enter Doctor Licence Number");
  }else if (filess == "nothing") {
    give_msg("No files selected");
  } else {
    const formData = new FormData();

    formData.append("admin_email", admin_email);
    formData.append("uid", uid);
    formData.append("access_token", access_token);
    formData.append("doctor_number", doc_number);
    formData.append("file", filess);
    formData.append("type", type);
   
    give_msg("Successfully Added");
    /*const formData = new FormData();

  let fileSelect = document.getElementById("birth_certificate");
  let filess = "";
  if (fileSelect.files && fileSelect.files.length == 1) {
    filess = fileSelect.files[0];
  } else {
    filess = "nothing";
  }
  console.log(filess);
  formData.append("admin_email", "abc3@gmail.com");
  formData.append(
    "access_token",
    "$2a$12$Gc9DjXO5WXh/bDpQYt0Hwur3mXScsvtb3rMcQn6AzNWf8qybOHz1S"
  );
  formData.append("doctor_number", "9898989898");
  formData.append("file", filess);
  formData.append("parent", "MR. 3rd");
  formData.append("email", "abc3@gmail.com");
  formData.append("address", "house no.7, patna");
  formData.append("phone", "9999999999");
  formData.append("name", "name3");
  formData.append("dob", "18/12/2019");*/

    fetch("http://192.168.137.220:3000/hospi/addReport", {
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
  }
});

