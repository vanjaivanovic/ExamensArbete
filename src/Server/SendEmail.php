<?php
header("Access-Control-Allow-Origin: *");
header("content-type:application/json");
	$contactFormInfo = json_decode(file_get_contents('php://input'));
	$array = json_decode(json_encode($contactFormInfo), True);

	$to = "vanja.i@hotmail.com";
	$headers =  $array['userEmail'];

	$subject = "Message from visitor: " . $array['userName'];
	$message = $array['userMessage'];


mail($to,$subject,$message,$headers);

?>