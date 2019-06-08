<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$conexion = conexion();

$recibo_json = file_get_contents('php://input');
$parametros = json_decode($recibo_json);

$inicio_sesion=mysqli_query($conexion,"SELECT Contraseña, Nombre, UsuarioId from Usuario");
while($query=mysqli_fetch_array($inicio_sesion)){
  if($query['Nombre']==$parametros->usuario){
    if($parametros->pass==$query['Contraseña']){
      session_start();
      $_SESSION['nombre']=$parametros->usuario;
      $_SESSION['contraseña']=$parametros->pass;
      $_SESSION['id']=$query['UsuarioId'];
      setcookie("usuarioConectado",$_SESSION['id']);
    }else{
      setcookie("fallo","Contraseña incorrecta",time()+20);
    }
  }
}
print_r($query);
header('Content-Type: application/json');
$devolver = json_encode($_SESSION);
echo $devolver;

?>