<?php
header("Access-Control-Allow-Origin: *");
header("content-type:application/json");
	$contactFormInfo = json_decode(file_get_contents('php://input'));
	$array = json_decode(json_encode($contactFormInfo), True);
	$from = $array['userEmail'];
	$to = "catalinapradilla@hotmail.com";
	$name = $array['userName'];
	$message = $array['userMessage'];


mail($from, $to, $name, $message);

?>