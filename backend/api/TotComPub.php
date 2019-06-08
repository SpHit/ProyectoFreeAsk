<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");

$con = conexion();

$comentarios = mysqli_query($con, "SELECT COUNT(ComentarioId) from Comentario");

while($resultado = mysqli_fetch_array($comentarios))
{
    $datos[] = $resultado;
}
$json = json_encode($datos);

echo $json;

header('Content-Type: application/json');
?>