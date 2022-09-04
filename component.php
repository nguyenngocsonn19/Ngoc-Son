<?php

function component($productname,$productprice,$productimg,$productid){
     $element ="
          <div class=\"col-md-3 col-sm-6 my-3 my-md-0\">
            <form action=\"products.php\" method=\"post\">
                <div class=\"cart shadow\">
                    <div>
                        <img src=\"$productimg\" alt=\"Image1\" class=\"img-fluid cart-img-top\">

                    </div>
                    <div class=\"card-body\"></div>
                        <h5 class=\"card-title\">$productname</h5>
                        <h6>
                            <i class=\"fas fa-star\"></i>
                            <i class=\"fas fa-star\"></i>
                            <i class=\"fas fa-star\"></i>
                            <i class=\"fas fa-star\"></i>
                            <i class=\"fas fa-star\"></i>
                        </h6>
                    <p class=\"card-text\">
                       Chứng nhận hệ thống an toàn thực phẩm (FSSC 22000)
                    </p>
                    <h5>
                        <small><s>50.000VNĐ</s></small>
                        <span class=\"price\">$productprice VNĐ</span>
                    </h5>

                    <button type=\"submit\" class=\"btn btn-warning my-3\" name=\"add\">Thêm vào giỏ hàng<i class=\"fas fa-shopping-cart\"></i></button>
                    <input type='hidden' name='product_id'value='$productid'>
                    

                </div>
            </form>
    </div>
     ";

     echo $element;
}

function cartElement($productimg,$productname,$productprice,$product_id){
    $element = "
    <form action=\"cart.php?action=remove&id=$product_id\" method=\"post\" class=\"cart-items\">
                    <div class=\"border rounded\">
                        <div class=\"row bg-white\">
                            <div class=\"col-md-3 pl-0\">
                                <img src=$productimg alt=\"Image1\" class=\"img-fluid\">
                            </div>
                                <div class=\"col-md-6\">
                                    <h5 class=\"pt-2\">$productname</h5>
                                        <small class=\"text-secondary\">Người bán : Chemms</small>
                                    <h5 class=\"pt-2\">$productprice</h5>
                                    
                                    <button type=\"submit\" class=\"btn btn-danger mx-2\" name=\"remove\">Xóa</button>
                                </div>
                            <div class=\"col-md-3 py-5\">
                                <div>

                                    <button type=\"button\" class=\"btn bg-light border rounded-cricle\"><i class=\"fas fa-minus\"></i></button>
                                    <input type=\"text\" value=\"1\" class=\"form-control w-25 d-inline\">
                                    <button type=\"button\" class=\"btn bg-light border rounded-cricle\"><i class=\"fas fa-plus\"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
    
    ";
    echo $element;
}