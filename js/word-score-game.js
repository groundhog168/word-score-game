var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;
function startGame() {
	addNumbersFromBag();
	displayHand();
	
};
	//console.log("normal");           // 用于输出普通信息
	//console.info("information");     // 用于输出提示性信息
	//console.error("error");          // 用于输出错误信息
	//console.warn("warn");            // 用于输出警示信息


function addNumbersFromBag(){
	//初始 YOUR_HAND.length = 0
	console.log("your hand has:" + YOUR_HAND.length);
	//将随机tile(s) 填满 YOUR_HAND
	if (BAG_OF_LETTERS.length){
		for(i=YOUR_HAND.length; i < 7; i++){
			YOUR_HAND[i] = getAvailableLetter();
		}
	}else{
		alert("Out of new letters.")	
	}
	
}


function displayHand(){
	//因为此函数在addNumbersFromBag之后，所以YOUR_HAND.length = 7, 即YOUR_HAND被填满
	console.log("your hand has:" + YOUR_HAND.length);
	
	for (i = 0; i < YOUR_HAND.length; i++) {
        //输出普通信息: e.g. #letter-1 set to A
		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		
		//addClass: 给指定元素增加类名. 
		//这里e.g. 将#letter-1 增加一个 letter-A class属性；
		//         将#points-1(这个‘1’是7张卡片中第一张的意思) 增加一个 points-1(这个‘1’是字母A被使用得1分的意思) class属性 	
		//一旦卡片进入手中，就给它们加上class，使它们具有卡片上的字母和分数 属性
		
		//function $(id){
        //return document.getElementById(id);
        //}

		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		// .html()是用来读取元素的HTML内容（包括其Html标签）,
		// .html()方法使用在多个元素上时，只读取第一个元素
		
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}



function getAvailableLetter(){
	//if(BAG_OF_LETTERS.length){
		//[0，100] 的随机数作为 随机索引
		var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
		//删除BAG_OF_LETTERS中，该索引位置的元素，并返回给randomLetter。（BAG_OF_LETTERS数组中的元素会起来越少。）
		var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
		console.log(randomLetter[0]);
		//返回BAG_OF_LETTERS中的随机元素
		return randomLetter[0];
	//}else{
	//	alert("Letters are running out.");
	//	return 
	//}
}


function findWordToUse(){
 //TODO Your job starts here.
	
	var your_hand_list_letters = [];
	var your_hand_list_points = [];
	
	var word_record = [];
	var point_record = [];
	var points = 0;

	for (i=0; i<26; i++){
		var alpha = String.fromCharCode(i+97);
		var word_bank = Word_List.wordbank[alpha];
		for (ii = 0; ii < word_bank.length; ii++){
			if (word_bank[ii].length < 7){
				word = word_bank[ii].toUpperCase();
				for (iii=0; iii<YOUR_HAND.length; iii++){
					your_hand_list_letters[iii]=YOUR_HAND[iii].letter;
					your_hand_list_points[iii]=YOUR_HAND[iii].pointsWhenLettersUsed;
				}
				var flag = 0;
				points = 0;
				for (j = 0; j < word.length; j++){
					index = your_hand_list_letters.indexOf(word.charAt(j));
					if (index > -1){
						points += your_hand_list_points[index];
						//console.log(your_hand_list_letters[index] + your_hand_list_points[index]);
						your_hand_list_letters.splice(index, 1);
						your_hand_list_points.splice(index, 1);
		
					}else{
						if (your_hand_list_letters.indexOf('_') > -1){
							your_hand_list_letters.splice(your_hand_list_letters.indexOf('_'), 1);
							your_hand_list_points.splice(your_hand_list_letters.indexOf('_'), 1);
							
						}else{
							flag = 1;
							break;
						}
					}
				}
			
				if (!flag){
				word_record.push(word);
				point_record.push(points);}
			}
			
		}
	}

	//max_points: the max points of a word among all eligible words.
	var max_points = 0;
	
	//The index of the word with max points
	var max_point_index = 0;
	
	for (i=0; i<point_record.length; i++){
			if (point_record[i]>max_points){
				max_points = point_record[i];
				max_point_index = i;
				}
	}
	
	var max_word_record = [];

	for (i=0; i<point_record.length; i++){
		if (point_record[i] == max_points){
			max_word_record.push(word_record[i]);

		}
		
	}
	
	//Bubble Sort for YOUR_HAND
	for (iii=0; iii<YOUR_HAND.length - 1; iii++){
		for(jjj=0; jjj< YOUR_HAND.length - iii -1; jjj++){
			if (YOUR_HAND[jjj].pointsWhenLettersUsed < YOUR_HAND[jjj+1].pointsWhenLettersUsed){
				var temp = YOUR_HAND[jjj];
				YOUR_HAND[jjj] = YOUR_HAND[jjj+1];
				YOUR_HAND[jjj+1] = temp;
				
				}
		}
	}
	
	//Define a flag. When there is only one element in max_word_record, flag = 1;
	var flag_only_one_element = 0;
	
	if (max_word_record.length == 1){
		flag_only_one_element = 1;
	}
	
	//Find the word with most high-point-letters in max_word_record
	for(j=0; j<YOUR_HAND.length; j++){
		if (!flag_only_one_element){
			for (i=0; i<max_word_record.length; i++){
				if (max_word_record[i].indexOf(YOUR_HAND[j].letter) == -1){
					max_word_record.splice(i, 1);
					i = i -1;
					if (max_word_record.length == 1){
						flag_only_one_element = 1;
						break;
					}
				}
			}
		}
	}
/*
	var str_output = 'Words with max scores: ' + max_word_record[0] + '<br \> '
	
	for (i=0 ; i< word_record.length; i ++){
	str_output = str_output + word_record[i] + ': ' + point_record[i] + '; ' + ' ';
	}
	
	//在find-wordss中输出文本	
	$( "#find-wordss").html(str_output);*/
	
	$( "#human-word-input").val( max_word_record[0]);
	

}


function humanFindWordToUse(){
	
	//将 <input type="text" id="human-word-input">（文字输入框） 的内容赋值给 humanFoundWord
	var humanFoundWord = $( "#human-word-input").val();
	console.log("Checking human word of:" + humanFoundWord);
	
	//如果输入的内容是一个单词（即，在wordBank中）
	if(isThisAWord(humanFoundWord)){
		//如果输入内容中可以在7张卡片中找到
		if(haveLettersForWord(humanFoundWord)){
			//把输入的内容添加到word-history-list
			successfullyAddedWord(humanFoundWord);
		}else{
			alert(humanFoundWord + " - Do not have the letters for this word.");
		}
	}else{
		alert(humanFoundWord + " is not a valid word.");
	}
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");

	//一旦卡片离开手中，就取消它们的class，使它们不具有卡片上的字母和分数 属性
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	//val() 方法返回或设置被选元素的值。
	//使输入框的值为‘’(即清空输入框)
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			//使用过卡片加分
			addToScore(YOUR_HAND[ii]);
			//把使用过的卡片从手中拿走
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	//Grammatical errors above.
	//stringObject.split(separator,howmany) 方法用于把一个字符串分割成字符串数组
	//将 aProposedWord 分成一个一个字母，组成数组wordAsArray。
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			//遍历手中的7张卡片，如果有某张卡片的字母在 == wordAsArray [i]
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				//如果该卡片没有被使用过 && foundLetter == false
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					//used标志位置ture, foundLetter标志位置true
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		//如果手中的卡片没有任何一张在aProposedWord中找到，则执行'_'通配。
		if(!foundLetter){
			//如果手中的卡片中存在‘_’&& '_'.used == false，令“_”.used = true;foundLetter = true;
			for (ii=0; ii<YOUR_HAND.length; ii++){
				if(YOUR_HAND[ii].letter == '_' && !YOUR_HAND[ii].used){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					//used标志位置ture, foundLetter标志位置true
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					break;
				}
			}
		}
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[ii].used = false;
	}
}

function isThisAWord(aProposedWord){
	//即listCheck函数。如果aProposedWord在wordBank中能找到，则该函数返回True; 否则False.
	if (Word_List.isInList(aProposedWord)) {
	    return true;
	}
	return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	//重置YOUR_HAND
	//卡片从BAG里拿到HAND的时候，BAG就减少了相应的卡片。
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
		$( "#find-wordss").html('');
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	
	//在human-word-input输入框中按下回车，触发函数humanFindWordToUse
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});
