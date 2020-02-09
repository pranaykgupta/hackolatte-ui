<?php
   session_start();
   
   if($_SERVER["REQUEST_METHOD"]=="POST"){
    $headers = [
        'X-Apple-Tz: 0',
        'X-Apple-Store-Front: 143444,12',
        'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding: gzip, deflate',
        'Accept-Language: en-US,en;q=0.5',
        'Cache-Control: no-cache',
        'Content-Type: application/x-www-form-urlencoded; charset=utf-8',
        'Host: www.example.com',
        'Referer: http://www.example.com/index.php', //Your referrer address
        'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0',
        'X-MicrosoftAjax: Delta=true'
    ];

    $post = [
        'email' => 'abc3@gmail.com',
        'password' => '11111111'
    ];
    $ch = curl_init('http://192.168.137.220:3000/hospi/login');
    // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

    // // execute!
    // $response = curl_exec($ch);

    // // close the connection, release resources used
    // curl_close($ch);

    // // do anything you want with your response
    // var_dump($response);


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
	echo $result;
   }
?>