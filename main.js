'use strict';

const buttonStart = document.getElementById('start'),
    buttonCancel = document.getElementById('cancel'),
    btnIncomeAdd = document.getElementsByTagName('button')[0],
    btnExpensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.getElementById('deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budjetMonthValue = document.getElementsByTagName('input')[13],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.getElementsByClassName('target-amount')[0],
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent')

let incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item')
    // Функция возвращает true если переданное значение число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
    constructor() {
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budjet = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }

    start() {
        console.log(this);
        this.budjet = salaryAmount.value;
        this.getExpenses();
        this.getAddIncome();
        this.getIncome();
        this.getAddExpenses();
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getInfoDeposit();
        this.getBudget();
        this.showResult();
        let allInputs = document.querySelectorAll('input[type=text]');
        allInputs.forEach(function(item) {
            item.disabled = true;
        })
        buttonStart.style.display = 'none';
        buttonCancel.style.display = 'block';
    }

    reset() {
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
    }

    addExpensesBlock() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            btnExpensesAdd.style.display = 'none';
        }
    }

    getExpenses() {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== "" && cashExpenses !== "") {
                this.expenses[itemExpenses] = cashExpenses;
            }
        })
    }

    addIncomeBlock() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            btnIncomeAdd.style.display = 'none';
        }
    }

    getIncome() {
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== "" && cashIncome !== "") {
                this.income[itemIncome] = cashIncome;
            }
        })
    }

    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    }

    getAddIncome() {
        additionalIncomeItem.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        })
    }

    showResult() {
        budjetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ')
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = this.calcSavedMoney();
        });
    }

    getExpensesMonth() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    }

    getIncomeMonth() {
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    }

    getBudget() {
        const monthDeposit = (this.percentDeposit / 100) * this.moneyDeposit;
        this.budgetMonth = Math.round(this.budjet - this.expensesMonth + this.incomeMonth + monthDeposit);
        this.budgetDay = Math.round(this.budgetMonth / 30);
    }

    getTargetMonth() {
        return targetAmount.value / this.budgetMonth
    }

    getStatusIncome() {
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
    }

    showMetods() {
        console.log('Наша программа включает в себя данные: ');
        for (let key in this) {
            console.log(this[key]);
        }
    }

    getInfoDeposit() {
        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }

    changePercent() {
        const valueSelect = this.value;
        if (valueSelect == 'other') {
            // Домашнее
        } else {
            depositPercent.value = valueSelect;
        }
    }

    calcSavedMoney() {
        return this.budgetMonth * periodSelect.value
    }

    depositHandler() {
        if (depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent);
        }
    }

    eventListener() {
        buttonCancel.addEventListener('click', appData.reset.bind(appData))
        buttonStart.disabled = true;
        salaryAmount.addEventListener('input', function() {
            buttonStart.disabled = salaryAmount.value.trim() === ''
        });

        buttonStart.addEventListener('click', appData.start.bind(appData));
        btnExpensesAdd.addEventListener('click', appData.addExpensesBlock.bind(appData));
        btnIncomeAdd.addEventListener('click', appData.addIncomeBlock.bind(appData));
        periodSelect.addEventListener('input', function() {
            let periodAmount = document.querySelector('.period-amount');
            periodAmount.textContent = periodSelect.value;
        });
        depositCheck.addEventListener('change', this.depositHandler.bind(this));
    }

};

const appData = new AppData();
appData.eventListener();