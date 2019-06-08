<?php

require("conexion.php");
$conexion = conexion();

$recibo_json = file_get_contents('php://input');
$parametros = json_decode($recibo_json);

$fecha_comentario = date('Y-m-d H:i');

$texto = $parametros->Texto;
$idpost = $parametros->PostId;
$nombre = $parametros->UsuarioNombre;
$idpost = $parametros->PostId;

$obtener_id = mysqli_query($conexion, "SELECT UsuarioId FROM Usuario WHERE Nombre='$nombre'");

while ($resultado = mysqli_fetch_array($obtener_id)){
    $idusuario = $resultado[0];
}

if (!mysqli_query($conexion, "INSERT INTO Comentario(Texto, Fecha, IdUsuario, IdPost) VALUES ('$texto', '$fecha_comentario', '$idusuario', '$idpost')")){
    echo "Error : " . mysqli_error($conexion);
}

echo json_encode("comentado");

header('Content-Type: application/json');

?>