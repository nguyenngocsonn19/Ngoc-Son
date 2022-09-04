<?php


//start session
session_start();

require_once ('php/CreateDb.php');
require_once ('./php/component.php');


//create instance of Createdb class
$database = new CreateDb(dbname: "Productdb",tablename: "Producttb");

if (isset($_POST['add'])){

    if (isset($_SESSION['cart'])){

        $item_array_id= array_column($_SESSION['cart'],'product_id');

        if (in_array($_POST['product_id'],$item_array_id)) {
            echo "<script>alert('Sản phẩm đã được thêm vào giỏ hàng..!')</script>";
            echo "<script>window.location='products.php'</script>";
        }else{

            $conut = count($_SESSION['cart']);
            $item_array = array(
                    'product_id'=>$_POST['product_id']
            );

            $_SESSION['cart'][$conut] = $item_array;

        }


    }else{


        $item_array = array(
                'product_id'=>$_POST['product_id']
        );

        //creat new session variable
        $_SESSION['cart'][0] =$item_array;
        print_r($_SESSION['cart']);
    }
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no,intial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Products</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/d49368c597.js" crossorigin="anonymous"></script>
</head>
<body>

<?php
require_once ("php/header.php")
?>

<div class="container">
    <div class="row text-center py-5">
        <?php
       $resulut =$database->getData();
       while ($row = mysqli_fetch_assoc($resulut)){
           component($row['product_name'],$row['product_price'],$row['product_image'],$row['id']);
       }

        ?>
    </div>
</div>



</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>
