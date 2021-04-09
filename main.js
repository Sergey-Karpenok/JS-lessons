'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// Функция start() получает данные от пользователя и если данные в виде числа записывает их в переменную money 
let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money))
    };
start();

// Создаем объект appData
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 3,
    budjet: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Детский сад, Алименты');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth: function() {
        let sum = 0;
        let num = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
            do {
                num = prompt('Во сколько это обойдется?', '5000');
            } while (!isNumber(num))
            sum += +num;
        }
        return sum;
    }

};

let expenses = [];

// const getExpensesMonth = function() {
//     let sum = 0;
//     let num = 0;
//     for (let i = 0; i < 2; i++) {
//         expenses[i] = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
//         do {
//             num = prompt('Во сколько это обойдется?', '5000');
//         } while (!isNumber(num))
//         sum += +num;
//     }
//     return sum;
// };

let expensesAmount = appData.getExpensesMonth();
let accumulatedMonth = getAccumulatedMonth();
let budgetDay = Math.round(accumulatedMonth / 30);

const getStatusIncome = function() {
    switch (true) {
        case (budgetDay >= 1200):
            console.log('У вас высокий уровень дохода');
            break;
        case ((budgetDay >= 600) && (budgetDay < 1200)):
            console.log('У вас средний уровень дохода');
            break;
        case ((budgetDay < 600) && (budgetDay >= 0)):
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case (budgetDay < 0):
            console.log('Что то пошло не так');
            break;
    }
}


function getAccumulatedMonth() {
    return (money - expensesAmount);
}
const getTargetMonth = function() {

    if ((appData.mission / accumulatedMonth) > 0) {
        console.log('Цель будет достигнута через ' + Math.round(appData.mission / accumulatedMonth) + ' месяцев.');
    } else {
        console.log('Цель не будет достигнута');
    }
}

// Вывод на экран
console.log('Расходы за месяц: ', expensesAmount);
console.log('Возможные расходы за месяц: ', appData.addExpenses);
getTargetMonth();
console.log('Бюджет на день: ', budgetDay);
getStatusIncome();