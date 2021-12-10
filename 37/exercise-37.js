class BankAccount {
    #balance = 0;
    constructor(balance) {
        this.#balance += balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Saldo insufficiente');
        }
    }
    view() {
        console.log(this.#balance);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();