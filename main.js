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
        this.addExpenses = addExpenses.toLowerCase().split(',');
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        let key = '';
        let num = 0;

        for (let i = 0; i < 2; i++) {
            key = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
            do {
                num = prompt('Во сколько это обойдется?', '5000');
            } while (!isNumber(num))
            this.expenses[key] = num;
            console.log('this.expenses: ', this.expenses);
        }
    },
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getAccumulatedMonth: function() {
        return (money - this.expensesMonth);
    },
    getTargetMonth: function() {
        if ((this.mission / accumulatedMonth) > 0) {
            console.log('Цель будет достигнута через ' + Math.round(this.mission / accumulatedMonth) + ' месяцев.');
        } else {
            console.log('Цель не будет достигнута');
        }
    },
    getStatusIncome: function() {
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

};

appData.asking();

let expenses = [];

appData.getExpensesMonth();
let accumulatedMonth = appData.getAccumulatedMonth();
let budgetDay = Math.round(accumulatedMonth / 30);


// Вывод на экран
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Возможные расходы за месяц: ', appData.addExpenses);
appData.getTargetMonth();
console.log('Бюджет на день: ', budgetDay);
appData.getStatusIncome();