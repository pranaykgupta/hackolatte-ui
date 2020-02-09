<!DOCTYPE html>
<html lang="en">
<?php
  session_start();
  ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UIDAI | Details</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/main.css">
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">UIDAI</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item pull-right">
                <a class="nav-link" href="showusercat.html">Categories</a>
            </li>
            <li class="nav-item pull-right">
                <a class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container con">
        <h3 class="mb-3 text-center" id="main_title"></h3>
        <div class="list-group" id="main_content">
            <a href="#" class="list-group-item list-group-item-action mb-3">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Name: <?php echo $_SESSION['name']; ?></h5>     
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mb-3">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Date of Birth: <?php echo $_SESSION['dob']; ?></h5>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Permanent Address: <?php echo $_SESSION['p_address']; ?></h5>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Current Address: <?php echo $_SESSION['c_address']; ?></h5>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phone Number: <?php echo $_SESSION['phone_number']; ?></h5>
                </div>
              </a>
          </div>
    </div>
    <script src="./showcatd.js"></script> 
    <!-- <script type="text/javascript">
      if(sessionStorage.getItem('access_token') == null){
        window.location.href = './login.html';
      }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>