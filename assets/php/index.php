<?php,
    $postData = file_get_contents('C:\OpenServer\domains\dist\assets\php\index.php');
    $data = json_decode($postData, true);

    $name = var_dump($data["name"]);

    echo json_encode($name);
?>
