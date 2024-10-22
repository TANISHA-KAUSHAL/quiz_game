<!DOCTYPE html>
<html>
    <head>
	    <title>Online Quiz</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Young+Serif&display=swap" rel="stylesheet">
	</head>
	<body style="background-image:radial-gradient(#c31432,#240b36);background-size:100% 888px; background-repeat: no-repeat; ">
		<header class="nav">
            <ul>
                <li><a href="#"><span class="text">Home</span>
                    </a>
                </li>
                <li><a href="about.php"><span class="text">About-Us</span>
                    </a>
                </li>
				<li><a href="quiz.php" class="active"><span class="text">Quiz</span>
                    </a>
                </li>
            </ul>
		<label class="logo"><span style="font-family:'Dancing Script'; font-size: 44px;">Online Quiz</span></label>
		<ul>
			<li><a href="contact.php"><span class="text">Contact</span>
			    </a>
			</li>
			<li><a href="info.php"><span class="text">Info</span>
			    </a>
			</li>
			<li><a href="logout.php" class="login_button"><span class="text">Logout</span></a>
			</li>
		</ul>
            <div><input type="checkbox" id="check" name="check" value="check">
                <label for="check" id="chk"><i class="fa fa-bars" aria-hidden="true"></i></label>
            </div>
		</header>
        <section class="Quiz" id="quiz">
        <div class="middle1">
            <div class="info1">
            <h5 style="width: 400px; text-align: center; margin-left: 34%;">
            <span style="font-family:'Dancing Script';font-size:30px; color:#000;">Are You Ready For The Quiz</span></h5>
            <h5 style="width: 400px; text-align: center; margin-left: 34%;"><span style="font-family:'Young serif';font-size:20px; color:#fff; font-weight:200;">Test Your Thinking Quiz: This quiz asks you to rate your level of thinking</span></h5>
            <button class="btn1" onclick="openPopup()">Let's Start</button>
        
        <div class="popup" id="popup">
            <h2 style="color:#c31432; font-family:Young-serif;">GUIDE</h2>
            <p>1. Questions will be based on General Knowledge.</p>
            <p>2. The examination will comprise of Objective type Multiple Choice Questions</p>
            <p>3. No Negative marking.</p>
            <p>4. Each question has one correct answer.</p>
            <button type="button" onclick="closePopup()">Exit</button>  
            <a href="quizin.php"><button type="button">Continue</button></a>   
        </div>
</div>
</div>
        </section>
<script>
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
</script>
	<body>
</html>