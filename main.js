'use strict';

let buttonStart = document.getElementById('start');
let btnIncomeAdd = document.getElementsByTagName('button')[0];
let btnExpensesAdd = document.getElementsByTagName('button')[1];
let depositCheckBox = document.querySelector('#deposit-check')
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');

// result
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budjetMonthValue = document.getElementsByTagName('input')[13];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let inputAdditionalIncomeValue = document.getElementsByClassName('additional_income-value');
let inputAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let inputIncomePeriodValue = document.getElementsByClassName('income_period-value');
let inputTargetMonthValue = document.getElementsByClassName('target_month-value');

// data
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title')
let incomeAount = document.querySelector('.income-amount')
let additionalIncomeItemFist = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItemSecond = document.querySelectorAll('.additional_income-item')[1];
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');

// Функция возвращает true если переданное значение число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// Функция start() получает данные от пользователя и если данные в виде числа записывает их в переменную money 
let itemIncome, cashIncome;

// Создаем объект appData
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 3,
    budjet: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    start: function() {
        if (salaryAmount.value === '') {
            alert(' Пожалуйста заполните обязательное поле "Месячный доход"');
            return;
        }
        appData.budjet = salaryAmount.value;
        appData.getExpenses();


        appData.getExpensesMonth();
        appData.getBudget();
        appData.showResult();
    },
    asking: function() {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Детский сад,Алименты');
        this.addExpenses = addExpenses.toLowerCase().split(',');
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.getInfoDeposit();
        let key = '';
        let num = 0;

        for (let i = 0; i < 2; i++) {
            key = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
            do {
                num = prompt('Во сколько это обойдется?', '5000');
            } while (!isNumber(num))
            this.expenses[key] = num;
        }
    },
    addExpensesBlock: function() {
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length < 3) {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesAdd);
        } else {
            btnExpensesAdd.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== "" && cashExpenses !== "") {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        })
    },
    showResult: function() {
        budjetMonthValue.value = appData.budgetMonth;

        budgetDayValue.value = appData.budgetDay;

        expensesMonthValue.value = appData.expensesMonth;
    },
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function() {
        this.budgetMonth = Math.round(this.budjet - this.expensesMonth);
        this.budgetDay = Math.round(this.budgetMonth / 30);
    },
    getTargetMonth: function() {
        if ((this.mission / this.budgetMonth) > 0) {
            console.log('Цель будет достигнута через ' + Math.round(this.mission / this.budgetMonth) + ' месяцев.');
        } else {
            console.log('Цель не будет достигнута');
        }
    },
    getStatusIncome: function() {
        switch (true) {
            case (this.budgetDay >= 1200):
                console.log('У вас высокий уровень дохода');
                break;
            case ((this.budgetDay >= 600) && (this.budgetDay < 1200)):
                console.log('У вас средний уровень дохода');
                break;
            case ((this.budgetDay < 600) && (this.budgetDay >= 0)):
                console.log('К сожалению у вас уровень дохода ниже среднего');
                break;
            case (this.budgetDay < 0):
                console.log('Что то пошло не так');
                break;
        }
    },
    showMetods: function() {
        console.log('Наша программа включает в себя данные: ');
        for (let key in appData) {
            console.log(appData[key]);
        }
    },
    getInfoDeposit: function() {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой у вас процент по депозиту?', '10');
            } while (!/^[0-9]+$/.test(this.percentDeposit))

            do {
                this.moneyDeposit = prompt('Какова сумма депозит?', 5000);
            } while (!/^[0-9]+$/.test(this.moneyDeposit))

        }
    },
    calcSavedMoney: function() {
        return this.budgetMonth * this.period
    },

};

buttonStart.addEventListener('click', appData.start);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);



// Вывод на экран
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getTargetMonth();
appData.getStatusIncome();
// appData.showMetods();

console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '))