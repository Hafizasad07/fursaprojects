<?php
   require 'vendor/autoload.php';
   use PHPMailer\PHPMailer\PHPMailer;

   $mail = new PHPMailer;
   $mail->isSMTP();
   $mail->SMTPDebug = 2;
   $mail->Host = 'smtp.gmail.com';
   $mail->Port = 587;
   $mail->SMTPAuth = true;
   $mail->Username = 'hafizasadrafique@gmail.com';
   $mail->Password = 'wkvaysiiydxdtdvs';
   extract($_GET);
   $mail->setFrom('hafizasadrafique@gmail.com', "");
    $mail->addAddress('fursaprojects@gmail.com', 'Fursaprojects');
   $mail->isHTML(true);   
   $mail->Body = "<h2> Contact Form </h2> <b>Name: </b>" .$name .  "<br><b>Email: </b>" . $email . "<br><b>Whatsapp: </b>" . $number . "<br><b>Program: </b>" . $program. "<br><b>Date: </b>" . $date. "<br><b>Message: </b>" . $message;
   if (!$mail->send()) {
       echo 'Mailer Error: ' . $mail->ErrorInfo;
   } else {
        ob_end_clean();
       echo 'The email massage was sent.';
   }
   
?>