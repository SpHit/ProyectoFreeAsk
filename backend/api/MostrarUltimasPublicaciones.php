<?php

require("conexion.php");
$conexion = conexion();
$publicaciones = mysqli_query($conexion, "SELECT p.*, c.Nombre AS NomCategoria FROM Post AS p INNER JOIN Categoria AS c ON c.CategoriaId = p.IdCategoria WHERE p.Moderado = 1 ORDER BY p.Fecha DESC");

$datos;
while ($resultado = mysqli_fetch_array($publicaciones))
{
    $datos[] = $resultado;
}

$json = json_encode($datos);

header('Content-Type: application/json');
echo $json;
exit();
?>