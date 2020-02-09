<?php
   session_start();
   
   if($_SERVER["REQUEST_METHOD"]=="POST"){
    $post = [
        'email' => 'abc3@gmail.com',
        'password' => '11111111'
    ];
    $ch = curl_init('http://192.168.137.220:3000/hospi/login');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

    // execute!
    $response = curl_exec($ch);

    // close the connection, release resources used
    curl_close($ch);

    // do anything you want with your response
    var_dump($response);
   }
?>