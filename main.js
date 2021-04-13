'use strict';

const book = document.querySelectorAll('.book'),
    books = document.querySelector('.books'),
    body = document.getElementsByTagName('body'),
    advBlock = document.querySelector('.adv');


console.log('book: ', book);
console.log('body: ', body);

books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

body[0].style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[4].childNodes[1].childNodes[1].textContent = 'Книга 3. this и Прототипы Объектов'

advBlock.style.display = 'none';

// 3-я книга
book[0].childNodes[3].children[3].after(book[0].childNodes[3].children[6]);
book[0].childNodes[3].children[5].before(book[0].childNodes[3].children[8]);
book[0].childNodes[3].children[9].after(book[0].childNodes[3].children[2]);

// 5-я книга
book[5].childNodes[3].children[1].after(book[5].childNodes[3].children[9]);
book[5].childNodes[3].children[2].after(book[5].childNodes[3].children[4]);
book[5].childNodes[3].children[5].after(book[5].childNodes[3].children[4]);
book[5].childNodes[3].children[8].after(book[5].childNodes[3].children[6]);

let newChepter = document.createElement('li');
newChepter.textContent = 'Глава 8: За пределами ES6';
book[2].childNodes[3].append(newChepter);
console.log('book[2].childNodes[3].children: ', book[2].childNodes[3].children);
book[2].childNodes[3].children[10].after(book[2].childNodes[3].children[9]);



// let buttonStart = document.getElementById('start');
// console.log('buttonStart: ', buttonStart);
// let btnIncomeAdd = document.getElementsByTagName('button')[0];
// console.log('btnIncomeAdd: ', btnIncomeAdd);
// let btnExpensesAdd = document.getElementsByTagName('button')[1];
// console.log('btnExpensesAdd: ', btnExpensesAdd);
// let depositCheckBox = document.querySelector('#deposit-check')
// console.log('depositCheckBox: ', depositCheckBox);
// let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
// console.log('additionalIncomeTtems: ', additionalIncomeItems);

// // result
// let inputBudgetDayValue = document.getElementsByClassName('budget_day-value');
// console.log('inputBudgetDayValue: ', inputBudgetDayValue);
// let inputExpensesMonthValue = document.getElementsByClassName('expenses_month-value');
// console.log('inputExpensesMonthValue: ', inputExpensesMonthValue);
// let inputAdditionalIncomeValue = document.getElementsByClassName('additional_income-value');
// console.log('inputAdditionalIncomeValue: ', inputAdditionalIncomeValue);
// let inputAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
// console.log('inputAdditionalExpensesValue: ', inputAdditionalExpensesValue);
// let inputIncomePeriodValue = document.getElementsByClassName('income_period-value');
// console.log('inputIncomePeriodValue: ', inputIncomePeriodValue);
// let inputTargetMonthValue = document.getElementsByClassName('target_month-value');
// console.log('inputTargetMonthValue: ', inputTargetMonthValue);

// // data
// let salaryAmount = document.querySelector('.salary-amount');
// console.log('salaryAmount: ', salaryAmount);
// let incomeTitle = document.querySelector('.income-title')
// console.log('incomeTitle: ', incomeTitle);
// let incomeAount = document.querySelector('.income-amount')
// console.log('incomeAount: ', incomeAount);
// let additionalIncomeItemFist = document.querySelectorAll('.additional_income-item')[0];
// console.log('dditionalIncomeItemFist: ', additionalIncomeItemFist);
// let additionalIncomeItemSecond = document.querySelectorAll('.additional_income-item')[1];
// console.log('additionalIncomeItemSecond: ', additionalIncomeItemSecond);
// let expensesTitle = document.querySelector('.expenses-title');
// console.log('expensesTitle: ', expensesTitle);
// let expensesAmount = document.querySelector('.expenses-amount')
// console.log('expensesAmount: ', expensesAmount);
// let additionalExpensesItem = document.querySelector('.additional_expenses-item');
// console.log('additionalExpensesItem: ', additionalExpensesItem);
// let periodSelect = document.querySelector('.period-select');
// console.log('periodSelect: ', periodSelect);

// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };
// // Функция start() получает данные от пользователя и если данные в виде числа записывает их в переменную money 
// let money, itemIncome, cashIncome,
//     start = function() {
//         do {
//             money = prompt('Ваш месячный доход?');
//         } while (!isNumber(money))

//     };
// start();

// // Создаем объект appData
// let appData = {
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 500000,
//     period: 3,
//     budjet: money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function() {

//         if (confirm('У вас есть дополнительный доход?')) {

//             do {
//                 itemIncome = prompt('Какой у вас дополнительный заработок?', 'Инвестиции');
//             } while (!/\D/.test(itemIncome));


//             do {
//                 cashIncome = prompt('Сколько это вам приносит?', 5000);
//             } while (!/^[0-9]+$/.test(cashIncome));

//             this.income[itemIncome] = cashIncome;
//         }

//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Детский сад,Алименты');
//         this.addExpenses = addExpenses.toLowerCase().split(',');
//         this.deposit = confirm('Есть ли у вас депозит в банке?');
//         appData.getInfoDeposit();
//         let key = '';
//         let num = 0;

//         for (let i = 0; i < 2; i++) {
//             key = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
//             do {
//                 num = prompt('Во сколько это обойдется?', '5000');
//             } while (!isNumber(num))
//             this.expenses[key] = num;
//         }
//     },
//     getExpensesMonth: function() {
//         for (let key in this.expenses) {
//             this.expensesMonth += +this.expenses[key];
//         }
//     },
//     getBudget: function() {
//         this.budgetMonth = Math.round(this.budjet - this.expensesMonth);
//         this.budgetDay = Math.round(this.budgetMonth / 30);
//     },
//     getTargetMonth: function() {
//         if ((this.mission / this.budgetMonth) > 0) {
//             console.log('Цель будет достигнута через ' + Math.round(this.mission / this.budgetMonth) + ' месяцев.');
//         } else {
//             console.log('Цель не будет достигнута');
//         }
//     },
//     getStatusIncome: function() {
//         switch (true) {
//             case (this.budgetDay >= 1200):
//                 console.log('У вас высокий уровень дохода');
//                 break;
//             case ((this.budgetDay >= 600) && (this.budgetDay < 1200)):
//                 console.log('У вас средний уровень дохода');
//                 break;
//             case ((this.budgetDay < 600) && (this.budgetDay >= 0)):
//                 console.log('К сожалению у вас уровень дохода ниже среднего');
//                 break;
//             case (this.budgetDay < 0):
//                 console.log('Что то пошло не так');
//                 break;
//         }
//     },
//     showMetods: function() {
//         console.log('Наша программа включает в себя данные: ');
//         for (let key in appData) {
//             console.log(appData[key]);
//         }
//     },
//     getInfoDeposit: function() {
//         if (this.deposit) {
//             do {
//                 this.percentDeposit = prompt('Какой у вас процент по депозиту?', '10');
//             } while (!/^[0-9]+$/.test(this.percentDeposit))

//             do {
//                 this.moneyDeposit = prompt('Какова сумма депозит?', 5000);
//             } while (!/^[0-9]+$/.test(this.moneyDeposit))

//         }
//     },
//     calcSavedMoney: function() {
//         return this.budgetMonth * this.period
//     }
// };

// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();

// // Вывод на экран
// console.log('Расходы за месяц: ', appData.expensesMonth);
// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.showMetods();

// console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '))