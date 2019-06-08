<?php

require("conexion.php");
$conexion = conexion();
$comentarios = mysqli_query($conexion, "SELECT c.*, u.Nombre as UsuarioNombre FROM Comentario as c INNER JOIN Usuario as u on u.UsuarioId=c.IdUsuario ORDER BY c.Fecha DESC;");

while ($resultado = mysqli_fetch_array($comentarios))  
  {
    $datos[] = $resultado;
  }

$json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
echo $json; // MUESTRA EL JSON GENERADO
  
header('Content-Type: application/json');

?>