// Elements
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Health knowledge base
const healthKnowledgeBase = {
    diseases: {
        diabetes: {
            keywords: ["diabetes", "blood sugar", "high sugar"],
            description: "A chronic condition that affects how your body processes blood sugar.",
            symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
            prevention: ["Healthy diet", "Regular exercise", "Maintain healthy weight"],
            treatments: ["Insulin therapy", "Oral medications", "Lifestyle changes"]
        },
        hypertension: {
            keywords: ["hypertension", "high blood pressure", "bp"],
            description: "A condition in which blood pressure in the arteries is persistently elevated.",
            symptoms: ["Headaches", "Shortness of breath", "Nosebleeds"],
            prevention: ["Limit salt intake", "Regular exercise", "Avoid alcohol & smoking"],
            treatments: ["Medication", "Diet & lifestyle modifications"]
        }
    },
    generalHealthTips: [
        "Drink plenty of water",
        "Eat a balanced diet",
        "Exercise regularly",
        "Get enough sleep",
        "Practice good hygiene"
    ]
};
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    for (const disease in healthKnowledgeBase.diseases) {
        const info = healthKnowledgeBase.diseases[disease];
        for (const keyword of info.keywords) {
            if (msg.includes(keyword)) {
                return `${disease.charAt(0).toUpperCase() + disease.slice(1)}:\n` +
                       `Description: ${info.description}\n` +
                       `Symptoms: ${info.symptoms.join(', ')}\n` +
                       `Prevention: ${info.prevention.join(', ')}\n` +
                       `Treatments: ${info.treatments.join(', ')}`;
            }
        }
    }

    if (msg.includes("health tips") || msg.includes("tips for health")) {
        return `General Health Tips:\n- ${healthKnowledgeBase.generalHealthTips.join('\n- ')}`;
    }

    return "🤖 I'm your AI medical assistant. Could you please provide more details or specify a disease?";
}

// Add message to chat box
function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');

    // Timestamp
    const timeSpan = document.createElement('span');
    timeSpan.style.fontSize = '0.7rem';
    timeSpan.style.opacity = '0.6';
    timeSpan.style.display = 'block';
    const now = new Date();
    timeSpan.textContent = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    msgDiv.textContent = message;
    msgDiv.appendChild(timeSpan);

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message on button click
sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    chatInput.value = '';

    setTimeout(() => {
        const botReply = getBotResponse(message);
        addMessage(botReply, 'bot');
    }, 500);
});

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

// Voice input
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser doesn't support voice input.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript; // updated field
    };

    recognition.onerror = function(event) {
        console.error("Voice input error:", event.error);
    };
}