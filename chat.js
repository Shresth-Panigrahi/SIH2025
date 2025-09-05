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
        },
        asthma: {
    keywords: ["asthma", "wheezing", "breathing difficulty"],
    description: "A chronic condition where the airways become inflamed and narrow, causing difficulty in breathing.",
    symptoms: ["Shortness of breath", "Chest tightness", "Wheezing", "Coughing"],
    prevention: ["Avoid allergens", "Take prescribed medication", "Maintain healthy lifestyle"],
    treatments: ["Inhalers", "Bronchodilators", "Steroids"]
},
allergy: {
    keywords: ["allergy", "allergic reaction", "hives", "sneezing"],
    description: "An immune system reaction to a foreign substance that’s not typically harmful.",
    symptoms: ["Sneezing", "Itchy eyes", "Rashes", "Swelling", "Hives"],
    prevention: ["Avoid allergens", "Take antihistamines", "Carry epinephrine if severe"],
    treatments: ["Antihistamines", "Corticosteroids", "Allergen immunotherapy"]
},
covid19: {
    keywords: ["covid", "coronavirus", "sars-cov-2", "fever", "cough"],
    description: "A contagious respiratory illness caused by the SARS-CoV-2 virus.",
    symptoms: ["Fever", "Dry cough", "Fatigue", "Loss of taste or smell", "Shortness of breath"],
    prevention: ["Vaccination", "Wear masks", "Hand hygiene", "Social distancing"],
    treatments: ["Rest", "Hydration", "Oxygen therapy if severe", "Antiviral medication if prescribed"]
},
obesity: {
    keywords: ["obesity", "overweight", "weight gain"],
    description: "A condition where excessive body fat increases the risk of health problems.",
    symptoms: ["Excess body fat", "Shortness of breath", "Fatigue", "Joint pain"],
    prevention: ["Balanced diet", "Regular exercise", "Avoid sedentary lifestyle"],
    treatments: ["Diet and exercise", "Behavioral therapy", "Medications", "Bariatric surgery in severe cases"]
},
migraine: {
    keywords: ["migraine", "headache", "migraine attack", "pulsating headache"],
    description: "A neurological condition characterized by intense headaches and sensitivity to light and sound.",
    symptoms: ["Severe headache", "Nausea", "Vomiting", "Sensitivity to light and sound"],
    prevention: ["Identify triggers", "Regular sleep", "Stress management"],
    treatments: ["Pain relievers", "Triptans", "Preventive medications"]
},
eczema: {
    keywords: ["eczema", "atopic dermatitis", "skin rash", "itchy skin"],
    description: "A condition that makes your skin red, inflamed, and itchy.",
    symptoms: ["Red patches", "Itching", "Dry skin", "Inflammation"],
    prevention: ["Moisturize regularly", "Avoid harsh soaps", "Avoid allergens"],
    treatments: ["Topical creams", "Antihistamines", "Steroids for severe cases"]
},
stroke: {
    keywords: ["stroke", "brain attack", "ischemic stroke", "hemorrhagic stroke"],
    description: "A medical emergency where blood flow to the brain is interrupted.",
    symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Vision problems", "Severe headache"],
    prevention: ["Control blood pressure", "Healthy diet", "Regular exercise", "Avoid smoking"],
    treatments: ["Emergency care", "Clot-dissolving medications", "Surgery if needed", "Rehabilitation"]
},
kidneyDisease: {
    keywords: ["kidney disease", "renal failure", "chronic kidney disease", "ckd"],
    description: "A condition where the kidneys lose their ability to filter waste from the blood.",
    symptoms: ["Fatigue", "Swelling", "Frequent urination", "Nausea", "Shortness of breath"],
    prevention: ["Control diabetes and hypertension", "Drink water", "Healthy diet"],
    treatments: ["Medications", "Dialysis", "Kidney transplant in severe cases"]
},
hepatitisB: {
    keywords: ["hepatitis b", "liver infection", "hbv"],
    description: "A viral infection that attacks the liver and can cause both acute and chronic disease.",
    symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Loss of appetite", "Nausea"],
    prevention: ["Vaccination", "Safe sex practices", "Avoid sharing needles"],
    treatments: ["Antiviral medications", "Regular monitoring", "Liver transplant in severe cases"]
},
insomnia: {
    keywords: ["insomnia", "sleep disorder", "can't sleep", "sleep deprivation"],
    description: "A sleep disorder where individuals have trouble falling or staying asleep.",
    symptoms: ["Difficulty falling asleep", "Waking up often", "Daytime fatigue", "Irritability"],
    prevention: ["Maintain sleep schedule", "Avoid caffeine before bed", "Reduce screen time"],
    treatments: ["Cognitive behavioral therapy", "Sleep hygiene", "Medication in severe cases"]
},
cold: {
    keywords: ["cold", "common cold", "runny nose", "sneezing"],
    description: "A viral infection of the upper respiratory tract.",
    symptoms: ["Sneezing", "Runny nose", "Sore throat", "Coughing", "Mild fever"],
    prevention: ["Wash hands frequently", "Avoid close contact with sick people", "Boost immunity"],
    treatments: ["Rest", "Fluids", "Over-the-counter cold medicine", "Warm fluids"]
},
flu: {
    keywords: ["flu", "influenza", "fever", "body ache"],
    description: "A contagious respiratory illness caused by influenza viruses.",
    symptoms: ["Fever", "Chills", "Muscle aches", "Cough", "Fatigue", "Headache"],
    prevention: ["Annual flu vaccination", "Hand hygiene", "Avoid sick contacts"],
    treatments: ["Rest", "Fluids", "Antiviral medications if prescribed"]
},
pneumonia: {
    keywords: ["pneumonia", "lung infection", "chest infection"],
    description: "An infection that inflames the air sacs in one or both lungs.",
    symptoms: ["Cough with phlegm", "Fever", "Shortness of breath", "Chest pain", "Fatigue"],
    prevention: ["Vaccination", "Good hygiene", "Avoid smoking"],
    treatments: ["Antibiotics for bacterial pneumonia", "Rest", "Fluids", "Oxygen therapy if severe"]
},
tuberculosis: {
    keywords: ["tuberculosis", "tb", "lung disease", "persistent cough"],
    description: "A serious infectious disease that mainly affects the lungs.",
    symptoms: ["Persistent cough", "Fever", "Night sweats", "Weight loss", "Fatigue"],
    prevention: ["BCG vaccination", "Avoid close contact with TB patients", "Good ventilation"],
    treatments: ["Antibiotic therapy (6-9 months)"]
},
malaria: {
    keywords: ["malaria", "mosquito bite", "fever", "chills"],
    description: "A mosquito-borne infectious disease caused by Plasmodium parasites.",
    symptoms: ["Fever", "Chills", "Sweating", "Headache", "Nausea", "Fatigue"],
    prevention: ["Use mosquito nets", "Insect repellents", "Avoid stagnant water"],
    treatments: ["Antimalarial medications", "Rest", "Hydration"]
},
cholera: {
    keywords: ["cholera", "diarrhea", "dehydration"],
    description: "An acute diarrheal infection caused by ingestion of Vibrio cholerae bacteria.",
    symptoms: ["Severe watery diarrhea", "Vomiting", "Dehydration", "Rapid heart rate"],
    prevention: ["Drink safe water", "Proper sanitation", "Cook food thoroughly"],
    treatments: ["Oral rehydration salts", "IV fluids", "Antibiotics if severe"]
},
hepatitis: {
    keywords: ["hepatitis", "liver infection", "hepatitis a", "hepatitis b", "hepatitis c"],
    description: "Inflammation of the liver caused by viral infection or other factors.",
    symptoms: ["Jaundice", "Fatigue", "Nausea", "Abdominal pain", "Dark urine"],
    prevention: ["Vaccination for A and B", "Safe food and water", "Avoid sharing needles"],
    treatments: ["Antiviral medication", "Rest", "Healthy diet"]
},
arthritis: {
    keywords: ["arthritis", "joint pain", "osteoarthritis", "rheumatoid arthritis"],
    description: "Inflammation of the joints causing pain and stiffness.",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Reduced range of motion"],
    prevention: ["Maintain healthy weight", "Exercise regularly", "Avoid joint injuries"],
    treatments: ["Pain relievers", "Anti-inflammatory medications", "Physical therapy"]
},
depression: {
    keywords: ["depression", "mental health", "sadness", "low mood"],
    description: "A mental health disorder characterized by persistently low mood and loss of interest.",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Difficulty concentrating"],
    prevention: ["Social support", "Regular exercise", "Stress management"],
    treatments: ["Therapy", "Medication", "Lifestyle changes"]
},
anemia: {
    keywords: ["anemia", "low hemoglobin", "iron deficiency"],
    description: "A condition in which the blood doesn't have enough healthy red blood cells.",
    symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness", "Cold hands and feet"],
    prevention: ["Iron-rich diet", "Vitamin supplements if needed", "Regular check-ups"],
    treatments: ["Iron supplements", "Diet changes", "Treatment of underlying cause"]
}

    },
    generalHealthTips: [
        "Drink at least 8 glasses of water daily to stay hydrated",
        "Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins",
        "Exercise for at least 30 minutes daily – include cardio, strength, and flexibility",
        "Maintain a regular sleep schedule and get 7-9 hours of sleep per night",
        "Practice good hygiene: wash hands frequently, brush teeth twice a day, shower regularly",
        "Limit intake of sugar, salt, and processed foods",
        "Avoid smoking and reduce alcohol consumption",
        "Manage stress through meditation, yoga, or deep-breathing exercises",
        "Take regular health check-ups and screenings",
        "Protect your skin from the sun by using sunscreen and wearing protective clothing",
        "Maintain a healthy weight according to your body type and age",
        "Stay socially connected to support mental and emotional health",
        "Avoid prolonged sitting; take breaks and move around during work",
        "Practice safe sex and follow vaccination schedules",
        "Keep your mental health in check by talking to a professional if needed",
        "Stay mentally active with reading, puzzles, or learning new skills",
        "Limit caffeine intake, especially in the evening, to improve sleep quality",
        "Include fiber-rich foods in your diet to support digestion",
        "Practice good posture to avoid back and neck problems",
        "Avoid exposure to pollutants and maintain clean indoor air"
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

function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');

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

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

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