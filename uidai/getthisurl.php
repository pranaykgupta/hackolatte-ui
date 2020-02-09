<?php
	session_start();

	$url = 'http://192.168.137.54:8888/uidai/getTheRequest';
    $ch = curl_init($url);
    $data = array(
    'r_key' => $_POST['r_key']
    );
    $payload = json_encode($data);
    // $payload = http_build_query($data);

    curl_setopt($ch, CURLOPT_POST, true);
    //attach encoded JSON string to the POST fields
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    //return response instead of outputting
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //execute the POST request
    $result = curl_exec($ch);
    //close cURL resource
    curl_close($ch);
	echo $result;
	$response = json_decode($result,true);
	   

    if($response['status'] == 202){
        
        $_SESSION['msg'] = $response['messages'];
    }else if($response['status']== 400){
        $_SESSION['msg'] = $response['messages'];
        echo 'No data found';
    }
    
				 
?>