<!DOCTYPE html>
<html lang="en">
<?php
  session_start();
  ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hospital | Add </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/main.css">
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>

</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">HOSPITAL</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="./option.php">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="show.html">Show pending requests</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container con">
        <h2 class="mb-5 text-center">Add a persons birth certificate</h2>
        <div id="msg"></div>
        <input type="hidden" value="<?php echo $_SESSION['access_token'];?>" name='access_token' id="access_token" >
        <input type="hidden" value="<?php echo $_SESSION['email'];?>" name='admin_email' id="admin_email" >
        <div class="form-group">
            <label for="doc_id">Doctor License ID</label>
            <input type="text" class="form-control" id="doc_id" >
        </div>
        <div class="form-group">
            <label for="birth_certificate">Birth Certificate</label>
            <input type="file" class="form-control" id="birth_certificate" >
        </div>
        <div class="form-group">
            <label for="names">Name</label>
            <input type="text" class="form-control" id="names" >
        </div>
        <div class="form-group">
            <label for="dob">Parent Name</label>
            <input type="date" class="form-control" id="dob" >
        </div>
        <div class="form-group">
            <label for="parentName">Parent Name</label>
            <input type="text" class="form-control" id="parentName" >
        </div>
        <div class="form-group">
          <label for="parentAddress">Parent Address</label>
          <input type="text" class="form-control" id="parentAddress" >
        </div>
        <div class="form-group">
          <label for="parentEmail">Parent Email address</label>
          <input type="email" class="form-control" id="parentEmail" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="phone_no">Parent Phone number</label>
          <input type="number" class="form-control" id="phone_no">
        </div>
        <button class="btn btn-primary" id="add_new">Submit</button>
    </div>
    <script type="text/javascript">
    
    </script>
    <script src="./call.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>