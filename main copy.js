'use strict';

let buttonStart = document.getElementById('start');
let buttonCancel = document.getElementById('cancel');
let btnIncomeAdd = document.getElementsByTagName('button')[0];
let btnExpensesAdd = document.getElementsByTagName('button')[1];
let depositCheckBox = document.querySelector('#deposit-check')
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');

// result
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budjetMonthValue = document.getElementsByTagName('input')[13];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];

// data
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title')
let incomeAmount = document.querySelector('.income-amount')
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');
let targetAmount = document.getElementsByClassName('target-amount')[0];
let incomeItems = document.querySelectorAll('.income-items');

// Функция возвращает true если переданное значение число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// Функция start() получает данные от пользователя и если данные в виде числа записывает их в переменную money 
let itemIncome, cashIncome;

// Создаем объект appData
let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budjet: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    start: function() {

        this.budjet = salaryAmount.value;
        this.getExpenses();
        this.getAddIncome();
        this.getIncome();

        this.getAddExpenses();

        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getBudget();
        this.showResult();

        let allInputs = document.querySelectorAll('input[type=text]');
        allInputs.forEach(function(item) {
            item.disabled = true;
        })

        buttonStart.style.display = 'none';
        buttonCancel.style.display = 'block';


    },
    reset: function() {
        let allInputs = document.querySelectorAll('input[type=text]');
        allInputs.forEach(function(item) {
            item.value = '';
            item.disabled = false;
        })
        buttonStart.style.display = 'block';
        buttonCancel.style.display = 'none';
        buttonStart.disabled = true;


        expensesItems.forEach(function(item) {
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length > 1) {
                item.remove();
            } else if (expensesItems.length < 3) {
                btnExpensesAdd.style.display = 'block';
            }
        });

        incomeItems.forEach(function(item) {
            incomeItems = document.querySelectorAll('.income-items')
            if (incomeItems.length > 1) {
                item.remove();
            } else if (incomeItems.length < 3) {
                btnIncomeAdd.style.display = 'block';
            }
        });

        // btnExpensesAdd.style.display = 'block';
        // btnIncomeAdd.style.display = 'block';
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            btnExpensesAdd.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== "" && cashExpenses !== "") {
                this.expenses[itemExpenses] = cashExpenses;
            }
        })
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            btnIncomeAdd.style.display = 'none';
        }
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== "" && cashIncome !== "") {
                this.income[itemIncome] = cashIncome;
            }
        })
    },

    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function() {

        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        })
    },
    showResult: function() {
        budjetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ')
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();

        periodSelect.addEventListener('input', function() {
            incomePeriodValue.value = this.calcSavedMoney();
        });

    },
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getIncomeMonth: function() {
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    getBudget: function() {
        this.budgetMonth = Math.round(this.budjet - this.expensesMonth + this.incomeMonth);
        this.budgetDay = Math.round(this.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return targetAmount.value / this.budgetMonth
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
        for (let key in this) {
            console.log(this[key]);
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
        return this.budgetMonth * periodSelect.value
    },

};

buttonCancel.addEventListener('click', appData.reset)
buttonStart.disabled = true;
salaryAmount.addEventListener('input', function() {
    buttonStart.disabled = salaryAmount.value.trim() === ''
});

buttonStart.addEventListener('click', appData.start.bind(appData));
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', function() {
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value;
});



// Вывод на экран
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getTargetMonth();
appData.getStatusIncome();
// appData.showMetods();

// console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '))