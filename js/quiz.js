// js/quiz.js

// Global variables for quiz state
let quizData = []; // Stores all quiz questions, options, answers, explanations, and userAnswer
let currentQuestionIndex = 0;
let quizStarted = false; // Flag to indicate if a quiz is active
let currentQuizTopic = ""; // Stores the topic of the generated quiz for filename suggestion
let currentQuizLanguage = "English"; // Stores the language of the generated quiz
let currentQuizDifficulty = "HSSC exam level"; // Stores the difficulty of the generated quiz
let currentQuizNumQuestions = 5; // Stores the number of questions generated

// Get DOM elements for quiz
const inputSelectionSection = document.getElementById("input-selection-section");
const quizDisplaySection = document.getElementById("quiz-display-section");
const quizResultSection = document.getElementById("quiz-result-section");
const jsonPasteArea = document.getElementById("json-paste-area");
const loadPastedQuizButton = document.getElementById("load-pasted-quiz-button");
const jsonUploadInput = document.getElementById("json-upload");
const fileStatusParagraph = document.getElementById("file-status");
const topicInput = document.getElementById("topic-input");
const languageSelect = document.getElementById("language-select");
const numQuestionsInput = document.getElementById("num-questions-input");
const difficultySelect = document.getElementById("difficulty-select");
const apiKeyInput = document.getElementById("api-key-input");
const generateQuizButton = document.getElementById("generate-quiz-button");
const loadingIndicator = document.getElementById("loading-indicator");
const generationStatus = document.getElementById("generation-status");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionNumberSpan = document.getElementById("current-question-number");
const totalQuestionsSpan = document.getElementById("total-questions");
const feedbackSection = document.getElementById("feedback-section");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const prevQuestionButton = document.getElementById("prev-question-button");
const nextQuestionButton = document.getElementById("next-question-button");
const finalScoreSpan = document.getElementById("final-score");
const totalQuestionsResultSpan = document.getElementById("total-questions-result");
const historyFilenameInput = document.getElementById("history-filename-input");
const downloadHistoryButton = document.getElementById("download-history-button");
const generatePracticeButton = document.getElementById("generate-practice-button");
const restartQuizButton = document.getElementById("restart-quiz-button");

/**
 * Validates the structure of the parsed quiz data.
 * Ensures each question has 'question', 'options' (array of strings), 'answer' (string),
 * and optionally 'explanation' (string).
 * @param {Array} data - The parsed JSON array.
 * @returns {boolean} True if data is valid, false otherwise.
 */
function validateQuizData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return false;
  }
  return data.every(
    (q) =>
      typeof q.question === "string" &&
      Array.isArray(q.options) &&
      q.options.length >= 2 &&
      q.options.every((o) => typeof o === "string") &&
      typeof q.answer === "string" &&
      q.options.includes(q.answer) && // Ensure answer is one of the options
      (typeof q.explanation === "string" || q.explanation === undefined || q.explanation === null)
  );
}

/**
 * Initializes and starts the quiz with the provided quiz data.
 * Sets up the initial state and displays the first question.
 * @param {Array} data - The validated quiz data.
 * @param {string} topic - The topic of the quiz (for practice questions).
 * @param {string} language - The language of the quiz.
 * @param {string} difficulty - The difficulty of the quiz.
 * @param {number} numQuestions - The number of questions in the quiz.
 */
function startQuiz(data, topic, language, difficulty, numQuestions) {
  // Ensure each question has a userAnswer property, initialized to null if not present
  quizData = data.map((q) => ({
    ...q,
    userAnswer: q.userAnswer !== undefined ? q.userAnswer : null,
  }));
  quizStarted = true;
  if (inputSelectionSection) inputSelectionSection.classList.add("hidden");
  if (quizDisplaySection) quizDisplaySection.classList.remove("hidden");
  if (quizResultSection) quizResultSection.classList.add("hidden"); // Ensure result section is hidden
  currentQuestionIndex = 0;

  // Store quiz metadata for practice questions and history download
  currentQuizTopic = topic || "";
  currentQuizLanguage = language || "English";
  currentQuizDifficulty = difficulty || "HSSC exam level";
  currentQuizNumQuestions = numQuestions || quizData.length;

  loadQuestion();
}

// Event listener for JSON file upload
if (jsonUploadInput) {
  jsonUploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      fileStatusParagraph.textContent = `File chosen: ${file.name}`;
      const reader = new FileReader();
      reader.onload = (e) => {
        // Place the file content into the paste area
        jsonPasteArea.value = e.target.result;
      };
      reader.readAsText(file);
    } else {
      fileStatusParagraph.textContent = "No file chosen";
      jsonPasteArea.value = ""; // Clear paste area if no file selected
    }
  });
}

// Event listener for Load Quiz from Input button (handles both paste and file content)
if (loadPastedQuizButton) {
  loadPastedQuizButton.addEventListener("click", () => {
    const jsonString = jsonPasteArea.value.trim();
    if (!jsonString) {
      showMessageBox("Info", "Please paste your quiz JSON or upload a file.");
      return;
    }

    try {
      const loadedObject = JSON.parse(jsonString);
      let loadedQuizData = [];
      let loadedTopic = "Loaded Quiz"; // Default if not found
      let loadedLanguage = "English"; // Default
      let loadedDifficulty = "HSSC exam level"; // Default
      let loadedNumQuestions = 0;

      // Check if the loaded JSON is an object with metadata + questions, or just an array of questions
      if (loadedObject.quizData && Array.isArray(loadedObject.quizData)) {
        loadedQuizData = loadedObject.quizData;
        loadedTopic = loadedObject.topic || loadedTopic;
        loadedLanguage = loadedObject.language || loadedLanguage;
        loadedDifficulty = loadedObject.difficulty || loadedDifficulty;
        loadedNumQuestions = loadedObject.numQuestions || loadedQuizData.length;
      } else if (Array.isArray(loadedObject)) {
        loadedQuizData = loadedObject;
        loadedNumQuestions = loadedQuizData.length;
      } else {
        showMessageBox(
          "Error",
          "Invalid quiz data structure. Expected an array of questions or an object with 'quizData' array."
        );
        quizData = [];
        return;
      }

      if (validateQuizData(loadedQuizData)) {
        startQuiz(
          loadedQuizData,
          loadedTopic,
          loadedLanguage,
          loadedDifficulty,
          loadedNumQuestions
        );
        showMessageBox("Success", `Quiz loaded! Topic: ${loadedTopic}`);
      } else {
        showMessageBox(
          "Error",
          "Invalid quiz data structure. Please ensure it follows the correct format (question, options, answer, explanation)."
        );
        quizData = []; // Clear data if invalid
      }
    } catch (error) {
      showMessageBox(
        "Error",
        "Failed to parse JSON. Please ensure the content is valid JSON. Error: " + error.message
      );
      quizData = []; // Clear data if parsing fails
    }
  });
}

/**
 * Handles the generation of quiz questions using the Gemini API.
 * @param {string} topic - The topic for the quiz.
 * @param {string} language - The language for the quiz.
 * @param {number} numQuestions - The number of questions to generate.
 * @param {string} difficulty - The difficulty level.
 * @param {string} apiKey - The Gemini API key.
 * @param {string[]} [incorrectQuestionTexts] - Optional array of texts of incorrectly answered questions for targeted practice.
 */
async function generateQuiz(
  topic,
  language,
  numQuestions,
  difficulty,
  apiKey,
  incorrectQuestionTexts = []
) {
  // Show loading indicator
  if (loadingIndicator) loadingIndicator.style.display = "block";
  if (generationStatus) generationStatus.classList.remove("hidden");
  if (generateQuizButton) generateQuizButton.disabled = true;
  if (loadPastedQuizButton) loadPastedQuizButton.disabled = true;
  if (jsonPasteArea) jsonPasteArea.disabled = true;
  if (jsonUploadInput) jsonUploadInput.disabled = true;

  if (topicInput) topicInput.disabled = true;
  if (languageSelect) languageSelect.disabled = true;
  if (numQuestionsInput) numQuestionsInput.disabled = true;
  if (difficultySelect) difficultySelect.disabled = true;
  if (apiKeyInput) apiKeyInput.disabled = true;

  try {
    let chatHistory = [];
    let prompt = `Generate ${numQuestions} unique multiple-choice questions in ${language} about the topic "${topic}". All questions should be at a "${difficulty}" level, suitable for HSSC Group C competitive exams.

**Goals:**

1. **Subtopic & Concept Diversity:**
   - Cover a variety of subtopics and dimensions of "${topic}" relevant to its subject.
   - Include both **core concepts** and **less-frequently-tested but important facts**.
   - If "${topic}" is theoretical (e.g., grammar, polity, science), include definition, classification, rules, exceptions, examples.
   - If "${topic}" is numerical (e.g., math, reasoning), include formula-based, application, and error-prone trick questions.

2. **Avoid Repetition:**
   - Do NOT repeat question structure or content within the same set.
   - Go beyond standard textbook examples or surface-level facts.

3. **Varied Question Styles:**
   - Use a mix of:
     - Concept-based
     - Application/problem-solving
     - Exception-type
     - "Which of the following is true/false?"
     - Match the following
     - Cause-effect or chronology
   - Avoid predictable patterns like always starting with “What is…” or “Who…”

4. **High-Utility Explanations:**
   - For each question:
     - **Explain why the answer is correct** using concise logic, formula, rule, or fact.
     - **Briefly address why the other options are incorrect** (if possible).
     - Include **exam-relevant keywords**, short tricks, formulas, historical years, grammatical rules, etc.
   - Keep tone **exam-focused**, not conversational.

**Output Format (JSON only):**
[
  {
    "question": "Your question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "Correct Option Text",
    "explanation": "Concise explanation with key facts, formula, logic, or comparison."
  },
  ...
]
`;

    if (incorrectQuestionTexts.length > 0) {
      const incorrectTopicsSummary = incorrectQuestionTexts
        .map((q) => `"${q.substring(0, Math.min(q.length, 50))}..."`)
        .join(", ");
      prompt = `Generate ${numQuestions} multiple-choice quiz questions in ${language} at a "${difficulty}" level. Focus on concepts related to the following questions which were answered incorrectly: ${incorrectTopicsSummary}. Each question should have 4 options, one correct answer, and an explanation. Provide the output as a JSON array of objects. Each object must have 'question' (string), 'options' (array of strings), 'answer' (string, matching one of the options), and 'explanation' (string).`;
    }

    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              question: { type: "STRING" },
              options: {
                type: "ARRAY",
                items: { type: "STRING" },
              },
              answer: { type: "STRING" },
              explanation: { type: "STRING" },
            },
            propertyOrdering: ["question", "options", "answer", "explanation"],
          },
        },
      },
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      const jsonResponse = result.candidates[0].content.parts[0].text;
      const generatedData = JSON.parse(jsonResponse);

      if (validateQuizData(generatedData)) {
        startQuiz(generatedData, topic, language, difficulty, numQuestions); // Pass all metadata
      } else {
        showMessageBox(
          "Error",
          "Generated quiz data is not in the expected format. Please try a different topic or regenerate."
        );
      }
    } else {
      showMessageBox(
        "Error",
        "Failed to generate quiz questions. No valid response from AI. Check your API key and network connection. Response: " +
          JSON.stringify(result)
      );
    }
  } catch (error) {
    console.error("Error generating quiz:", error);
    showMessageBox(
      "Error",
      "An error occurred during quiz generation. Please check your API key, network connection, or try a different topic. Error: " +
        error.message
    );
  } finally {
    // Hide loading indicator and re-enable buttons
    if (loadingIndicator) loadingIndicator.style.display = "none";
    if (generationStatus) generationStatus.classList.add("hidden");
    if (generateQuizButton) generateQuizButton.disabled = false;
    if (loadPastedQuizButton) loadPastedQuizButton.disabled = false;
    if (jsonPasteArea) jsonPasteArea.disabled = false;
    if (jsonUploadInput) jsonUploadInput.disabled = false;

    if (topicInput) topicInput.disabled = false;
    if (languageSelect) languageSelect.disabled = false;
    if (numQuestionsInput) numQuestionsInput.disabled = false;
    if (difficultySelect) difficultySelect.disabled = false;
    if (apiKeyInput) apiKeyInput.disabled = false;
  }
}

// Event listener for Generate Quiz button
if (generateQuizButton) {
  generateQuizButton.addEventListener("click", async () => {
    const topic = topicInput.value.trim();
    const language = languageSelect.value;
    const numQuestions = parseInt(numQuestionsInput.value, 10);
    const difficulty = difficultySelect.value;
    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
      showMessageBox("Error", "Please enter your Gemini API Key to generate questions.");
      return;
    }
    if (!topic) {
      showMessageBox("Info", "Please enter a topic to generate questions.");
      return;
    }
    if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > 100) {
      showMessageBox("Info", "Please enter a valid number of questions between 1 and 100.");
      return;
    }

    saveApiKey(apiKey); // Save API key to local storage

    await generateQuiz(topic, language, numQuestions, difficulty, apiKey);
  });
}

/**
 * Loads and displays the current question and its options.
 * Handles displaying user's previous answers and feedback if available.
 */
function loadQuestion() {
  if (!optionsContainer) return; // Exit if element not found

  optionsContainer.innerHTML = ""; // Clear previous options
  if (feedbackSection) feedbackSection.classList.add("hidden");
  if (explanationBox) explanationBox.classList.add("hidden");

  // Update navigation button states
  if (prevQuestionButton) prevQuestionButton.disabled = currentQuestionIndex === 0;
  if (nextQuestionButton)
    nextQuestionButton.textContent =
      currentQuestionIndex === quizData.length - 1 ? "Show Results" : "Next";

  if (currentQuestionIndex < quizData.length) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (questionText) questionText.textContent = currentQuestion.question;
    if (currentQuestionNumberSpan) currentQuestionNumberSpan.textContent = currentQuestionIndex + 1;
    if (totalQuestionsSpan) totalQuestionsSpan.textContent = quizData.length;

    // Check if an answer was previously selected for this question
    const previouslyAnswered = currentQuestion.userAnswer !== null;

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      button.setAttribute("data-option", option);

      if (previouslyAnswered) {
        button.classList.add("disabled"); // Disable all if already answered
        if (option === currentQuestion.userAnswer) {
          button.classList.add("selected"); // Highlight user's previous choice
          if (option === currentQuestion.answer) {
            button.classList.add("correct");
          } else {
            button.classList.add("incorrect");
          }
        }
        // Always highlight the correct answer if the question has been answered
        if (option === currentQuestion.answer && option !== currentQuestion.userAnswer) {
          button.classList.add("correct");
        }
      } else {
        // Only add event listener if not previously answered
        button.addEventListener("click", () => selectOption(button));
      }
      optionsContainer.appendChild(button);
    });

    // If previously answered, show feedback immediately
    if (previouslyAnswered) {
      showFeedback(currentQuestion);
    }
  } else {
    // Quiz finished if navigating past the last question
    showResults();
  }
}

/**
 * Handles the selection of an option, provides immediate feedback, and stores the answer.
 * @param {HTMLElement} clickedButton - The button element that was clicked.
 */
function selectOption(clickedButton) {
  const currentQuestion = quizData[currentQuestionIndex];
  const userAnswer = clickedButton.getAttribute("data-option");
  const correctAnswer = currentQuestion.answer;

  // Store the user's answer
  currentQuestion.userAnswer = userAnswer;

  // Disable all option buttons and remove their event listeners
  Array.from(optionsContainer.children).forEach((button) => {
    button.classList.add("disabled");
    // Remove existing event listeners to prevent multiple calls
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
  });

  // Apply styling based on correctness
  if (userAnswer === correctAnswer) {
    clickedButton.classList.add("correct");
  } else {
    clickedButton.classList.add("incorrect");
    // Highlight the correct answer if the user was wrong
    Array.from(optionsContainer.children).forEach((button) => {
      if (button.getAttribute("data-option") === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }

  // Show feedback (explanation)
  showFeedback(currentQuestion);
}

/**
 * Displays the explanation and feedback section.
 * @param {object} question - The current question object.
 */
function showFeedback(question) {
  if (question.explanation && explanationText && explanationBox) {
    explanationText.textContent = question.explanation;
    explanationBox.classList.remove("hidden");
  } else if (explanationBox) {
    explanationBox.classList.add("hidden");
  }
  if (feedbackSection) feedbackSection.classList.remove("hidden");
}

// Event listener for Previous Question button
if (prevQuestionButton) {
  prevQuestionButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  });
}

// Event listener for Next Question button
if (nextQuestionButton) {
  nextQuestionButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      // If it's the last question, show results
      showResults();
    }
  });
}

/**
 * Displays the final quiz results.
 * Calculates the score and shows relevant buttons (download, practice).
 */
function showResults() {
  // Calculate final score based on stored answers
  const correctAnswersCount = quizData.filter((q) => q.userAnswer === q.answer).length;
  const incorrectAnswersCount = quizData.length - correctAnswersCount;

  if (quizDisplaySection) quizDisplaySection.classList.add("hidden");
  if (quizResultSection) quizResultSection.classList.remove("hidden");
  if (finalScoreSpan) finalScoreSpan.textContent = correctAnswersCount;
  if (totalQuestionsResultSpan) totalQuestionsResultSpan.textContent = quizData.length;

  // Set default filename for history download
  const defaultFilename =
    currentQuizTopic && currentQuizTopic !== "Loaded Quiz"
      ? `${currentQuizTopic.replace(/\s+/g, "_").toLowerCase()}_quiz_history.json`
      : "quiz_history.json";
  if (historyFilenameInput) historyFilenameInput.value = defaultFilename;

  // Determine if practice button should be shown and what text it should have
  if (generatePracticeButton) {
    if (quizData.length > 0) {
      generatePracticeButton.classList.remove("hidden");
      if (incorrectAnswersCount > 0 && currentQuizTopic && currentQuizTopic !== "Loaded Quiz") {
        // Targeted practice if mistakes and a specific topic is known
        generatePracticeButton.textContent = "Generate Practice Questions (Based on Mistakes)";
      } else if (currentQuizTopic && currentQuizTopic !== "Loaded Quiz") {
        // General practice if no mistakes but a specific topic is known
        generatePracticeButton.textContent = "Generate More Questions on This Topic";
      } else {
        // General practice if topic is 'Loaded Quiz' or unknown (from manual paste/upload without topic metadata)
        generatePracticeButton.textContent = "Generate New Questions (Requires Topic Input)";
      }
    } else {
      generatePracticeButton.classList.add("hidden"); // Hide if no quiz data
    }
  }
}

/**
 * Triggers the download of the current quiz history as a JSON file.
 * Now includes quiz metadata (topic, language, difficulty, numQuestions).
 */
if (downloadHistoryButton) {
  downloadHistoryButton.addEventListener("click", () => {
    if (quizData.length === 0) {
      showMessageBox("Info", "No quiz data to save!");
      return;
    }

    const dataToSave = {
      topic: currentQuizTopic,
      language: currentQuizLanguage,
      difficulty: currentQuizDifficulty,
      numQuestions: currentQuizNumQuestions,
      quizData: quizData, // The actual array of questions with user answers
    };

    const filename = historyFilenameInput.value.trim() || "quiz_history.json";

    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the URL object

    showMessageBox(
      "Success",
      `Your quiz history has been downloaded as '${filename}'. You can load it later using the 'Upload JSON File' option.`
    );
  });
}

/**
 * Generates new practice questions based on the current quiz's topic
 * and specifically targets concepts from incorrectly answered questions.
 */
if (generatePracticeButton) {
  generatePracticeButton.addEventListener("click", async () => {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
      showMessageBox("Error", "Please enter your Gemini API Key to generate practice questions.");
      return;
    }

    let topicToGenerate = currentQuizTopic;
    // If the current quiz topic is generic ('Loaded Quiz') or empty,
    // we should try to use the topic from the input field for general generation.
    if (!topicToGenerate || topicToGenerate === "Loaded Quiz") {
      topicToGenerate = topicInput.value.trim(); // Get topic from input field
      if (!topicToGenerate) {
        showMessageBox(
          "Info",
          "Please enter a topic in the 'Generate Quiz by Topic' section to generate new questions."
        );
        return;
      }
    }

    const language = languageSelect.value; // Use current language setting
    const numQuestions = parseInt(numQuestionsInput.value, 10); // Use current num questions setting
    const difficulty = difficultySelect.value; // Use current difficulty setting

    const incorrectQuestions = quizData.filter((q) => q.userAnswer !== q.answer);
    const incorrectQuestionTexts = incorrectQuestions.map((q) => q.question);

    if (
      incorrectQuestionTexts.length > 0 &&
      currentQuizTopic &&
      currentQuizTopic !== "Loaded Quiz"
    ) {
      // Targeted practice if mistakes and a specific topic is known
      showMessageBox(
        "Generating...",
        `Generating ${numQuestions} practice questions on "${topicToGenerate}" focusing on areas you found challenging...`
      );
      await generateQuiz(
        topicToGenerate,
        language,
        numQuestions,
        difficulty,
        apiKey,
        incorrectQuestionTexts
      );
    } else {
      // General practice if no mistakes OR topic is generic/unknown
      showMessageBox(
        "Generating...",
        `Generating ${numQuestions} new questions on "${topicToGenerate}"...`
      );
      await generateQuiz(topicToGenerate, language, numQuestions, difficulty, apiKey);
    }

    if (quizResultSection) quizResultSection.classList.add("hidden");
    if (quizDisplaySection) quizDisplaySection.classList.remove("hidden");
  });
}

// Event listener for Restart Quiz button
if (restartQuizButton) {
  restartQuizButton.addEventListener("click", () => {
    if (quizResultSection) quizResultSection.classList.add("hidden");
    if (inputSelectionSection) inputSelectionSection.classList.remove("hidden"); // Show the main input selection screen
    if (quizDisplaySection) quizDisplaySection.classList.add("hidden"); // Ensure quiz display is hidden
    if (jsonPasteArea) jsonPasteArea.value = ""; // Clear text area
    if (jsonUploadInput) jsonUploadInput.value = ""; // Clear file input
    if (fileStatusParagraph) fileStatusParagraph.textContent = "No file chosen"; // Reset file status
    if (topicInput) topicInput.value = ""; // Clear topic input
    if (languageSelect) languageSelect.value = "English"; // Reset language to default
    if (numQuestionsInput) numQuestionsInput.value = "5"; // Reset number of questions to default
    if (difficultySelect) difficultySelect.value = "HSSC exam level"; // Reset difficulty to default
    quizData = []; // Clear quiz data
    currentQuestionIndex = 0;
    quizStarted = false;
    currentQuizTopic = ""; // Clear the current topic
    currentQuizLanguage = "English";
    currentQuizDifficulty = "HSSC exam level";
    currentQuizNumQuestions = 5;
    if (generatePracticeButton) generatePracticeButton.classList.add("hidden"); // Hide practice button
  });
}

// Initial setup on quiz page load
document.addEventListener("DOMContentLoaded", () => {
  // Load API key for quiz section
  loadApiKey(apiKeyInput);

  // Ensure initial display state is correct for quiz page
  if (inputSelectionSection) inputSelectionSection.classList.remove("hidden");
  if (quizDisplaySection) quizDisplaySection.classList.add("hidden");
  if (quizResultSection) quizResultSection.classList.add("hidden");
});
