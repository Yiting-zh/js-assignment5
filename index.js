
function atm () {
  const message = parseFloat (
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );

  let number

  switch (message) {
    case 1:
      alert("Your balance is:" + account.getBalance())
      break;
  
    case 2:
      number = parseFloat(prompt("Enter deposit amount:"));
      account.deposit(number);
      alert("New balance: " + account.getBalance());
      break;
    
    case 3:
      number = parseFloat(prompt("Enter withdrawal amount:"));
      account.withdraw(number);
      alert("New balance: " + account.getBalance());
      break;

    case 4:
      alert("Your account name "  + account.accountName)
      break;

    case 5:
      account.exitAccount();
      break;
  }

}


const account = {
  accountName: "Maria",
  balance: 1000,
  getBalance: function() { 
    return this.balance;
  },

  deposit: function(amount) {
   if (isNaN(amount)) {
    this.accountError("Not a Number! Please enter a valid deposit amount.");
  } 
    this.balance += amount;
    return this.balance
  },

  withdraw: function(amount) {
    if (isNaN(amount)) {
      this.accountError("Not a Number! Please enter a valid withdrawal amount.");
      return;}
    else if (amount > this.balance) {
      this.accountError("You don't have enough money to withdraw.");
      return;
    } 
    else {
    this.balance -= amount;
    return this.balance
    }
  },

  getAccountName: function() {
    console.log(this.accountName)
  },

  accountError: function(message) {
    alert(message);
  },

  exitAccount: function() {
    alert ("You have exited the account ")
    this.accountName = null;
    this.balance= null;
  }

};

