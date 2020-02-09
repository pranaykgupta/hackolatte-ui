<?php
	session_start();

	$url = 'http://192.168.137.220:3000/user/getState?uid=25deeb56-e47d-4a4b-a1a7-59a10bdadc5c';
    $ch = curl_init($url);
    //return response instead of outputting
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //execute the POST request
    $result = curl_exec($ch);
    //close cURL resource
    curl_close($ch);
	echo $result;
	$res = json_decode($result,true);
	   

    if($res['status'] == 202){
        $response = $res['result'];
        $_SESSION['name'] = $response['name'];
        $_SESSION['dob'] = $response['dob'];
        $_SESSION['p_address'] = $response['p_address'];
        $_SESSION['c_address'] = $response['c_address'];
        $_SESSION['phone_number'] = $response['phone_number'];
        $_SESSION['parent_name'] = $response['parent_name'];
        header("location: ./showcatdetail.php");
    }
    
				 
?>