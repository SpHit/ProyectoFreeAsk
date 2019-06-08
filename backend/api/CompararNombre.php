<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$conexion = conexion();

$recibo_json = file_get_contents('php://input');
$parametros = json_decode($recibo_json);

$nombre = $parametros->nombre;

$query = mysqli_query($conexion, "SELECT Nombre FROM Usuario WHERE Nombre='$nombre'");

while ($resultado = mysqli_fetch_array($query)){
    $datos[] = $resultado;
}
if (empty($datos)){
    $datos[] = '{"Nombre : null"}';
}
$json = json_encode($datos);

header('Content-Type: application/json');

echo $json;



?>