<?php
session_start();
if(isset($_SESSION['id']))
{
	header("Location:welcome.php");
}
?>
<!DOCTYPE html>
<html>
    <head>
	    <title>TANISHA</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	</head>
	<body>
		<div class="form_box_login">
			<h2>LOGIN</h2>
			<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
			    <div class="input_box">
				    <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
					<input type="text" name="uname"required>
					<label>Username</label>
				</div>
				<div class="input_box">
				    <span class="icon1"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
					<input type="password" name="pass" required>
					<label>Password</label>
				</div>
				<div class="frgt_pswd">
				    <label><input type="checkbox">Remember Me</label>
					<a href="#">Forget Password?</a>
			    </div>
				<button type="submit" name="ook" class="btn">Login Now</button>
				<div class="Register">
				    <p>Don't Have an Account?<a href="#" class="register_link">Register</a></p>
			    </div>
			</form>
			<?php
			    if(isset($_REQUEST['ook']))
				{
					$con=mysqli_connect("localhost","root","","quiz_db");
					$username=$_REQUEST['uname'];
					$password=$_REQUEST['pass'];
					$res=mysqli_query($con,"select * from info_user where email='$username'");
					print_r($res);
					$counts=mysqli_num_rows($res);
					if($counts>=1)
					{
						while($row=mysqli_fetch_array($res))
						{
							if($row['password']==$password)
							{
								$_SESSION['id']=$row['id'];
								header("Location:quiz.php");
							}
							else
							{
								echo "password is wrong";
							}
						}
						
					}
				}
			?>
		</div>
		<div class="form_box_Register">
			<h2>REGISTER</h2>
			<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
			     <div class="input_box">
				    <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
					<input type="text" name="uname" required>
					<label>Username</label>
				</div>
			    <div class="input_box">
				    <span class="icon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
					<input type="email" name="emails" required>
					<label>Email</label>
				</div>
				<div class="input_box">
				    <span class="icon1"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
					<input type="password" name="pass" required>
					<label>Password</label>
				</div>
				<div class="frgt_pswd">
				    <label><input type="checkbox">Agree to the terms and conditions</label>
			    </div>
				<button type="submit" name="ok" class="btn">Register Now</button>
				<div class="Register">
				    <p>Already Have an Account?<a href="#"  class="login_link">Login</a></p>
			    </div>
			</form>
		 
		<?php
			    if(isset($_REQUEST['ok']))
				{
					$username=$_REQUEST['uname'];
					$email=$_REQUEST['emails'];
					$password=$_REQUEST['pass'];
					$con=mysqli_connect("localhost","root","","quiz_db");
					mysqli_query($con,"INSERT INTO info_user(`username`, `email`, `password`) VALUES ('$username','$email','$password')");
					$a=mysqli_affected_rows($con);
					if($a==1)
					{
					    echo "<script>window.location.href='index.php';</script>";
					}
					else{
						echo("some went wrong");
					}
					mysqli_close($con);
				}
			?>
			</div>
	</body>
</html>