// js/notes.js

// Syllabus data
const syllabusData = {
  "General Awareness": `Questions will be designed to test the ability of the candidate's General Awareness of the environment and its relevance to the society. The questions will also be designed to test knowledge of the current events and of such matters of everyday observation as may be expected of an examinee appearing for the test. The test will include questions relating to India and neighboring countries, especially pertaining to:
    <ul>
        <li data-topic="History">History</li>
        <li data-topic="Indian Polity & Constitution">Indian Polity & Constitution</li>
        <li data-topic="Art & Culture">Art & Culture</li>
        <li data-topic="Geography">Geography</li>
        <li data-topic="Economics">Economics</li>
        <li data-topic="General Policy">General Policy</li>
        <li data-topic="National/International Organizations /Institutions">National/International Organizations /Institutions</li>
        <li data-topic="Environment">Environment</li>
        <li data-topic="Globalization">Globalization</li>
        <li data-topic="Climate">Climate</li>
        <li data-topic="Events">Events</li>
        <li data-topic="General Science">General Science</li>
    </ul>`,
  "Computer Knowledge": `
    <h3>Computer Basics:</h3>
    <ul>
        <li data-topic="Organization of a Computer">Organization of a computer</li>
        <li data-topic="Central Processing Unit (CPU)">Central Processing Unit (CPU)</li>
        <li data-topic="Input/Output Devices">Input/output devices</li>
        <li data-topic="Computer Memory">Computer memory</li>
        <li data-topic="Memory Organization">Memory organization</li>
        <li data-topic="Backup Devices">Back-up devices</li>
        <li data-topic="PORTS">PORTS</li>
        <li data-topic="Windows Explorer">Windows Explorer</li>
        <li data-topic="Keyboard Shortcuts">Keyboard shortcuts</li>
        <li data-topic="Windows Operating System">Windows Operating system including basics of Microsoft Office like MS Word, MS Excel and PowerPoint.</li>
    </ul>
    <h3>Working with Internet and E-mails:</h3>
    <ul>
        <li data-topic="Web Browse & Searching">Web Browse & Searching</li>
        <li data-topic="Downloading & Uploading">Downloading & Uploading</li>
        <li data-topic="Managing an Email Account">Managing an E-mail Account</li>
    </ul>`,
  Reasoning: `The syllabus includes questions of both verbal and non-verbal types. Test may include questions on:
    <ul>
        <li data-topic="Semantic Analogy">Semantic Analogy</li>
        <li data-topic="Symbolic Operations">Symbolic operations</li>
        <li data-topic="Symbolic Number Analogy">Symbolic Number Analogy</li>
        <li data-topic="Trends">Trends</li>
        <li data-topic="Figural Analogy">Figural Analogy</li>
        <li data-topic="Space Orientation">Space Orientation</li>
        <li data-topic="Semantic Classification">Semantic Classification</li>
        <li data-topic="Observation">Observation</li>
        <li data-topic="Relationship">Relationship</li>
        <li data-topic="Concepts">Concepts</li>
        <li data-topic="Venn Diagrams">Venn Diagrams</li>
        <li data-topic="Symbolic, Number Classification">Symbolic, Number Classification</li>
        <li data-topic="Drawing Inferences">Drawing inferences</li>
        <li data-topic="Figural Classification">Figural Classification</li>
        <li data-topic="Punched Hole Pattern-Folding & Unfolding">Punched hole pattern-folding & unfolding</li>
        <li data-topic="Semantic Series">Semantic Series</li>
        <li data-topic="Figural Pattern Folding and Completion">Figural Pattern folding and completion</li>
        <li data-topic="Number Series">Number series</li>
        <li data-topic="Embedded Figures">Embedded figures</li>
        <li data-topic="Figural Series">Figural series</li>
        <li data-topic="Critical Thinking">Critical thinking</li>
        <li data-topic="Problem Solving">Problem solving</li>
        <li data-topic="Emotional Intelligence">Emotional intelligence</li>
        <li data-topic="Arithmetical Number Series">Arithmetical number series</li>
        <li data-topic="Arithmetical Reasoning">Arithmetical reasoning</li>
        <li data-topic="Word Building">Word building</li>
        <li data-topic="Social Intelligence">Social intelligence</li>
        <li data-topic="Coding and Decoding">Coding and decoding</li>
        <li data-topic="Other Reasoning Topics">Other sub-topics etc.</li>
    </ul>`,
  "Quantitative Ability": `The test will cover:
    <ul>
        <li data-topic="Number System">Number System including questions on Simplification, Decimals, Fractions, Relationship between numbers</li>
        <li data-topic="LCM & HCF">L.C.M., H.C.F.</li>
        <li data-topic="Ratio & Proportion">Ratio & Proportion</li>
        <li data-topic="Percentage">Percentage</li>
        <li data-topic="Roots">Roots</li>
        <li data-topic="Average">Average</li>
        <li data-topic="Profit & Loss">Profit & Loss</li>
        <li data-topic="Discount">Discount</li>
        <li data-topic="Simple & Compound Interest">Simple & Compound Interest</li>
        <li data-topic="Mensuration">Mensuration</li>
        <li data-topic="Partnership Business">Partnership business</li>
        <li data-topic="Mixture and Allegation">Mixture and Allegation</li>
        <li data-topic="Time & Work">Time & Work</li>
        <li data-topic="Time & Distance">Time & Distance</li>
        <li data-topic="Tables & Graphs">Tables & Graphs</li>
        <li data-topic="Trigonometry">Trigonometry</li>
        <li data-topic="Basic Algebra">Basic Algebra</li>
        <li data-topic="Geometry">Geometry etc.</li>
    </ul>`,
  "English Language": `
    <ul>
        <li data-topic="Spot the Error">Spot the Error</li>
        <li data-topic="Fill in the Blanks">Fill in the Blanks</li>
        <li data-topic="Synonyms/Homonyms">Synonyms/ Homonyms</li>
        <li data-topic="Antonyms">Antonyms</li>
        <li data-topic="Spellings/Detecting Mis-spelt Words">Spellings/ Detecting mis-spelt words</li>
        <li data-topic="Idioms & Phrases">Idioms & Phrases</li>
        <li data-topic="One Word Substitution">One word substitution</li>
        <li data-topic="Improvement of Sentences">Improvement of Sentences</li>
        <li data-topic="Active/Passive Voice of Verbs">Active/ Passive Voice of Verbs</li>
        <li data-topic="Conversion into Direct/Indirect Narration">Conversion into Direct/ Indirect narration</li>
        <li data-topic="Shuffling of Sentence Parts">Shuffling of Sentence parts</li>
        <li data-topic="Shuffling of Sentences in a Passage">Shuffling of Sentences in a passage</li>
        <li data-topic="Tenses">Tenses</li>
        <li data-topic="Cloze Passage">Cloze Passage</li>
        <li data-topic="Comprehension Passage">Comprehension Passage etc.</li>
    </ul>`,
  "Hindi Language": `
    <ul>
        <li data-topic="शब्द">शब्द</li>
        <li data-topic="अलंकार">अलंकार</li>
        <li data-topic="विकारीशब्द">विकारीशब्द</li>
        <li data-topic="वाक्य">वाक्य</li>
        <li data-topic="अविकारीशब्द">अविकारीशब्द</li>
        <li data-topic="पद">पद</li>
        <li data-topic="पदबंध">पदबंध</li>
        <li data-topic="मुहावरें">मुहावरें</li>
        <li data-topic="लोकोक्तियां">लोकोक्तियां</li>
        <li data-topic="संधि">संधि</li>
        <li data-topic="उपसर्ग">उपसर्ग</li>
        <li data-topic="प्रत्यय">प्रत्यय</li>
        <li data-topic="समास">समास</li>
        <li data-topic="पर्यायवाची">पर्यायवाची</li>
        <li data-topic="विलोम व अनेकार्थीशब्द">विलोम व अनेकार्थीशब्द</li>
        <li data-topic="अयोगवाह">अयोगवाह</li>
        <li data-topic="वाक्य शोधन">वाक्य शोधन</li>
        <li data-topic="निपात ( अवधारक)">निपात ( अवधारक)</li>
        <li data-topic="विरामचिन्ह">विरामचिन्ह</li>
        <li data-topic="संबंधबोधक">संबंधबोधक</li>
        <li data-topic="अनेकशब्दों के लिए एक शब्द">अनेकशब्दों के लिए एक शब्द</li>
        <li data-topic="एकार्थकशब्द युग्मशब्द">एकार्थकशब्द युग्मशब्द</li>
        <li data-topic="वर्तनी (शब्द एंववाक्य शुद्धिकरण )">वर्तनी (शब्द एंववाक्य शुद्धिकरण )</li>
        <li data-topic="वर्ण">वर्ण</li>
        <li data-topic="स्वर">स्वर</li>
        <li data-topic="व्यंजन">व्यंजन</li>
        <li data-topic="विदेशी ध्वनियाँ">विदेशी ध्वनियाँ</li>
        <li data-topic="संज्ञा">संज्ञा</li>
        <li data-topic="सर्वनाम">सर्वनाम</li>
        <li data-topic="विशेषण">विशेषण</li>
        <li data-topic="क्रिया विशेषण">क्रिया विशेषण</li>
        <li data-topic="समुच्चय बोधक">समुच्चय बोधक</li>
        <li data-topic="विस्मय बोधक">विस्मय बोधक</li>
        <li data-topic="वचन">वचन</li>
        <li data-topic="लिंग">लिंग</li>
        <li data-topic="कारक">कारक</li>
        <li data-topic="काल">काल</li>
        <li data-topic="तदभव तत्सम शब्द">तदभव तत्सम शब्द</li>
    </ul>`,
  "General Knowledge of Haryana": `General awareness which includes:
    <ul>
        <li data-topic="History of Haryana">History</li>
        <li data-topic="Literature of Haryana">Literature</li>
        <li data-topic="Geography of Haryana">Geography</li>
        <li data-topic="Economy of Haryana">Economy</li>
        <li data-topic="Civics of Haryana">Civics</li>
        <li data-topic="Polity of Haryana">Polity</li>
        <li data-topic="Environment of Haryana">Environment</li>
        <li data-topic="Art of Haryana">Art</li>
        <li data-topic="Culture of Haryana">Culture</li>
        <li data-topic="Customs & Norms of Haryana">Customs, Norms</li>
        <li data-topic="Society of Haryana">Society</li>
        <li data-topic="Current Affairs of Haryana">Current Affairs</li>
        <li data-topic="Events of Haryana">Events etc. of Haryana</li>
    </ul>`,
};

// Notes section elements
const subjectSelect = document.getElementById("subject-select");
const syllabusDisplay = document.getElementById("syllabus-display");
const syllabusTitle = document.getElementById("syllabus-title");
const syllabusText = document.getElementById("syllabus-text");

// AI Notes Generation elements
const notesTopicInput = document.getElementById("notes-topic-input");
const notesLanguageSelect = document.getElementById("notes-language-select");
const notesLengthSelect = document.getElementById("notes-length-select");
const notesApiKeyInput = document.getElementById("notes-api-key-input");
const checkTopicButton = document.getElementById("check-topic-button"); // Renamed generateNotesButton
const notesLoadingIndicator = document.getElementById("notes-loading-indicator");
const notesGenerationStatus = document.getElementById("notes-generation-status");
const generatedNotesDisplay = document.getElementById("generated-notes-display");
const generatedNotesTitle = document.getElementById("generated-notes-title");
const generatedNotesText = document.getElementById("generated-notes-text");

// New elements for topic breakdown
const topicPartsSection = document.getElementById("topic-parts-section");
const partsPromptText = document.getElementById("parts-prompt-text");
const topicPartsContainer = document.getElementById("topic-parts-container");
const generateFullNotesButton = document.getElementById("generate-full-notes-button");
const backToPartsButton = document.getElementById("back-to-parts-button");
const backToTopicInputButton = document.getElementById("back-to-topic-input-button");
const startNewNotesButton = document.getElementById("start-new-notes-button");

// State variables for notes flow
let currentMainTopic = "";
let currentLanguage = "English";
let currentLength = "standard";
let currentSubject = "none"; // To store the selected subject for context
let currentParts = []; // To store the parts if topic is broken down

// Helper to manage UI state
function setNotesUIState(state) {
  // Hide all main content areas first
  notesTopicInput.closest("div").style.display = "none"; // Hide initial input section
  topicPartsSection.classList.add("hidden"); // Hide parts section
  generatedNotesDisplay.classList.add("hidden"); // Hide generated notes display

  // Enable/disable main input fields by default, re-enable as needed by state
  notesTopicInput.disabled = false;
  notesLanguageSelect.disabled = false;
  notesLengthSelect.disabled = false;
  notesApiKeyInput.disabled = false;
  if (subjectSelect) subjectSelect.disabled = false;

  // Reset button text
  checkTopicButton.textContent = "Check Topic / Generate Notes";

  // Manage loading indicator visibility
  if (state === "loading") {
    notesLoadingIndicator.style.display = "block";
    notesGenerationStatus.classList.remove("hidden");
  } else {
    notesLoadingIndicator.style.display = "none";
    notesGenerationStatus.classList.add("hidden");
  }

  switch (state) {
    case "initial":
      notesTopicInput.closest("div").style.display = "block"; // Show initial input
      checkTopicButton.style.display = "block";
      checkTopicButton.disabled = false;
      break;
    case "loading":
      checkTopicButton.disabled = true;
      notesTopicInput.disabled = true;
      notesLanguageSelect.disabled = true;
      notesLengthSelect.disabled = true;
      notesApiKeyInput.disabled = true;
      if (subjectSelect) subjectSelect.disabled = true;
      break;
    case "parts_available":
      notesTopicInput.closest("div").style.display = "block"; // Keep input visible but disabled
      notesTopicInput.disabled = true;
      notesLanguageSelect.disabled = true;
      notesLengthSelect.disabled = true;
      notesApiKeyInput.disabled = true;
      if (subjectSelect) subjectSelect.disabled = true;

      checkTopicButton.style.display = "none"; // Hide this button
      topicPartsSection.classList.remove("hidden"); // Show parts section
      backToTopicInputButton.style.display = "block";
      generateFullNotesButton.style.display = "block";
      break;
    case "notes_displayed":
      notesTopicInput.closest("div").style.display = "none"; // Hide input section
      topicPartsSection.classList.add("hidden"); // Hide parts section
      generatedNotesDisplay.classList.remove("hidden"); // Show generated notes
      backToPartsButton.style.display = currentParts.length > 0 ? "block" : "none"; // Show back to parts if parts existed
      startNewNotesButton.style.display = "block";
      break;
    default:
      setNotesUIState("initial"); // Fallback to initial
      break;
  }
}

// Function to generate content (reused for topic breakdown and notes generation)
async function generateContentFromAI(prompt, apiKey, responseMimeType = "text/plain") {
  const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
  const payload = {
    contents: chatHistory,
    generationConfig: {
      responseMimeType: responseMimeType,
      temperature: 0.2,
      topP: 0.9,
    },
  };
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return result;
}

// Event listener for subject selection in notes page
if (subjectSelect) {
  subjectSelect.addEventListener("change", () => {
    currentSubject = subjectSelect.value;
    syllabusDisplay.classList.add("hidden");
    generatedNotesDisplay.classList.add("hidden");
    topicPartsSection.classList.add("hidden"); // Hide parts when subject changes

    if (currentSubject === "none") {
      syllabusTitle.textContent = "";
      syllabusText.innerHTML = "";
    } else {
      const syllabusContent = syllabusData[currentSubject];
      if (syllabusContent) {
        syllabusTitle.textContent = `${currentSubject} Syllabus`;
        syllabusText.innerHTML = syllabusContent;
        syllabusDisplay.classList.remove("hidden");
        addSyllabusTopicClickHandlers(); // Now called after content is loaded
      } else {
        syllabusTitle.textContent = "";
        syllabusText.innerHTML = "Syllabus not available for this subject.";
      }
      notesTopicInput.value = ""; // Clear topic input on new subject selection
    }
    setNotesUIState("initial"); // Reset UI to initial state
  });
}

// Function to make syllabus topics clickable
function addSyllabusTopicClickHandlers() {
  // Select all <li> elements that have the data-topic attribute within syllabus-content
  const syllabusListItems = document.querySelectorAll(".syllabus-content li[data-topic]");
  syllabusListItems.forEach((item) => {
    item.classList.add("clickable-syllabus-topic"); // Add a class for styling
    // Remove existing listener to prevent duplicates before adding new one
    item.removeEventListener("click", handleSyllabusTopicClick);
    item.addEventListener("click", handleSyllabusTopicClick);
  });
}

function handleSyllabusTopicClick(event) {
  const topicText = event.target.getAttribute("data-topic");
  if (topicText) {
    notesTopicInput.value = topicText;
    showMessageBox(
      "Info",
      `Topic "${topicText}" pre-filled in input. Click 'Check Topic / Generate Notes' to proceed.`
    );
    // Optionally, auto-trigger checkTopicButton if desired for seamless flow
    // checkTopicButton.click();
  }
}

// Check Topic / Generate Notes Button Handler
if (checkTopicButton) {
  checkTopicButton.addEventListener("click", async () => {
    currentMainTopic = notesTopicInput.value.trim();
    currentLanguage = notesLanguageSelect.value;
    currentLength = notesLengthSelect.value;
    const apiKey = notesApiKeyInput.value.trim();

    if (!apiKey) {
      showMessageBox("Error", "Please enter your Gemini API Key.");
      return;
    }
    if (!currentMainTopic) {
      showMessageBox("Info", "Please enter a topic.");
      return;
    }

    saveApiKey(apiKey);
    setNotesUIState("loading");
    notesGenerationStatus.textContent = "Analyzing topic complexity...";

    // Prompt to check if topic needs breaking down
    const breakdownPrompt = `Does the topic "${currentMainTopic}" (for HSSC Group C competitive exam in ${currentSubject} ${currentLanguage} language) need to be broken down into distinct, logical sub-topics for comprehensive learning?
        If YES, provide a JSON array of 3-7 key sub-topics/parts that cover the main topic comprehensively. Each sub-topic name should be concise and clearly identify the part. Example: ["Part 1 Name", "Part 2 Name", "Part 3 Name"].
        If NO, respond with 'NO_BREAKDOWN_NEEDED' on a single line.`;

    try {
      const result = await generateContentFromAI(
        breakdownPrompt,
        apiKey,
        "application/json"
      );

      const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (responseText) {
        // Check for 'NO_BREAKDOWN_NEEDED' first, case-insensitively and trim.
        if (responseText.trim().toUpperCase() === "NO_BREAKDOWN_NEEDED") {
          notesGenerationStatus.textContent = "Topic is concise. Generating full notes...";
          await generateAndDisplayNotes(
            currentMainTopic,
            currentLanguage,
            currentLength,
            apiKey,
            currentSubject
          );
          setNotesUIState("notes_displayed");
        } else {
          // Try to parse parts
          try {
            const parsedParts = JSON.parse(responseText);
            if (Array.isArray(parsedParts) && parsedParts.length > 0) {
              currentParts = parsedParts;
              topicPartsContainer.innerHTML = ""; // Clear previous parts
              currentParts.forEach((part) => {
                const partButton = document.createElement("button");
                partButton.textContent = part;
                partButton.classList.add(
                  "option-button",
                  "text-center",
                  "font-semibold",
                  "py-3",
                  "px-6",
                  "rounded-lg",
                  "shadow-sm",
                  "hover:bg-blue-100",
                  "transition",
                  "duration-200",
                  "topic-part-button"
                ); // Add custom class
                partButton.addEventListener("click", async () => {
                  notesGenerationStatus.textContent = `Generating notes for "${part}"...`;
                  setNotesUIState("loading");
                  await generateAndDisplayNotes(
                    `${currentMainTopic}: ${part}`,
                    currentLanguage,
                    currentLength,
                    apiKey,
                    currentSubject
                  );
                  setNotesUIState("notes_displayed");
                });
                topicPartsContainer.appendChild(partButton);
              });
              partsPromptText.textContent = `The topic "${currentMainTopic}" can be broken down. Select a part to learn more, or get full notes:`;
              setNotesUIState("parts_available");
            } else {
              // If JSON is invalid or empty array, generate full notes as fallback
              showMessageBox(
                "Info",
                "AI could not break down the topic into valid parts. Generating full notes for the topic."
              );
              notesGenerationStatus.textContent = "Generating full notes...";
              await generateAndDisplayNotes(
                currentMainTopic,
                currentLanguage,
                currentLength,
                apiKey,
                currentSubject
              );
              setNotesUIState("notes_displayed");
            }
          } catch (jsonError) {
            // If JSON parsing fails, generate full notes as fallback
            showMessageBox(
              "Info",
              "AI response for topic breakdown was not valid JSON. Generating full notes for the topic."
            );
            console.error("JSON parsing error for breakdown:", jsonError, responseText);
            notesGenerationStatus.textContent = "Generating full notes...";
            await generateAndDisplayNotes(
              currentMainTopic,
              currentLanguage,
              currentLength,
              apiKey,
              currentSubject
            );
            setNotesUIState("notes_displayed");
          }
        }
      } else {
        // No response text, likely an API error
        let errorMessage = "Failed to get topic breakdown from AI. No response text received.";
        if (result.error && result.error.message) {
          errorMessage += ` API Error: ${result.error.message}`;
        } else if (result.candidates?.[0]?.safetyRatings?.length > 0) {
          errorMessage += " Content may have been blocked due to safety settings.";
        } else if (result.promptFeedback?.blockReason) {
          errorMessage += ` Prompt was blocked: ${result.promptFeedback.blockReason}.`;
        }
        showMessageBox("Error", errorMessage + " Please try again.");
        console.error("Gemini API Full Response (Breakdown):", JSON.stringify(result, null, 2));
        setNotesUIState("initial"); // Go back to initial state on error
      }
    } catch (error) {
      console.error("Error during topic breakdown:", error);
      showMessageBox(
        "Error",
        `An error occurred during topic breakdown. Details: ${error.message}`
      );
      setNotesUIState("initial"); // Go back to initial state on error
    }
  });
}

// Function to generate and display the actual notes
async function generateAndDisplayNotes(
  topicToGenerate,
  language,
  lengthOption,
  apiKey,
  subjectContext
) {
  const syllabusContext =
    subjectContext !== "none" && syllabusData[subjectContext]
      ? `This topic falls under the "${subjectContext}" subject. The general scope of this subject for HSSC Group C is: ${syllabusData[
          subjectContext
        ]?.replace(/<[^>]*>/g, "")}. Frame the notes within this specific competitive exam context.`
      : "";

  let lengthDescriptor = "";
  let wordCountRange = "";
  if (lengthOption === "brief") {
    lengthDescriptor = "a concise overview";
    wordCountRange = "(approx. 100-200 words)";
  } else if (lengthOption === "standard") {
    lengthDescriptor = "standard, focused notes";
    wordCountRange = "(approx. 250-400 words)";
  } else if (lengthOption === "detailed") {
    lengthDescriptor = "thorough and comprehensive notes";
    wordCountRange = "(approx. 500-800 words)";
  } else if (lengthOption === "dynamic") {
    lengthDescriptor = "comprehensive and appropriately detailed notes";
    wordCountRange = "with optimal length to cover all critical knowledge for competitive exams";
  }

  let prompt = `Generate ${lengthDescriptor} ${wordCountRange} in ${language} on the topic "${topicToGenerate}".

    **Core Mandate:** The primary goal is to create **highly effective, exam-ready study notes** for **HSSC Group C competitive examinations**. Every piece of information must be **high-yield, accurate, and directly relevant** to typical exam questions.

    **Instructions for AI:**
    1.  **Strict Purpose & Relevance:** Focus exclusively on facts, figures, and concepts that are crucial for a competitive exam perspective. Absolutely no tangential information, elaborate narratives, or conversational filler.
    2.  **Maximal Conciseness & Precision:** Be exceptionally direct. Prioritize bullet points and short, impactful sentences. Avoid any form of verbosity. Think "flashcard" density for each piece of information.
    3.  **Guaranteed Completeness & Optimal Depth:**
        ${
          lengthOption === "dynamic"
            ? `For this "dynamic" length request, determine the most suitable length to comprehensively cover all *critical* aspects, major sub-points, and high-yield information of "${topicToGenerate}" without sacrificing conciseness. Ensure no fundamental, high-importance details are missed.`
            : `Within the specified length, ensure all *critical* aspects and major sub-points of "${topicToGenerate}" are covered. Think "high-yield" information.`
        }
    4.  **Optimal Structure & Readability:**
        * Use **clear, concise main headings** (e.g., "## Introduction", "## Key Characteristics", "## Major Events", "## Impact") that act as mini-summaries.
        * Use **subheadings** (e.g., "### Sub-Topic A", "### Important Figures") for deeper dives.
        * **Crucially, ensure a blank line after every heading (both main and subheadings) for visual separation.**
        * **Bold all important terms, names, dates, and key facts** without exception.
        * Utilize bullet points (\`- \` or \`* \`) for lists of facts, characteristics, or sequential steps.
        * Each bullet point should be a concise statement.
    5.  **Unquestionable Accuracy:** All facts, dates, and information provided must be historically and factually impeccable.
    6.  **Syllabus Context Integration:** ${syllabusContext}
    7.  **Output Format:** Deliver the content as plain text. Adhere **100% strictly** to Markdown for:
        * Headings (using \`##\` for main, \`###\` for subheadings).
        * Bold text (using \`**text**\`).
        * Bullet points (using \`- \` or \`* \` followed by a space).
        * **Ensure a blank line after each heading.**`;

  if (!prompt.trim()) {
    console.warn("Generated notes prompt is empty. Using a default prompt.");
    prompt = `Generate concise notes in ${language} on the topic "${topicToGenerate}" for exam preparation.`;
  }

  try {
    const result = await generateContentFromAI(prompt, apiKey, "text/plain");
    const generatedNotes = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (generatedNotes) {
      generatedNotesTitle.textContent = `Notes on: ${topicToGenerate}`;
      generatedNotesText.innerHTML = marked.parse(generatedNotes);
      generatedNotesDisplay.classList.remove("hidden");
    } else {
      let errorMessage = `Failed to generate notes for "${topicToGenerate}". No valid text content received from AI.`;
      if (result.error && result.error.message) {
        errorMessage += ` API Error: ${result.error.message}`;
      } else if (result.candidates?.[0]?.safetyRatings?.length > 0) {
        errorMessage += " Content may have been blocked due to safety settings.";
      } else if (result.promptFeedback?.blockReason) {
        errorMessage += ` Prompt was blocked: ${result.promptFeedback.blockReason}.`;
      }
      showMessageBox("Error", errorMessage + " Please try a different topic or adjust settings.");
      console.error(
        "Gemini API Full Response (Notes Gen):",
        JSON.stringify(result, null, 2)
      );
      setNotesUIState("initial"); // Go back to initial on notes gen error
    }
  } catch (error) {
    console.error("Error generating notes:", error);
    showMessageBox(
      "Error",
      `An error occurred while generating notes for "${topicToGenerate}". Details: ${error.message}`
    );
    setNotesUIState("initial"); // Go back to initial on notes gen error
  }
}

// --- Marked.js is used, so custom formatNotes is no longer needed ---
// function formatNotes(text) { ... }

// Event Listeners for new navigation buttons
if (generateFullNotesButton) {
  generateFullNotesButton.addEventListener("click", async () => {
    setNotesUIState("loading");
    notesGenerationStatus.textContent = `Generating full notes for "${currentMainTopic}"...`;
    await generateAndDisplayNotes(
      currentMainTopic,
      currentLanguage,
      currentLength,
      notesApiKeyInput.value.trim(),
      currentSubject
    );
    setNotesUIState("notes_displayed");
  });
}

if (backToPartsButton) {
  backToPartsButton.addEventListener("click", () => {
    if (currentParts.length > 0) {
      setNotesUIState("parts_available");
    } else {
      setNotesUIState("initial"); // Fallback if no parts somehow
    }
    // Re-render parts if they were cleared (important when coming back from generated notes)
    if (topicPartsContainer.innerHTML === "" && currentParts.length > 0) {
      currentParts.forEach((part) => {
        const partButton = document.createElement("button");
        partButton.textContent = part;
        partButton.classList.add(
          "option-button",
          "text-center",
          "font-semibold",
          "py-3",
          "px-6",
          "rounded-lg",
          "shadow-sm",
          "hover:bg-blue-100",
          "transition",
          "duration-200",
          "topic-part-button"
        );
        partButton.addEventListener("click", async () => {
          notesGenerationStatus.textContent = `Generating notes for "${part}"...`;
          setNotesUIState("loading");
          await generateAndDisplayNotes(
            `${currentMainTopic}: ${part}`,
            currentLanguage,
            currentLength,
            notesApiKeyInput.value.trim(),
            currentSubject
          );
          setNotesUIState("notes_displayed");
        });
        topicPartsContainer.appendChild(partButton);
      });
    }
  });
}

if (backToTopicInputButton) {
  backToTopicInputButton.addEventListener("click", () => {
    setNotesUIState("initial");
    // Clear current parts when going back to initial input
    currentParts = [];
    topicPartsContainer.innerHTML = "";
  });
}

if (startNewNotesButton) {
  startNewNotesButton.addEventListener("click", () => {
    // Clear all previous inputs and state
    notesTopicInput.value = "";
    // Reset language and length to defaults
    notesLanguageSelect.value = "English"; // Changed default to English
    notesLengthSelect.value = "standard"; // Changed default to standard
    subjectSelect.value = "none"; // Reset subject select
    syllabusDisplay.classList.add("hidden"); // Hide syllabus display
    syllabusTitle.textContent = "";
    syllabusText.innerHTML = "";

    currentMainTopic = "";
    currentLanguage = "English"; // Changed default to English
    currentLength = "standard"; // Changed default to standard
    currentSubject = "none";
    currentParts = [];
    topicPartsContainer.innerHTML = ""; // Clear parts container

    setNotesUIState("initial");
  });
}

// Initial setup on notes page load
document.addEventListener("DOMContentLoaded", () => {
  // Load API key for notes section
  loadApiKey(notesApiKeyInput);
  setNotesUIState("initial"); // Set initial UI state
});
