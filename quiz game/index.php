<!DOCTYPE html>
<html>
    <head>
	    <title>Online Quiz</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Young+Serif&display=swap" rel="stylesheet">
        <script type="text/javascript">
            function showMessage(){
                alert("SignUp first");
            }
        </script>
	</head>
	<body style="background-image:url(qu.jpg); background-size:100% 888px; background-repeat: no-repeat; ">
		<header class="nav">
            <ul>
                <li><a href="index.php" class="active"><span class="text">Home</span>
                    </a>
                </li>
                <li><a href="#about"  onClick="showMessage()"><span class="text">About-Us</span>
                    </a>
                </li>
				<li><a href="#quiz"  onClick="showMessage()"><span class="text">Quiz</span>
                    </a>
                </li>
            </ul>
		<label class="logo"><span style="font-family:'Dancing Script'; font-size: 44px;">Online Quiz</span></label>
		<ul>
			<li><a href="#contact" onClick="showMessage()"><span class="text">Contact</span>
			    </a>
			</li>
			<li><a href="#info"  onClick="showMessage()"><span class="text">Info</span>
			    </a>
			</li>
			<li><a class="login_button active"><span class="text">SignUp</span></a>
			</li>
		</ul>
            <div><input type="checkbox" id="check" name="check" value="check">
                <label for="check" id="chk"><i class="fa fa-bars" aria-hidden="true"></i></label>
            </div>
		</header>
		<div class="info">
		<div class="form">
		<span class="icon_close"><i class="fa fa-times" aria-hidden="true"></i></span>
            <?php include 'registerform.php';?>
        </div>
        </div>
    <script src="index.js"></script>
	<body>
</html>