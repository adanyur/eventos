<?php

$servidorbd = "PgSQL2.clinicasantaisabel.com";
$usuario = "admpgsql";
$clave = "9+8+7ab*";
$bd = "bd_isis";
$enlace = pg_connect("host=".$servidorbd." port= 5432"." dbname=".$bd." user=".$usuario." password=".$clave) or die("existio un error al intentar conectarse al servidor de base de datos");

$nombre = $_REQUEST['nombre'];
$apellido = $_REQUEST['apellido'];
$documento = $_REQUEST['documento'];
$celular = $_REQUEST['celular'];
$correo = $_REQUEST['correo'];
$iafas = $_REQUEST['empresa'];
$clinica = $_REQUEST['clinica'];

$errors = [];
$data = [];

if (empty($_REQUEST['nombre'])) {
    $errors['nombre'] = 'Nombre is required.';
}

if (empty($_REQUEST['apellido'])) {
    $errors['apellido'] = 'Apellido is required.';
}

if (empty($_REQUEST['documento'])) {
    $errors['documento'] = 'Document is required.';
}

if (empty($_REQUEST['celular'])) {
    $errors['celular'] = 'Celular is required.';
}

if (empty($_REQUEST['correo'])) {
    $errors['correo'] = 'Correo is required.';
}

if (empty($_REQUEST['empresa'])) {
    $errors['empresa'] = 'Empresa is required.';
}

if (empty($_REQUEST['clinica'])) {
    $errors['clinica'] = 'Clinica is required.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
    
    $SQL = "INSERT INTO eventos (nombres,apellidos,documento,celular,correo,empresa,clinica) 
        VALUES ('$nombre','$apellido','$documento','$celular','$correo','$iafas','$clinica')";
    pg_exec($SQL);
}

echo json_encode($data);


?>