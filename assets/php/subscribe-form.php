<?

// Field Email
$email = $_POST['entry.371138634'];
// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {echo '<div class="alert error">Please enter a valid email address.</div>';exit();}

$headers = "From: <$email>\r\n";
mail('hello@irvinefrank.com');
echo "1";
?>
