variable3 = localStorage.getItem("keyword1");
variable4 = localStorage.getItem("keyword2");


p1 = 0;
p2 = 0;

document.getElementById("1stplayer_name").innerHTML = variable3 + " : ";
document.getElementById("2ndplayer_name").innerHTML = variable4 + " : ";

document.getElementById("1stplayer_score").innerHTML = p1;
document.getElementById("2ndplayer_score").innerHTML = p2;

document.getElementById("player_question").innerHTML = "Question Turn :" + variable3;
document.getElementById("player_answer").innerHTML = "Answer Turn :" + variable4;

function show(){
    numberone = document.getElementById("fan").value;
    numbertwo = document.getElementById("ac").value;
    final_answer = parseInt(numberone) - parseInt(numbertwo);
    console.log(final_answer);
    
    
    variable5 = "<h4>" + numberone + " - " + numbertwo + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check'>";
    check_button = "<br> <button class = 'btn-btn-info' onclick='result()'>Result</button>";
    row = variable5 + input_box + check_button;
    document.getElementById("functionwrk").innerHTML = row;
    document.getElementById("fan").value = "";
    document.getElementById("ac").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function result(){
    get_answer = document.getElementById("input_check").value;
    if(get_answer==final_answer)
        {
            if(answer_turn=="player1")
                {
                    p1=p1+1;
                    document.getElementById("1stplayer_score").innerHTML=p1;
                }
            else{
                p2= p2+1;
                document.getElementById("2ndplayer_score").innerHTML=p2;
            }
        }
    if(question_turn=="player1")
        {
            question_turn="player2"
            document.getElementById("player_question").innerHTML="Question Turn-" + variable4;
        }
          else
              {
                  question_turn="player1"
                  document.getElementById("player_question").innerHTML="Question Turn-" + variable3;
              }
            
            
            if(answer_turn== "player1")
                {
                    answer_turn="player2"
                    document.getElementById("player_answer").innerHTML = "Answer Turn-" + variable4;
                }
    else
        {
            answer_turn= "player1"
            document.getElementById("player_answer").innerHTML= "Answer Turn-" + variable3;
        }
         document.getElementById("functionwrk").innerHTML = "" ;   
        }
    
    
    
    
    


