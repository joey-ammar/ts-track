/********************
TYPESSS
********************/
/*******************
Excersie types
*******************/
type bankAccountType = { money: number; deposit: (val: number) => void };
let bankAccount: bankAccountType = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  },
};
let myself: {
  name: string;
  bankAccount: bankAccountType;
  hobbies: string[];
} = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sport", "Cooking"],
};
myself.bankAccount.deposit(3000);
console.log(myself);
