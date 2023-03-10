<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
        session_start(); //Inicio la sesion
        //Variables
        $id = $_GET['id'];// id de la URL

       
        if((filter_var($id,FILTER_VALIDATE_INT)) and ($id % 2 == 0)  ) //Valido que id sea entera y par
        {
            if(($id >= 2) and ($id <= 10)) //Valido que id este entre 2 y 10
            {
                $i = count((array)$_SESSION['arrayId']);
                $i++;
                $_SESSION['arrayId'][$i] = array();//Sesion para el guardado de ids
                
                $_SESSION['arrayId'][$i] = $id; //Guado el id en un array de sesion
            }
        }
        foreach ($_SESSION['arrayId'] as $ids => $valor) 
        {
            echo "<p>".$valor."</p>";
        }


    ?>

</body>
</html>