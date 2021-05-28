<meta charset="UTF-8" />
<?php
$your_name = htmlspecialchars($_POST["name"]);
$phone_number = htmlspecialchars($_POST["phone"]);
$product = htmlspecialchars($_POST["product"]);
$size= htmlspecialchars($_POST["size"]);
$price= htmlspecialchars($_POST["price"]);
$tema="Callback me!!!";
$from="From  landing page";

$myemail = "admin@apptemp.fun";

$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Вас просят перезвонить:

Имя отправителя: $your_name 
Номер телефона: $phone_number 

Конец";

mail($myemail, $tema, $message_to_myemail, "Content-type:text/plain; charset = UTF-8\r\nFrom:$from");?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="../">Главную >>></a></p>