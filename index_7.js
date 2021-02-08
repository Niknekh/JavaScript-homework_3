/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: this.transactions.length + 1,
    }
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount, type) {
    const newTransaction = this.createTransaction(amount, type = Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, type = Transaction.WITHDRAW);
    if (amount > this.balance) {
      console.log('снятие такой суммы не возможно, недостаточно средств')
    } else {
      this.balance -= amount;

      this.transactions.push(newTransaction);
    }
        
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let result = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        result += transaction.amount;
      }
    }
    return result;
  },

};
account.deposit(1000)
account.deposit(3000)
account.deposit(15000)
console.log(account)
console.log(account.transactions)
account.withdraw(10000)
console.log(account.transactions)
account.withdraw(10000)
console.log(account)
console.log(account.getTransactionDetails(2))
console.log(account.getTransactionTotal(Transaction.DEPOSIT))
