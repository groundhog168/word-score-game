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

var NULL_LETTER= new Letter(' ', 1, 0);

var YOUR_HAND = new Array();
var SCORE = 0;
function startGame() {
	addNumbersFromBag();
	displayHand();
	
};
	//console.log("normal");           // ���������ͨ��Ϣ
	//console.info("information");     // ���������ʾ����Ϣ
	//console.error("error");          // �������������Ϣ
	//console.warn("warn");            // ���������ʾ��Ϣ


function addNumbersFromBag(){
	//��ʼ YOUR_HAND.length = 0
	console.log("your hand has:" + YOUR_HAND.length);
	//�����tile(s) ���� YOUR_HAND
	for(i=YOUR_HAND.length; i < 7; i++){
		YOUR_HAND[i] = getAvailableLetter();
	}
}


function displayHand(){
	//��Ϊ�˺�����addNumbersFromBag֮������YOUR_HAND.length = 7, ��YOUR_HAND������
	console.log("your hand has:" + YOUR_HAND.length);
	
	for (i = 0; i < YOUR_HAND.length; i++) {
        //�����ͨ��Ϣ: e.g. #letter-1 set to A
		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		
		//addClass: ��ָ��Ԫ������class����. 
		//����e.g. ��#letter-1 ����һ�� letter-A class���ԣ�
		//         ��#points-1(�����1����7�ſ�Ƭ�е�һ�ŵ���˼) ����һ�� points-1(�����1������ĸA��ʹ�õ�1�ֵ���˼) class���� 	
		//һ����Ƭ�������У��͸����Ǽ���class��ʹ���Ǿ��п�Ƭ�ϵ���ĸ�ͷ��� ����
		
		//function $(id){
        //return document.getElementById(id);
        //}

		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		// .html()��������ȡԪ�ص�HTML���ݣ�������Html��ǩ��,
		// .html()����ʹ���ڶ��Ԫ����ʱ��ֻ��ȡ��һ��Ԫ��
		
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
	game_over_check();

}

function game_over_check(){
	if (YOUR_HAND[0] == NULL_LETTER){
		alert('Game over.');
	}
}

function getAvailableLetter(){
	if(BAG_OF_LETTERS.length){
		//[0��100] ���������Ϊ �������
		var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
		//ɾ��BAG_OF_LETTERS�У�������λ�õ�Ԫ�أ������ظ�randomLetter����BAG_OF_LETTERS�����е�Ԫ�ػ�����Խ�١���
		var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
		console.log(randomLetter[0]);
		//����BAG_OF_LETTERS�е����Ԫ��
		return randomLetter[0];
	}else{
		return NULL_LETTER;
		}
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
	
	//Find the max points of a eligible word within handletters.
	if(word_record.length){
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
		
		//Output the word with max points into text input box
		$( "#human-word-input").val( max_word_record[0]);
	}else{
		alert('No word available.');	
		}
	

}


function humanFindWordToUse(){
	
	//�� <input type="text" id="human-word-input">����������� �����ݸ�ֵ�� humanFoundWord
	var humanFoundWord = $( "#human-word-input").val();
	console.log("Checking human word of:" + humanFoundWord);
	
	//��������������һ�����ʣ�������wordBank�У�
	if(isThisAWord(humanFoundWord)){
		//������������п�����7�ſ�Ƭ���ҵ�
		if(haveLettersForWord(humanFoundWord)){
			//�������������ӵ�word-history-list
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

	//һ����Ƭ�뿪���У���ȡ�����ǵ�class��ʹ���ǲ����п�Ƭ�ϵ���ĸ�ͷ��� ����
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	//val() �������ػ����ñ�ѡԪ�ص�ֵ��
	//ʹ������ֵΪ����(����������)
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
			//ʹ�ù���Ƭ�ӷ�
			addToScore(YOUR_HAND[ii]);
			//��ʹ�ù��Ŀ�Ƭ����������
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
	//stringObject.split(separator,howmany) �������ڰ�һ���ַ����ָ���ַ�������
	//�� aProposedWord �ֳ�һ��һ����ĸ���������wordAsArray��
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			//�������е�7�ſ�Ƭ�������ĳ�ſ�Ƭ����ĸ�� == wordAsArray [i]
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				//����ÿ�Ƭû�б�ʹ�ù� && foundLetter == false
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					//used��־λ��ture, foundLetter��־λ��true
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		//������еĿ�Ƭû���κ�һ����aProposedWord���ҵ�����ִ��'_'ͨ�䡣
		if(!foundLetter){
			//������еĿ�Ƭ�д��ڡ�_��&& '_'.used == false���_��.used = true;foundLetter = true;
			for (ii=0; ii<YOUR_HAND.length; ii++){
				if(YOUR_HAND[ii].letter == '_' && !YOUR_HAND[ii].used){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					//used��־λ��ture, foundLetter��־λ��true
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
	//��listCheck���������aProposedWord��wordBank�����ҵ�����ú�������True; ����False.
	if (Word_List.isInList(aProposedWord)) {
	    return true;
	}
	return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	//����YOUR_HAND
	//��Ƭ��BAG���õ�HAND��ʱ��BAG�ͼ�������Ӧ�Ŀ�Ƭ��
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
	
	//��human-word-input������а��»س�����������humanFindWordToUse
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
	
	
	
});