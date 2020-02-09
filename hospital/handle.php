<?php
	session_start();

	$url = 'http://192.168.137.220:3000/hospi/login?email=abc3@gmail.com&password=11111111';
    $ch = curl_init($url);
    //return response instead of outputting
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //execute the POST request
    $result = curl_exec($ch);
    //close cURL resource
    curl_close($ch);
	echo $result;
	$response = json_decode($result,true);
	   

    if($response['status'] == 202){
        $_SESSION['access_token'] = $response['access_token'];
        $_SESSION['msg'] = $response['messages'];
        $_SESSION['email'] = $response['email'];
        header("location: ./option.php");
    }
    
				 
?>