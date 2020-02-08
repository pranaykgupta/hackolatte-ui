function test() {
  var formData = new FormData();

  formData.set("email", "abc3@gmail.com");
  formData.set("password", "11111111");

  var request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("POST", "http://192.168.137.220:3000/hospi/login");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(formData);
  console.log(request.response);
}
