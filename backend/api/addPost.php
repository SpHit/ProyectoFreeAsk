<?php

require("conexion.php");
$conexion = conexion();

$recibo_json = file_get_contents('php://input');
$parametros = json_decode($recibo_json);

$fecha_post = date('Y-m-d H:i');

$NomUsuario = $parametros->Texto;
if (strpos($NomUsuario, '||') !== false){
    $usuariopartes = explode("||", $NomUsuario);
    $NomUsuario = $usuariopartes[0];
    $Texto = $usuariopartes[1];
}else{
    $NomUsuario = $parametros->NomUsuario;
    $Texto = $parametros->Texto;
}


if(!mysqli_query($conexion, "INSERT INTO Post (Texto, Sexo, Fecha, NombreUsuario, Moderado, IdCategoria) VALUES ('$Texto', '$parametros->Sexo', '$fecha_post', '$NomUsuario', 0, '$parametros->IdCategoria')")){
    echo "Error : " . mysqli_error($conexion);
}

echo json_encode("publicado");

header('Content-Type: application/json');
?>