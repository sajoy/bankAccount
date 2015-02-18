describe("BankAccount", function() {
  describe("balance", function() {
    it("will start at 0", function() {
      var newAccount = Object.create(BankAccount);
      expect(newAccount.balance).to.equal(0);
    });
  });

  describe('deposit', function() {
    it('will add money to the account', function() {
      var newAccount = Object.create(BankAccount);
      newAccount.deposit(10);
      expect(newAccount.balance).to.equal(10);
    });
  });

  describe('withdraw', function() {
    it('will withdraw money fromt he account', function () {
      var newAccount = Object.create(BankAccount);
      newAccount.withdraw(10);
      expect(newAccount.balance).to.equal(-10);
    });

  });
});
