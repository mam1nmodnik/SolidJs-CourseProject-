<?php 
session_start();
@include('connect.php');
require_once 'connect.php';
@include('phpmailer/PHPMailerAutoload.php');
if (!$connect) {
  die("Connection failed: " . mysqli_connect_error());
}
header('Content-Type: application/json');


$name_user = $_POST['name_user'] ?? '';
$age_user = $_POST['age_user'] ?? '';
$familiya_user = $_POST['familiya_user'] ?? '';
$otchestvo_user = $_POST['otchestvo_user'] ?? '';
$email_user = $_POST['email_user'] ?? '';
$notification = '../img/Ellipse 965.svg';
$currentTime = time();

$date = date("Y-m-d", $currentTime);
$time = date("H:i:s", $currentTime);
// echo json_encode($time);
if ($_FILES['photo_user']['error'] == UPLOAD_ERR_OK) {

  $path = 'uploads/' . time() . $_FILES['photo_user']['name'];
  $tmp_name = $_FILES['photo_user']['tmp_name'];
  if(!move_uploaded_file($tmp_name, '../' . $path)){
    header('Location: volunteerUniform.php');
  }

  mysqli_query($connect, "INSERT INTO `volunteerUniform` (`volunteerUniform_id`, `name_user`, `familiya_user`, `otchestvo_user`, `age_user`, `email_user`, `photo_user`, `notification`, `date`, `time`, `currentTime`) VALUES (NULL, '$name_user', '$familiya_user', '$otchestvo_user', '$age_user', '$email_user', '$path', '$notification', '$date', '$time', '$currentTime')");

 if (!mysqli_query($connect, $query)) {
      die("Error: " . mysqli_error($connect));
    }
  
}else{

  mysqli_query($connect, "INSERT INTO `volunteerUniform` (`volunteerUniform_id`, `name_user`, `familiya_user`, `otchestvo_user`, `age_user`, `email_user`, `photo_user`, `notification`, `date`, `time`, `currentTime`) VALUES (NULL, '$name_user', '$familiya_user', '$otchestvo_user', '$age_user', '$email_user', NULL, '$notification', '$date', '$time', '$currentTime')");
  if (!mysqli_query($connect, $query)) {
    die("Error: " . mysqli_error($connect));
  }

}






// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';
// //$mail->SMTPDebug = 3;                               // Enable verbose debug output
// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'danil_serebro2004@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = '3T2pz0gNQtsD90p8aw2v'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

// $mail->setFrom('danil_serebro2004@mail.ru'); // от кого будет уходить письмо
// $mail->addAddress($email);     // Кому будет уходить письмо 
// //$mail->addAddress('ellen@example.com');               // Name is optional
// //$mail->addReplyTo('info@example.com', 'Information');
// //$mail->addCC('cc@example.com');
// //$mail->addBCC('bcc@example.com');
// //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
// $mail->isHTML(true);                                  // Set email format to HTML
// $mail->Subject = 'Спасатели ТСПК';
// $mail->Body    = 'Спасибо, что решились нам помочь. ' .  $familiya_user . ' ' . $name_user . ' ' . $otchestvo_user .' Ждем вас по адресу: г. Тольятти, ул. Мурысева, 84;';
// $mail->AltBody = '';

// if(!$mail->send()) {

//   $response = [
//     "status" => false, 
//     "message" => 'ошибка',
    
//   ];

//   echo json_encode($response);

// }





?>

<pre>
<?php 

print_r($name_user . ' ' . $familiya_user . ' ' . $otchestvo_user . ' ' . $age_user . ' ' . $email_user . ' ' . $_FILES['photo_user']['tmp_name']);
?>
</pre>