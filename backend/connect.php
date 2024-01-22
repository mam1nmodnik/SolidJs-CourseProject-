<?php

$connect = mysqli_connect('localhost', 'root', '', 'localhost');
if(!$connect){
    die('Error connect to database');
}

define("TIME_ACTIVE_LINK", 60);