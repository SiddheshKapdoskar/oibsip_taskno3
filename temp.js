function convert_to_celcius(far){
  var cel = 5/9 * (far-32);
  return cel;
}

function convert_to_farhenheit(cel){
  var far = cel * (9/5) + 32;
  return far;
}

window.onload = function(){
  $("#btn1").click(function(){
  var val1 = $("#degree").val();
  var selectedOpt = $("#type option:selected").val();
  if(selectedOpt == 'fahrenheit'){
    var val2 = convert_to_celcius(val1);
    $("#result").val(val2);
  }
  else if (selectedOpt == 'celcius') {
    var val2 = convert_to_farhenheit(val1);
    $("#result").val(val2);
  }
}
)}
