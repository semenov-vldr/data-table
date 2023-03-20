<?php

    $data = file_get_contents("php://input");

    $json = json_decode($data, true);

    $error = json_last_error();

    ($error === JSON_ERROR_NONE) ? print_r ("True") : print_r ("False");

?>
