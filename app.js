$(document).ready (function() {

var questions = [
	{
		qNum: 1,
		q: "Also know as Bobby Digital he's the mastermind behind the boards.",
		guessList: ["Timbaland", "RZA", "Swizz Beats", "Dr.Dre"],
		correct: 2,
		pic: "rza"
	},

	{
		qNum: 2,
		q: "His metaphoric and multi-layered lyrics are often touted by critics as his rap name implies; genius.", 
		guessList: ["2Pac", "Guru", "Large Professor", "GZA"],
		correct: 4,
		pic: "gza"
	},

	 {
	 	qNum: 3,
		q: "He rhymes under the alias Golden Arms, based on the Kung-Fu movie The Kid with The Golden Arms.",
		guessList: ["Jay-Z", "DJ Premiere", "U-God", "Scarface"],
		correct: 3,
		pic: "uGod"
	},

	{
		qNum: 4,
		q: "The most quiet and mysterious Wu-Tang member.",
		guessList: ["Masta Killa", "Ol' Dirty Bastard", "Q-tip", "Method Man"],
		correct: 1,
		pic: "mastaKilla"
	},

	{
		qNum: 5,
		q: "He's The Rebel I.N.S.",
		guessList: ["RZA", "Inspectah Deck", "Ghostface Killah", "Snoop Dogg"],
		correct: 2,
		pic: "inspectahDeck"
	},

	{
		qNum: 6,
		q: "Tical",
		guessList: ["Raekwon", "Lil' Wayne", "Redman", "Method Man"],
		correct: 4,
		pic: "methodMan"
	},

	{
		qNum: 7,
		q: "He's the Chef and he made the classic Only Built for Cuban Linx",
		guessList: ["GZA", "Nas", "Madlib", "Raekwon"],
		correct: 4,
		pic: "raekwon"
	},

	{
		qNum: 8,
		q: "A.k.a. Tony Starks",
		guessList: ["GMethod Man", "U-God", "Inspectah Deck", "Ghostface"],
		correct: 4,
		pic: "ghostFace"
	},

	{
		qNum: 9,
		q: "Shimmy Shimmy Ya, Shimmy yam Shimmy Yey, give me the mic so I can take it away!",
		guessList: ["Eminem", "Eazy-E", "Doom", "Ol' Dirty Bastard"],
		correct: 4,
		pic: "odb"
	}
];

var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions = questions.length;
var questionIndex = 0;
var correctText = "Correct!";
var wrongText = "Nope!";

// Start the quiz
$(".startQuiz").click(function() {
	$(".instructions").fadeOut("fast");
  	$(".wuQuiz").show("slow", getQuestion);
});
	
function startGame() {
	currentQuestion = 1;
	correctAnswers = 0;
	questionIndex = 0;
	$(".whichWu").show();
	$(".wuOptions").show();
	$(".checkWu").show();
	$("#pic").show();
	$(".startOver").hide();
	$('input:radio[name=wuMember]').attr('checked',false);
	getQuestion();
};

function getQuestion() {
	$('.memberMugShot').attr("id", questions[questionIndex].pic).hide().fadeIn();
 	$(".currentWu").text(questions[questionIndex].q);
 	$(".option0").text(questions[questionIndex].guessList[0]);
 	$(".option1").text(questions[questionIndex].guessList[1]);
 	$(".option2").text(questions[questionIndex].guessList[2]);
 	$(".option3").text(questions[questionIndex].guessList[3]);
 	$(".option3").text(questions[questionIndex].guessList[4]);
 	$(".option3").text(questions[questionIndex].guessList[5]);
 	$(".option3").text(questions[questionIndex].guessList[6]);
 	$(".option3").text(questions[questionIndex].guessList[7]);
 	$(".option3").text(questions[questionIndex].guessList[8]);
 	$(".currentPosition").text("Question " + currentQuestion + " of 9");
};
	
function checkAnswer() {
	var radioValue = false;
	var userChoice = document.getElementsByName('wuMember');
		for (var i = 0; i < userChoice.length; i++) {
		
		if(userChoice[i].checked) {
			radioValue = userChoice[i].value;
			};
		};

		if (radioValue === false) {
			alert("Please pick an answer");
		} else if (radioValue == questions[questionIndex].correct) {
			$(".checkWu").html('<a class="right" href="#">' + correctText + '</a>');
			correctAnswers++;
		} else {
			$(".checkWu").html('<a class="wrong" href="#">' + wrongText + '</a>');
		};

		if (questions[questionIndex].qNum == 9) {

		if (radioValue == questions[questionIndex].correct) {
			$(".checkWu").html('<a class="right" href="#">' + correctText + '</a>');
			} else {
			$(".checkWu").html('<a class="wrong" href=#"">' + wrongText + '</a>');
			}

			$(".nextWu").hide();	
			$(".currentPosition").text("Congrats! You got " + correctAnswers + " out of 9 correct!");
			$(".startOver").show();
			$(".wuOptions").hide();
			$(".checkWu").hide();
			} else {
			$(".nextWu").show();
		};	
	};

	$(".nextWu").click(function() {
			nextQuestion();
			$('input:radio[name=wuMember]').attr('checked',false);
		});
	$(".checkWu").click(function() {
			checkAnswer();
	});

function nextQuestion() {
	$("nextWu").hide();
	$(".checkWu").html('<a href=#"">Check Answer</a>');
	currentQuestion++;
	questionIndex++;
	getQuestion();
}; 

	$(".startOver").click(function() {
	$(".checkWu").html('<a href=#"">Check Answer</a>');
	$(".nextWu").show();
	startGame();
	});
});


