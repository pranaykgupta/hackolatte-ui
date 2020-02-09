<?php
	session_start();

	$url = 'http://192.168.137.220:3000/uidai/getRequests';
    $ch = curl_init($url);
    $data = array(
    'access_token' => $_SESSION['access_token'],
    'admin_email' => $_SESSION['admin_email']
    );
    $payload = http_build_query($data);

    curl_setopt($ch, CURLOPT_POST, true);
    //attach encoded JSON string to the POST fields
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    //return response instead of outputting
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //execute the POST request
    $result = curl_exec($ch);
    //close cURL resource
    curl_close($ch);
	// echo $result;
	$response = json_decode($result,true);
	   

    if($response['status'] == 202){
        foreach($response['requests'] as $key){
            
            // echo $key['id'];
            
            // echo '<br>';
            
            echo '<a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">UID:';
              echo $key['request_maker'];
            echo '</h5><p>';
              echo date('r', $key['request_time']);
              echo '</p>         
            </div>
            <form action="getthisurl.php" method="POST">
            <input hidden name="r_key" type="text" value="';
            echo $key['id'];
            echo '">
            <button class="btn btn-primary" type="submit" >Respond</button>
            </form>
          </a>
            ';
        }
        $_SESSION['msg'] = $response['messages'];
    }else if($response['status']== 400){
        $_SESSION['msg'] = $response['messages'];
        echo 'No data found';
    }
    
				 
?>