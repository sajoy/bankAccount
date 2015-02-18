var BankAccount = {
  balance: 0,
  name: "",
  deposit: function(amount) { this.balance += amount },
  withdraw: function(amount) { this.balance -= amount}
}


$(function() {

  $('#deposit-withdraw :input').prop('disabled', true);

  $("form#new-account").submit(function(event) {
    $('#deposit-withdraw :input').prop('disabled', false);
    event.preventDefault();
    var inputtedName = $("input#new-name").val();
    var inputtedInitialDeposit = parseInt($("input#new-deposit").val());
    var newAccount = Object.create(BankAccount);
    newAccount.name = inputtedName;
    newAccount.balance = inputtedInitialDeposit;

    $("form#deposit-withdraw").submit(function(event) {
      event.preventDefault();
      var inputtedDeposit = parseInt($('input#deposit').val());
      var inputtedWithdraw = parseInt($('input#withdraw').val());

      if (isNaN(inputtedDeposit) === true) {
        inputtedDeposit = 0;
      }
      if (isNaN(inputtedWithdraw)) {
        inputtedWithdraw = 0;
      }

      $('input#deposit').val("");
      $('input#withdraw').val("");

      newAccount.balance += (inputtedDeposit - inputtedWithdraw);
      $('.balance').text(newAccount.balance);
    });

    $('input#new-name').val("");
    $('input#new-deposit').val("");


    $('#show-balance').show();
    $('#deposit-withdraw').show();

    $('.accountName').text(newAccount.name);
    $('.balance').text(newAccount.balance);

  });


});
