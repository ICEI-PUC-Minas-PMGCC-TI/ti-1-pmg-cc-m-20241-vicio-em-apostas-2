let maxLimit = 0;
let currentTotal = 0;
let startDate;

function startTracking() {
    const maxValueInput = document.getElementById('max-value');
    maxLimit = parseFloat(maxValueInput.value);
    if (isNaN(maxLimit) || maxLimit <= 0) {
        alert('Por favor, insira um valor máximo válido.');
        return;
    }

    startDate = new Date();
    currentTotal = 0;

    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.deposit-section').style.display = 'block';
    updateTotalDisplay();
}

function addDeposit() {
    const depositValueInput = document.getElementById('deposit-value');
    const depositValue = parseFloat(depositValueInput.value);
    if (isNaN(depositValue) || depositValue <= 0) {
        alert('Por favor, insira um valor de depósito válido.');
        return;
    }

    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    if (daysDiff >= 30) {
        resetTracking();
        return;
    }

    currentTotal += depositValue;
    updateTotalDisplay();

    if (currentTotal > maxLimit) {
        document.getElementById('warning').textContent = 'Limite excedido! Pare de depositar para não comprometer sua renda.';
    } else {
        document.getElementById('warning').textContent = '';
    }

    depositValueInput.value = '';
}

function updateTotalDisplay() {
    document.getElementById('current-total').textContent = `Total Atual: R$ ${currentTotal.toFixed(2)}`;
}

function resetTracking() {
    currentTotal = 0;
    document.getElementById('warning').textContent = '';
    updateTotalDisplay();
    alert('Os 30 dias acabaram. O saldo foi zerado. Você pode começar novamente.');

    document.querySelector('.input-section').style.display = 'block';
    document.querySelector('.deposit-section').style.display = 'none';
}
