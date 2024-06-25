function getAnswer(questionId) {
    const answers = {
        1: "Olá, uma ótima opção seria estabelecer limites financeiros e encontrar outros hobbies.",
        2: "Essa vontade de jogar a todo momento acontece pela sensação que o usuário tem antes, durante e depois de jogar.",
        3: "Você pode acabar perdendo um dinheiro que vai te fazer muita falta."
    };
    const botAnswerElement = document.createElement("div");
    botAnswerElement.className = "bot-answer";
    botAnswerElement.innerText = answers[questionId];

    document.getElementById("bot-answers-container").appendChild(botAnswerElement);
}

function sendMessage() {
    const messageBox = document.getElementById("chat-box");
    const userMessage = document.getElementById("user-message").value;

    if (userMessage.trim() === "") return;

    const messageElement = document.createElement("div");
    messageElement.className = "user-message";
    messageElement.innerText = userMessage;

    messageBox.appendChild(messageElement);
    document.getElementById("user-message").value = "";
    messageBox.scrollTop = messageBox.scrollHeight;

    // Salvar mensagem no armazenamento local para persistência
    saveMessage(userMessage);
}

// Função para salvar mensagens no armazenamento local
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Função para carregar mensagens do armazenamento local
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    const messageBox = document.getElementById("chat-box");
    messages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.className = "user-message";
        messageElement.innerText = message;
        messageBox.appendChild(messageElement);
    });
    messageBox.scrollTop = messageBox.scrollHeight;
}

// Carregar mensagens ao carregar a página
document.addEventListener("DOMContentLoaded", loadMessages);