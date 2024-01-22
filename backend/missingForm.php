<?php 
session_start();
@include('connect.php');
require_once 'connect.php';

if (!$connect) {
  die("Connection failed: " . mysqli_connect_error());
}
header('Content-Type: application/json');


$nameMissing = $_POST['nameMissing'] ?? '';
$age = $_POST['age'] ?? '';
$sings = $_POST['signs'] ?? '';
$nameApplicant = $_POST['nameApplicant'] ?? '';
$email = $_POST['email'] ?? '';

  mysqli_query($connect, "INSERT INTO `newMailEntry` (`id`, `age`, `sings`, `nameApplicant`, `email`, `nameMissing`) VALUES (NULL, '$age', '$sings', '$nameApplicant', '$email', '$nameMissing')");
    if (!mysqli_query($connect, $query)) {
      die("Error: " . mysqli_error($connect));
    }
  echo json_encode(true)
?>

<pre>
<?php 
?>
</pre>