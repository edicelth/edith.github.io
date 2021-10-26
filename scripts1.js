
$(document).ready(function() {
  $("#button1").click(function(){

    var loan =  parseInt(   $("#loam").val()   );
    var interes = parseInt($("#interes").val()) / 100.0  / 12.0;
    var payments = parseInt($("#time").val()) * 12.0;

    var rate = Math.pow(1 + interes, payments);
    var monthly_payment = ((loan) * rate * interes) / (rate - 1);

      $("#mounthPayment").val(Math.round(monthly_payment));
      $("#payment").text("The mounthly payment is $" + Math.round(monthly_payment) + ".");
  });
});
