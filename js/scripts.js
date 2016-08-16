$(document).ready(function(){
  $(".friends-group").submit(function(event){
    var friendName = $("#friends1").val();
    var friendName2 = $("#friends2").val();
    var friendName3 = $("#friends3").val();

    var friendship = [friendName, friendName2, friendName3];
    for(var index=0; index < friendship.length; index += 1){
      alert("Buenos Dias " + friendship[index] + " !");
    };
      event.preventDefault();
  });

  $(".wordsPuzzle").submit(function(){
    var inputText = $("#wordsInput").val();
    var vowel = ["a","e","i", "o", "u", "A", "E", "I", "O", "U"];
    for(var index=0; index<=inputText.length; index+=1) {
      for(var vindex=0; vindex<=vowel.length; vindex+=1) {
        if (inputText[index] === vowel[vindex]) {
          inputText=inputText.replace(inputText[index],"-");
        };
      };
    }
    $("#theResult").append("<li>"+ inputText +"</li>");
  event.preventDefault();
  });
});
