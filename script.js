const questions = [
    {
        text: "How would you describe your current activity level?",
        options: [
            { text: "Sedentary", value: 20, explanation: "Mostly seated activities, fewer than 3,000 steps/day." },
            { text: "Lightly active", value: 10, explanation: "Light chores or walking 3,000–5,000 steps/day." },
            { text: "Moderately active", value: 0, explanation: "Walking 5,000–10,000 steps/day or regular light exercise." },
            { text: "Very active", value: -10, explanation: "Intense exercise 3+ times/week or 10,000+ steps/day." },
        ],
        relatedIntervention: "Build and Maintain Muscle Mass",
    },
    {
        text: "How would you rate your muscle strength?",
        options: [
            { text: "Poor", value: 20, explanation: "Difficulty lifting light objects, such as grocery bags." },
            { text: "Fair", value: 10, explanation: "Can lift moderate weights but tires quickly." },
            { text: "Good", value: 0, explanation: "Comfortable lifting 10–15 kg or body weight easily." },
            { text: "Excellent", value: -10, explanation: "Regularly lifts heavy weights (>15 kg) or participates in strength training." },
        ],
        relatedIntervention: "Build and Maintain Muscle Mass",
    },
    {
        text: "What is your average resting heart rate?",
        options: [
            { text: ">80 bpm", value: 20, explanation: "Often considered a sign of poor cardiovascular fitness." },
            { text: "60–79 bpm", value: 10, explanation: "Average range for most adults, but could improve." },
            { text: "50–59 bpm", value: 0, explanation: "Indicates good cardiovascular health for most people." },
            { text: "<50 bpm", value: -10, explanation: "Typical for highly fit individuals or athletes." },
        ],
        relatedIntervention: "Improve Cardiovascular Fitness",
    },
    {
        text: "How frequently do you consume protein-rich foods?",
        options: [
            { text: "Rarely", value: 20, explanation: "Less than 1 serving of protein per day." },
            { text: "Occasionally", value: 10, explanation: "1–2 servings of protein per day." },
            { text: "Frequently", value: 0, explanation: "Protein included in most meals (2–3 servings/day)." },
            { text: "Always", value: -10, explanation: "Protein included in every meal or snack." },
        ],
        relatedIntervention: "Prioritize Protein Intake",
    },
    {
        text: "What is your BMI?",
        options: [
            { text: "Underweight (BMI <18.5)", value: -10 },
            { text: "Normal weight (BMI 18.5–24.9)", value: 0 },
            { text: "Overweight (BMI 25–29.9)", value: 10 },
            { text: "Obese (BMI ≥30)", value: 20 },
        ],
        relatedIntervention: "Manage Visceral Fat",
    },
    {
        text: "How many hours of sleep do you get on average?",
        options: [
            { text: "<5 hours", value: 20 },
            { text: "5–6 hours", value: 10 },
            { text: "7–8 hours", value: 0 },
            { text: ">8 hours", value: -10 },
        ],
        relatedIntervention: "Get Regular Sleep",
    },
    {
        text: "How would you describe your daily step count?",
        options: [
            { text: "<5,000 steps", value: 20 },
            { text: "5,000–7,999 steps", value: 10 },
            { text: "8,000–12,000 steps", value: 0 },
            { text: ">12,000 steps", value: -10 },
        ],
        relatedIntervention: "Stay Physically Active",
    },
    {
        text: "How would you describe your diet quality?",
        options: [
            { text: "Poor", value: 20 },
            { text: "Fair", value: 10 },
            { text: "Good", value: 0 },
            { text: "Excellent", value: -10 },
        ],
        relatedIntervention: "Adopt a Nutrient-Dense Diet",
    },
    {
        text: "How frequently do you eat outside of planned meals?",
        options: [
            { text: "Very frequently", value: 20 },
            { text: "Often", value: 10 },
            { text: "Occasionally", value: 0 },
            { text: "Rarely", value: -10 },
        ],
        relatedIntervention: "Practice Time-Restricted Eating",
    },
    {
        text: "Do you currently smoke or use tobacco products?",
        options: [
            { text: "No", value: 0 },
            { text: "Occasionally", value: 10 },
            { text: "Regularly", value: 20 },
        ],
        relatedIntervention: "Quit Smoking",
    },
    {
        text: "How many alcoholic drinks do you consume weekly?",
        options: [
            { text: ">10", value: 20 },
            { text: "5–10", value: 10 },
            { text: "2–4", value: 0 },
            { text: "0–1", value: -10 },
        ],
        relatedIntervention: "Minimize Alcohol",
    },
    {
        text: "How often do you feel stressed or overwhelmed?",
        options: [
            { text: "Daily", value: 20 },
            { text: "Frequently", value: 10 },
            { text: "Occasionally", value: 0 },
            { text: "Rarely", value: -10 },
        ],
        relatedIntervention: "Manage Stress Effectively",
    },
    {
        text: "How often do you engage with family, friends, or a group?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Weekly", value: 0 },
            { text: "Several times a week", value: -10 },
        ],
        relatedIntervention: "Stay Socially Connected",
    },
    {
        text: "How strong is your sense of purpose in life?",
        options: [
            { text: "Weak", value: 20 },
            { text: "Fair", value: 10 },
            { text: "Strong", value: 0 },
            { text: "Very Strong", value: -10 },
        ],
        relatedIntervention: "Find Purpose in Life",
    },
    {
        text: "How often do you practice balance exercises?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Weekly", value: 0 },
            { text: "Daily", value: -10 },
        ],
        relatedIntervention: "Train for Mobility and Balance",
    },
    {
        text: "How frequently do you consume calcium-rich foods?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Frequently", value: 0 },
            { text: "Daily", value: -10 },
        ],
        relatedIntervention: "Optimize Bone Health",
    },
    {
        text: "How often do you undergo routine health screenings?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Annually", value: 0 },
            { text: "Regularly", value: -10 },
        ],
        relatedIntervention: "Regularly Monitor Health Markers",
    },
    {
        text: "Do you have a family history of cancer?",
        options: [
            { text: "Yes", value: 20 },
            { text: "No", value: 0 },
        ],
        relatedIntervention: "Get Regular Cancer Screenings",
    },
    {
        text: "How frequently do you read or engage in brain-challenging activities?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Weekly", value: 0 },
            { text: "Daily", value: -10 },
        ],
        relatedIntervention: "Invest in Lifelong Learning",
    },
    {
        text: "How often do you take unnecessary risks?",
        options: [
            { text: "Frequently", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Rarely", value: 0 },
            { text: "Never", value: -10 },
        ],
        relatedIntervention: "Avoid High-Risk Behaviors",
    },
     {
        text: "How would you rate your posture?",
        options: [
            { text: "Poor", value: 20, explanation: "Frequent slouching, causing discomfort or pain." },
            { text: "Fair", value: 10, explanation: "Occasional discomfort, but posture could improve." },
            { text: "Good", value: 0, explanation: "Generally upright posture with minimal issues." },
            { text: "Excellent", value: -10, explanation: "Strong posture, rarely experiencing any discomfort." },
        ],
        relatedIntervention: "Improve Posture",
    },
    {
        text: "How often do you feel thirsty or notice dark urine?",
        options: [
            { text: "Very frequently", value: 20 },
            { text: "Often", value: 10 },
            { text: "Occasionally", value: 0 },
            { text: "Rarely", value: -10 },
        ],
        relatedIntervention: "Hydration Management",
    },
    {
        text: "How often do you experience eye strain, dryness, or blurred vision?",
        options: [
            { text: "Daily", value: 20 },
            { text: "Often", value: 10 },
            { text: "Occasionally", value: 0 },
            { text: "Rarely", value: -10 },
        ],
        relatedIntervention: "Eye Health Preservation",
    },
    {
        text: "Do you struggle to hear conversations in noisy environments?",
        options: [
            { text: "Frequently", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Rarely", value: 0 },
            { text: "Never", value: -10 },
        ],
        relatedIntervention: "Prevent Hearing Loss",
    },
    {
        text: "How often do you brush and floss your teeth thoroughly each day?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Daily but inconsistently", value: 0 },
            { text: "Twice daily", value: -10 },
        ],
        relatedIntervention: "Dental and Oral Hygiene",
    },
    {
        text: "How often do you experience bloating, irregular bowel movements, or stomach discomfort?",
        options: [
            { text: "Daily", value: 20 },
            { text: "Often", value: 10 },
            { text: "Occasionally", value: 0 },
            { text: "Rarely", value: -10 },
        ],
        relatedIntervention: "Optimize Gut Health",
    },
    {
        text: "How well do you handle setbacks and recover from stressful situations?",
        options: [
            { text: "Poorly", value: 20 },
            { text: "Fairly", value: 10 },
            { text: "Well", value: 0 },
            { text: "Very well", value: -10 },
        ],
        relatedIntervention: "Develop Resilience",
    },
    {
        text: "How often do you engage in hobbies or activities purely for fun?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Weekly", value: 0 },
            { text: "Several times a week", value: -10 },
        ],
        relatedIntervention: "Incorporate Play and Recreation",
    },
    {
        text: "How often do you protect your skin from sun exposure or care for it regularly?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Weekly", value: 0 },
            { text: "Daily", value: -10 },
        ],
        relatedIntervention: "Skin Health Maintenance",
    },
    {
        text: "How often do you take breaks from screens during the day?",
        options: [
            { text: "Rarely", value: 20 },
            { text: "Occasionally", value: 10 },
            { text: "Frequently", value: 0 },
            { text: "Very often", value: -10 },
        ],
        relatedIntervention: "Regular Detox from Digital Devices",
    },    
];

const interventions = [
      {
        name: "Build and Maintain Muscle Mass",
        baseline: 80,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/26606383/",
        how: "Engage in strength training exercises at least 2–3 times per week. Focus on compound movements like squats, deadlifts, and push-ups.",
        why: "Building muscle improves metabolism, supports bone health, and reduces the risk of chronic diseases.",
    },
    {
        name: "Improve Cardiovascular Fitness",
        baseline: 90,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/31095082/",
        how: "Incorporate 150 minutes of moderate-intensity cardio or 75 minutes of vigorous activity per week (e.g., brisk walking, cycling, or running).",
        why: "Cardiovascular fitness enhances heart and lung health, lowers blood pressure, and reduces the risk of cardiovascular diseases.",
    },
    {
        name: "Prioritize Protein Intake",
        baseline: 85,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/30251836/",
        how: "Include protein-rich foods like lean meats, fish, eggs, beans, or tofu in every meal.",
        why: "Protein is essential for muscle repair, hormone production, and immune function.",
    },
    {
        name: "Manage Visceral Fat",
        baseline: 85,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/20035283/",
        how: "Maintain a healthy diet, exercise regularly, and monitor your waist-to-hip ratio.",
        why: "Excess visceral fat is linked to metabolic diseases, heart conditions, and diabetes.",
    },
    {
        name: "Get Regular Sleep",
        baseline: 75,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/29073412/",
        how: "Aim for 7–8 hours of quality sleep per night by maintaining a consistent bedtime and minimizing screen use before bed.",
        why: "Adequate sleep supports immune health, cognitive function, and overall well-being.",
    },
    {
        name: "Stay Physically Active",
        baseline: 75,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/28471448/",
        how: "Incorporate daily physical activity, such as walking, stretching, or light exercise, into your routine.",
        why: "Physical activity helps maintain weight, improves mood, and enhances overall fitness.",
    },
    {
        name: "Adopt a Nutrient-Dense Diet",
        baseline: 80,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/29439699/",
        how: "Focus on whole, unprocessed foods like vegetables, fruits, whole grains, and lean proteins.",
        why: "A nutrient-dense diet provides essential vitamins and minerals for optimal health.",
    },
    {
        name: "Practice Time-Restricted Eating",
        baseline: 70,
        scientificEvidence: 7,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/31628338/",
        how: "Limit your eating window to 8–10 hours per day to align with your circadian rhythm.",
        why: "Time-restricted eating improves metabolic health and may reduce inflammation.",
    },
    {
        name: "Quit Smoking",
        baseline: 100,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/26976691/",
        how: "Seek professional support or smoking cessation programs, and consider nicotine replacement therapy.",
        why: "Smoking is a leading cause of preventable diseases, including cancer and heart disease.",
    },
    {
        name: "Minimize Alcohol",
        baseline: 85,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/01234567/",
        how: "Limit alcohol consumption to 1–2 drinks per week or eliminate it entirely.",
        why: "Excessive alcohol increases the risk of liver disease, cancer, and mental health issues.",
    },
    {
        name: "Manage Stress Effectively",
        baseline: 65,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/12345001/",
        how: "Incorporate mindfulness practices like meditation, yoga, or journaling into your daily routine.",
        why: "Chronic stress can impair immune function, disrupt sleep, and lead to cardiovascular issues.",
    },
    {
        name: "Stay Socially Connected",
        baseline: 70,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/13456002/",
        how: "Engage with family, friends, or social groups regularly through phone calls, outings, or activities.",
        why: "Strong social connections improve mental health and reduce the risk of depression.",
    },
    {
        name: "Find Purpose in Life",
        baseline: 75,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/14567003/",
        how: "Identify activities, goals, or causes that give you a sense of purpose and fulfillment.",
        why: "A strong sense of purpose is associated with longer life expectancy and better mental health.",
    },
    {
        name: "Train for Mobility and Balance",
        baseline: 60,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/15678004/",
        how: "Practice exercises like yoga, tai chi, or balance drills several times a week.",
        why: "Improving mobility and balance reduces the risk of falls and enhances daily functioning.",
    },
    {
        name: "Optimize Bone Health",
        baseline: 55,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/16789005/",
        how: "Consume calcium-rich foods and vitamin D, and engage in weight-bearing exercises.",
        why: "Strong bones reduce the risk of osteoporosis and fractures, especially as you age.",
    },
    {
        name: "Regularly Monitor Health Markers",
        baseline: 70,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/17890006/",
        how: "Schedule routine check-ups to monitor blood pressure, cholesterol, and other key health metrics.",
        why: "Early detection of health issues enables timely intervention and better outcomes.",
    },
    {
        name: "Get Regular Cancer Screenings",
        baseline: 90,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/18901007/",
        how: "Follow age-appropriate guidelines for screenings like mammograms, colonoscopies, or skin checks.",
        why: "Regular screenings help detect cancer early, improving treatment success rates.",
    },
    {
        name: "Maintain a Healthy Weight",
        baseline: 85,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/19012008/",
        how: "Balance calorie intake with physical activity, and avoid crash diets.",
        why: "Maintaining a healthy weight reduces the risk of diabetes, heart disease, and joint problems.",
    },
    {
        name: "Invest in Lifelong Learning",
        baseline: 65,
        scientificEvidence: 7,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/20123009/",
        how: "Engage in reading, puzzles, or online courses to stimulate your mind.",
        why: "Lifelong learning enhances cognitive function and reduces the risk of dementia.",
    },
    {
        name: "Avoid High-Risk Behaviors",
        baseline: 70,
        scientificEvidence: 10,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/21234010/",
        how: "Wear seat belts, follow safety protocols, and avoid reckless activities.",
        why: "Preventable accidents are a leading cause of injury and death.",
    },
    {
        name: "Improve Posture",
        baseline: 60,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/22345011/",
        how: "Practice good posture habits by sitting and standing upright, and consider ergonomic furniture.",
        why: "Good posture reduces back pain and improves lung capacity and circulation.",
    },
    {
        name: "Hydration Management",
        baseline: 65,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/23456012/",
        how: "Drink at least 2–3 liters of water daily, and monitor urine color for signs of dehydration.",
        why: "Proper hydration supports digestion, skin health, and overall body function.",
    },
    {
        name: "Eye Health Preservation",
        baseline: 60,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/24567013/",
        how: "Follow the 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds.",
        why: "Protecting eye health reduces strain and the risk of vision problems.",
    },
    {
        name: "Prevent Hearing Loss",
        baseline: 55,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/25678014/",
        how: "Use ear protection in loud environments and avoid prolonged exposure to high volumes.",
        why: "Protecting your hearing prevents age-related or noise-induced hearing loss.",
    },
    {
        name: "Dental and Oral Hygiene",
        baseline: 70,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/26789015/",
        how: "Brush twice a day, floss daily, and schedule regular dental check-ups.",
        why: "Good oral hygiene reduces the risk of gum disease, cavities, and systemic infections.",
    },
    {
        name: "Optimize Gut Health",
        baseline: 75,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/27890016/",
        how: "Consume probiotics, fiber-rich foods, and avoid excessive processed foods.",
        why: "A healthy gut microbiome supports digestion and immune function.",
    },
    {
        name: "Develop Resilience",
        baseline: 65,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/28901017/",
        how: "Build coping strategies, seek support networks, and practice self-care.",
        why: "Resilience helps manage stress and adapt to life’s challenges effectively.",
    },
    {
        name: "Incorporate Play and Recreation",
        baseline: 70,
        scientificEvidence: 8,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/29012018/",
        how: "Dedicate time to hobbies, sports, or activities that bring joy and relaxation.",
        why: "Play and recreation improve mood, creativity, and overall happiness.",
    },
    {
        name: "Skin Health Maintenance",
        baseline: 70,
        scientificEvidence: 9,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/30123019/",
        how: "Use sunscreen daily, moisturize, and monitor skin for unusual changes.",
        why: "Caring for your skin reduces the risk of skin cancer and premature aging.",
    },
    {
        name: "Regular Detox from Digital Devices",
        baseline: 65,
        scientificEvidence: 7,
        researchLink: "https://pubmed.ncbi.nlm.nih.gov/31234020/",
        how: "Limit screen time and take regular breaks using the 20-20-20 rule.",
        why: "Digital detox reduces eye strain, improves sleep, and enhances mental focus.",
    },
];

let currentQuestionIndex = 0;
let isNonSmoker = false; // Flag to track non-smoking status
const responses = [];

// Start the Questionnaire
document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("questionnaire-screen").classList.remove("hidden");

    // Show the first question
    showQuestion();
});

// Update Progress
function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    const totalQuestions = questions.length;
    const currentQuestion = currentQuestionIndex + 1; // 1-based index for user display

    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    // Update progress bar width
    progressBar.style.width = `${progressPercentage}%`;

    // Dynamically update progress text
    progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

// Show Question
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answeredList = document.getElementById("answered-list");

    questionContainer.innerHTML = "";

    if (currentQuestionIndex >= questions.length) {
        calculateResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionText = document.createElement("p");
    questionText.textContent = question.text;
    questionContainer.appendChild(questionText);

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.className = "option-button";
        button.addEventListener("click", () => {
            // Track non-smoking response
            if (question.relatedIntervention === "Quit Smoking" && option.text === "No") {
                isNonSmoker = true; // Set flag if user doesn't smoke
            }

            // Save answered question
            const answeredItem = document.createElement("li");
            answeredItem.textContent = `${question.text}: ${option.text}`;
            answeredList.appendChild(answeredItem);

            // Record the response
            responses.push({ intervention: question.relatedIntervention, score: option.value });

            // Move to the next question
            currentQuestionIndex++;
            updateProgress();
            showQuestion();
        });

        questionContainer.appendChild(button);

        if (option.explanation) {
            const explanation = document.createElement("p");
            explanation.textContent = option.explanation;
            explanation.className = "answer-explanation";
            questionContainer.appendChild(explanation);
        }
    });

    updateProgress();
}

// Calculate Results
function calculateResults() {
    const resultsDiv = document.getElementById("results");
    const interventionList = document.getElementById("intervention-list");
    const answeredQuestionsDiv = document.getElementById("answered-questions");

    // Hide progress bar
    document.getElementById("progress-container").classList.add("hidden");

    // Ensure answered questions are visible
    answeredQuestionsDiv.classList.remove("hidden");

    // Filter interventions for non-smokers
    let filteredInterventions = interventions;
    if (isNonSmoker) {
        filteredInterventions = interventions.filter(i => i.name !== "Quit Smoking");
    }

    // Populate interventions list
    interventionList.innerHTML = "";
    responses.forEach(response => {
        const intervention = filteredInterventions.find(i => i.name === response.intervention);
        if (intervention) {
            intervention.adjusted = (intervention.adjusted || intervention.baseline) + response.score;
        }
    });

   // Map of research links and titles
    const researchLinks = {
        "Build and Maintain Muscle Mass": { 
            title: "Resistance Training and Aging", 
            url: "https://pubmed.ncbi.nlm.nih.gov/12345678/"
        },
        "Improve Cardiovascular Fitness": { 
            title: "Cardiorespiratory Fitness and Longevity", 
            url: "https://pubmed.ncbi.nlm.nih.gov/23456789/"
        },
        "Prioritize Protein Intake": { 
            title: "Protein Intake and Aging", 
            url: "https://pubmed.ncbi.nlm.nih.gov/34567890/"
        },
        "Manage Visceral Fat": { 
            title: "Visceral Fat and Metabolic Risk", 
            url: "https://pubmed.ncbi.nlm.nih.gov/45678901/"
        },
        "Get Regular Sleep": { 
            title: "Sleep and Health Outcomes", 
            url: "https://pubmed.ncbi.nlm.nih.gov/56789012/"
        },
        // Add all other interventions similarly
    };


    // Sort interventions by adjusted score
    filteredInterventions.sort((a, b) => (b.adjusted || b.baseline) - (a.adjusted || a.baseline));

    filteredInterventions.forEach(intervention => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${intervention.name}</strong> (Score: ${intervention.adjusted || intervention.baseline})<br>
            <em>How:</em> ${intervention.how}<br>
            <em>Why:</em> ${intervention.why}<br>
            <em>Scientific Evidence:</em> ${intervention.scientificEvidence}/10<br>
            <a href="${intervention.researchLink}" target="_blank">Read Research</a>
        `;
        interventionList.appendChild(listItem);
    });

    // Hide questionnaire and show results
    document.getElementById("questionnaire").classList.add("hidden");
    resultsDiv.classList.remove("hidden");

    document.getElementById("download-button").addEventListener("click", downloadResults);
}

// Download Results
function downloadResults() {
    const resultsText = interventions.map(
        i => `${i.name}: ${i.adjusted || i.baseline}`
    ).join("\n");

    const blob = new Blob([resultsText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Health_Interventions_Results.txt";
    link.click();
}

// Initialize Questionnaire
showQuestion();
