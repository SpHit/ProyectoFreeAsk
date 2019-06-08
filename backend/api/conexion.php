<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('host', 'db4free.net');
define('usuario','proyecto');
define('pass', 'ChangeData?');
define('db','proyecto_prueba');

function conexion()
{
  $conectar = mysqli_connect(host ,usuario ,pass ,db);
  if (mysqli_connect_errno($conectar)) {
    die("Error al conectar: $host" . mysqli_connect_error());
  }
  mysqli_set_charset($conectar, "utf8");
  return $conectar;
}
$con = conexion();

?>