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
});
