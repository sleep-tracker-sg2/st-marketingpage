<?php
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ){

	$error = FALSE;

	if(!filter_var($_POST['e'],FILTER_VALIDATE_EMAIL) === FALSE){
      $e = $_POST['e'];
    }else{
      $error = TRUE;
    }
    
    	if($_POST['m'] == ''){
    	$error = TRUE;
    	}else{
	$m = nl2br($_POST['m']);
    	}
    	
    	if($_POST['n'] == ''){
    	$error = TRUE;
    	}else{
	$n = $_POST['n'];
    	}


	$to = "kamaboko_netflix@yahoo.com";	
	$from = $e;
	$subject = 'Inquery for company name';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";


	if(!$error == TRUE){
		 ( mail($to, $subject, $message, $headers) );
		echo "success";
	} else {
		echo "Error! Please check input.";
	}
  }
?>