// import FormData from 'form-data';
// $('document').ready(
//     $.ajax({
//         type: "GET",

//     })
// );
function give_msg(message) {
  $("#msg")
    .html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
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

$("#login_sub").on("click", function(event) {
  if ($("#email_id").val() == "") {
    give_msg("Please enter your email address.");
  } else if ($("#pass").val() == "") {
    give_msg("Please enter your password.");
  } else if (validateEmail($("#email_id").val()) == false) {
    give_msg("Enter valid email id!");
  } else {
    let email = $("#email_id").val();
    let password = $("#pass").val();

    // const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // let data = {
    //   email: email,
    //   password: password
    // };
    // console.log(data);
    // let datastr = JSON.stringify(data);
    // console.log(datastr);
    fetch("http://192.168.137.220:3000/hospi/login", {
      method: "POST",
      mode: "no-cors",
      headers: myHeaders,
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
// $.ajax({
//   type: "POST",
//   crossDomain: true,
//   dataType: "jsonp",
//   url: "http://192.168.137.220:3000/hospi/login",
//   data: {
//     email: email,
//     password: password
//   },
//   success: function(datas) {
//     datas = JSON.parse(datas);
//     console.log(datas);
// if (data["status"] == 202) {
//   // setting session variables
//   sessionStorage.message = data["message"];
//   sessionStorage.access_token = data["access_token"];
//   sessionStorage.admin_email = data["email"];
//   // and redirecting to work page
//   window.location.href = "show.html";
// } else if (data["status"] == 401 || data["status"] == 422) {
//   give_msg(data["message"]);
// }
//       }
//     });
//   }
// });

/*$("#add_new").on("click", function(event) {
  let doc_number = $("#doc_id").val();
  let birth_cer = $("#birth_certificate").val();
  let parent_name = $("#parentName").val();
  let parent_email = $("#parentEmail").val();
  let phone_no = $("#phone_no").val();
  let admin_email = sessionStorage.getItem("admin_email");
  let access_token = sessionStorage.getItem("access_token");
  if (doc_number == "") {
    give_msg("Enter Doctor Licence Number");
  } else if (!birth_cer) {
    give_msg("Choose file as birth certificate");
  } else if (parent_name == "") {
    give_msg("Enter Parent Name");
  } else if (parent_email == "") {
    give_msg("Enter parent's email");
  } else if (validateEmail(parent_email) == false) {
    give_msg("Enter a valid parent's email");
  } else if (!phone_no) {
    give_msg("Enter phone number");
  } else {
 

    /*jQuery.each(jQuery("#file")[0].files, function(i, file) {
      fl.append("file-" + i, file);
    });
    $.ajax({
      type: "POST",
      url: "login_route.php",
      data: {
        access_token: access_token,
        admin_email: admin_email,
        doc_number: doc_number,
        birth_cer: fl,
        parent_name: parent_name,
        parent_email: parent_email,
        phone_no: phone_no
      },
      success: function(data) {
        data = JSON.parse(data);
        if (data["status"] == 202) {
          sessionStorage.message = data["message"];
          window.location.href = "./show.html";
        } else if (data["status"] == 404 || data["status"] == 401) {
          give_msg(data["message"]);
        }
      }
    });
  }
});*/

// var addbtn = document.getElementById('add_new');
// addbtn.addEventListener('click',function(){

// });

/*function loginSubmit(email,password){
  var formData = new FormData();

  formData.set("email", "abc3@gmail.com");
  formData.set("password", "11111111");

  var request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("POST", "http://localhost:3000/hospi/login");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(formData);
  console.log(request.response);
}*/

/*function loginSubmit() {
  const formData = new FormData();
  // const fileField = document.getElementById("login_sub");

  formData.append("email", "abc3@gmail.com");
  // formData.append('avatar', fileField.files[0]);
  formData.append("password", "11111111");

  fetch("http://localhost:3000/hospi/login", {
    method: "POST",
    mode: "no-cors",
    body: formData,
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  })
    // .then(response => response.json())
    .then(result => {
      console.log("Success:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}*/

$("#add_new").on("click", function(event) {
  let doc_number = $("#doc_id").val();

  // let birth_cer = $("#birth_certificate").val();
  let parent_name = $("#parentName").val();
  let parent_email = $("#parentEmail").val();
  let phone_no = $("#phone_no").val();
  let names = $("#names").val();
  let dob = $("#dob").val();
  let parent_address = $("#parentAddress").val();
  let admin_email = sessionStorage.getItem("admin_email");
  let access_token = sessionStorage.getItem("access_token");

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
