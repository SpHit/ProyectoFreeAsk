<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$conexion = conexion();

$recibo_json = file_get_contents('php://input');
$parametros = json_decode($recibo_json);

$usuarios = mysqli_query($conexion, "SELECT Nombre FROM Usuario");
$añadir = true;
$error = "";

$nombre = $parametros->nombre;
$email = $parametros->email;
$pass = $parametros->pass;

while($query = mysqli_fetch_array($usuarios)){
  if($query['Nombre']==$nombre){
      $añadir=false;
      $error="Este usuario ya existe!";
  }
}

if ($añadir){
    mysqli_query($conexion,"INSERT INTO Usuario(Nombre, Contraseña, Correo) VALUES('$nombre','$pass','$email')");
    $error="Se ha registrado correctamente";
}

header('Content-Type: application/json');
$return = json_encode($error);
echo $return;
?>