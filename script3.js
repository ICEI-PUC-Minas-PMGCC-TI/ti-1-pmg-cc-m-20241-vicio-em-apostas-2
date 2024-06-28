// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expenseForm');
    const expenseInput = document.getElementById('expense');
    const alertDiv = document.getElementById('alert');
    const historyList = document.getElementById('expenseHistory');
    const ctx = document.getElementById('expenseChart').getContext('2d');

    let expenses = [];

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Gastos',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const expense = parseFloat(expenseInput.value);

        if (!isNaN(expense)) {
            expenses.push(expense);
            updateChart();
            showAlert(expense);
            updateHistory(expense);
            expenseInput.value = '';
        }
    });

    function updateChart() {
        chart.data.labels.push(`Gasto ${expenses.length}`);
        chart.data.datasets[0].data.push(expenses[expenses.length - 1]);
        chart.update();
    }

    function showAlert(expense) {
        if (expense <= 50) {
            alertDiv.textContent = 'Gasto Baixo';
            alertDiv.style.color = 'green';
        } else if (expense <= 100) {
            alertDiv.textContent = 'Gasto Moderado';
            alertDiv.style.color = 'orange';
        } else {
            alertDiv.textContent = 'Gasto Alto';
            alertDiv.style.color = 'red';
        }
    }

    function updateHistory(expense) {
        const listItem = document.createElement('li');
        listItem.textContent = `Gasto: R$ ${expense.toFixed(2)}`;
        historyList.appendChild(listItem);
    }
});
