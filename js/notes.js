// js/notes.js

// Syllabus data (remains unchanged)
const syllabusData = {
  "General Awareness": `Questions will be designed to test the ability of the candidate's General Awareness of the environment and its relevance to the society. The questions will also be designed to test knowledge of the current events and of such matters of everyday observation as may be expected of an examinee appearing for the test. The test will include questions relating to India and neighboring countries, especially pertaining to:
    <ul>
        <li>History</li>
        <li>Indian Polity & Constitution</li>
        <li>Art & Culture</li>
        <li>Geography</li>
        <li>Economics</li>
        <li>General Policy</li>
        <li>National/International Organizations /Institutions</li>
        <li>Environment</li>
        <li>Globalization</li>
        <li>Climate</li>
        <li>Events</li>
        <li>General Science</li>
    </ul>`,
  "Computer Knowledge": `
    <h3>Computer Basics:</h3>
    <ul>
        <li>Organization of a computer</li>
        <li>Central Processing Unit (CPU)</li>
        <li>Input/output devices</li>
        <li>Computer memory</li>
        <li>Memory organization</li>
        <li>Back-up devices</li>
        <li>PORTS</li>
        <li>Windows Explorer</li>
        <li>Keyboard shortcuts</li>
        <li>Windows Operating system including basics of Microsoft Office like MS Word, MS Excel and PowerPoint.</li>
    </ul>
    <h3>Working with Internet and E-mails:</h3>
    <ul>
        <li>Web Browse & Searching</li>
        <li>Downloading & Uploading</li>
        <li>Managing an E-mail Account</li>
    </ul>`,
  Reasoning: `The syllabus includes questions of both verbal and non-verbal types. Test may include questions on:
    <ul>
        <li>Semantic Analogy</li>
        <li>Symbolic operations</li>
        <li>Symbolic Number Analogy</li>
        <li>Trends</li>
        <li>Figural Analogy</li>
        <li>Space Orientation</li>
        <li>Semantic Classification</li>
        <li>Observation</li>
        <li>Relationship</li>
        <li>Concepts</li>
        <li>Venn Diagrams</li>
        <li>Symbolic, Number Classification</li>
        <li>Drawing inferences</li>
        <li>Figural Classification</li>
        <li>Punched hole pattern-folding & unfolding</li>
        <li>Semantic Series</li>
        <li>Figural Pattern folding and completion</li>
        <li>Number series</li>
        <li>Embedded figures</li>
        <li>Figural series</li>
        <li>Critical thinking</li>
        <li>Problem solving</li>
        <li>Emotional intelligence</li>
        <li>Arithmetical number series</li>
        <li>Arithmetical reasoning</li>
        <li>Word building</li>
        <li>Social intelligence</li>
        <li>Coding and decoding</li>
        <li>Other sub-topics etc.</li>
    </ul>`,
  "Quantitative Ability": `The test will cover:
    <ul>
        <li>Number System including questions on Simplification, Decimals, Fractions, Relationship between numbers</li>
        <li>L.C.M., H.C.F.</li>
        <li>Ratio & Proportion</li>
        <li>Percentage</li>
        <li>Roots</li>
        <li>Average</li>
        <li>Profit & Loss</li>
        <li>Discount</li>
        <li>Simple & Compound Interest</li>
        <li>Mensuration</li>
        <li>Partnership business</li>
        <li>Mixture and Allegation</li>
        <li>Time & Work</li>
        <li>Time & Distance</li>
        <li>Tables & Graphs</li>
        <li>Trigonometry</li>
        <li>Basic Algebra</li>
        <li>Geometry etc.</li>
    </ul>`,
  "English Language": `
    <ul>
        <li>Spot the Error</li>
        <li>Fill in the Blanks</li>
        <li>Synonyms/ Homonyms</li>
        <li>Antonyms</li>
        <li>Spellings/ Detecting mis-spelt words</li>
        <li>Idioms & Phrases</li>
        <li>One word substitution</li>
        <li>Improvement of Sentences</li>
        <li>Active/ Passive Voice of Verbs</li>
        <li>Conversion into Direct/ Indirect narration</li>
        <li>Shuffling of Sentence parts</li>
        <li>Shuffling of Sentences in a passage</li>
        <li>Tenses</li>
        <li>Cloze Passage</li>
        <li>Comprehension Passage etc.</li>
    </ul>`,
  "Hindi Language": `
    <ul>
        <li>शब्द</li>
        <li>अलंकार</li>
        <li>विकारीशब्द</li>
        <li>वाक्य</li>
        <li>अविकारीशब्द</li>
        <li>पद</li>
        <li>पदबंध</li>
        <li>मुहावरें</li>
        <li>लोकोक्तियां</li>
        <li>संधि</li>
        <li>उपसर्ग</li>
        <li>प्रत्यय</li>
        <li>समास</li>
        <li>पर्यायवाची</li>
        <li>विलोम व अनेकार्थीशब्द</li>
        <li>अयोगवाह</li>
        <li>वाक्य शोधन</li>
        <li>निपात ( अवधारक)</li>
        <li>विरामचिन्ह</li>
        <li>संबंधबोधक</li>
        <li>अनेकशब्दों के लिए एक शब्द</li>
        <li>एकार्थकशब्द युग्मशब्द</li>
        <li>वर्तनी (शब्द एंववाक्य शुद्धिकरण )</li>
        <li>वर्ण</li>
        <li>स्वर</li>
        <li>व्यंजन</li>
        <li>विदेशी ध्वनियाँ</li>
        <li>संज्ञा</li>
        <li>सर्वनाम</li>
        <li>विशेषण</li>
        <li>किया किया विशेषण</li>
        <li>समुच्चय बोधक</li>
        <li>विस्मय बोधक</li>
        <li>वचन</li>
        <li>लिंग</li>
        <li>कारक</li>
        <li>काल</li>
        <li>तदभव तत्सम शब्द</li>
    </ul>`,
  "General Knowledge of Haryana": `General awareness which includes:
    <ul>
        <li>History</li>
        <li>Literature</li>
        <li>Geography</li>
        <li>Economy</li>
        <li>Civics</li>
        <li>Polity</li>
        <li>Environment</li>
        <li>Art</li>
        <li>Culture</li>
        <li>Customs</li>
        <li>Norms</li>
        <li>Society</li>
        <li>Current Affairs</li>
        <li>Events etc. of Haryana</li>
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

  switch (state) {
    case "initial":
      notesTopicInput.closest("div").style.display = "block"; // Show initial input
      checkTopicButton.style.display = "block";
      checkTopicButton.disabled = false;
      break;
    case "loading":
      notesLoadingIndicator.style.display = "block";
      notesGenerationStatus.classList.remove("hidden");
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
  // Always hide loading indicators unless explicitly in 'loading' state
  if (state !== "loading") {
    notesLoadingIndicator.style.display = "none";
    notesGenerationStatus.classList.add("hidden");
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
      } else {
        syllabusTitle.textContent = "";
        syllabusText.innerHTML = "Syllabus not available for this subject.";
      }
      notesTopicInput.value = currentSubject; // Pre-fill notes topic with subject
    }
    setNotesUIState("initial"); // Reset UI to initial state
  });
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
    const breakdownPrompt = `Does the topic "${currentMainTopic}" (for HSSC Group C competitive exam in ${currentSubject} ${currentLanguage} language) need to be broken down into distinct sub-topics for comprehensive learning?
        If YES, provide a JSON array of 3-7 key sub-topics/parts that cover the main topic comprehensively. Example: ["Part 1 Name", "Part 2 Name", "Part 3 Name"].
        If NO, respond with 'NO_BREAKDOWN_NEEDED'.`;

    try {
      const result = await generateContentFromAI(breakdownPrompt, apiKey, "application/json");

      const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (responseText) {
        if (responseText.trim().toUpperCase() === "NO_BREAKDOWN_NEEDED") {
          // Generate full notes directly
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
                  "duration-200"
                );
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
              partsPromptText.textContent = `The topic "${currentMainTopic}" can be broken down. Select a part or get full notes:`;
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
      generatedNotesText.innerHTML = formatNotes(generatedNotes);
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
      console.error("Gemini API Full Response (Notes Gen):", JSON.stringify(result, null, 2));
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

/**
 * Formats plain text notes from AI into more readable HTML.
 * Handles headings, bold text, and lists generated with Markdown.
 * @param {string} text - The plain text generated by the AI.
 * @returns {string} HTML formatted text.
 */
function formatNotes(text) {
  let formattedText = text;

  // Convert markdown bold and italic
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formattedText = formattedText.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Convert markdown headers to appropriate HTML tags and add class for margin
  formattedText = formattedText.replace(/^### (.*)$/gm, '<h4 class="notes-subheading">$1</h4>'); // H3 to H4
  formattedText = formattedText.replace(/^## (.*)$/gm, '<h3 class="notes-heading">$1</h3>'); // H2 to H3

  // Handle bullet points and ensure proper paragraph wrapping
  const lines = formattedText.split("\n");
  let htmlOutput = [];
  let inList = false;

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // Check for list items (Markdown: - Item or * Item)
    if (trimmedLine.match(/^[*-]\s/)) {
      if (!inList) {
        htmlOutput.push("<ul>");
        inList = true;
      }
      htmlOutput.push(`<li>${trimmedLine.substring(trimmedLine.indexOf(" ") + 1)}</li>`);
    } else {
      // If we were in a list and the current line is not a list item, close the list
      if (inList) {
        htmlOutput.push("</ul>");
        inList = false;
      }
      // Add paragraphs for non-empty lines that aren't already wrapped in block-level tags
      // or starting with Markdown heading indicators or our custom heading classes
      const startsWithHtmlTagOrCustomHeading = trimmedLine.match(
        /^<h[1-6] class="notes-(heading|subheading)">|<p>|<ul|<li|<strong|<em/i
      );
      if (
        trimmedLine !== "" &&
        !startsWithHtmlTagOrCustomHeading &&
        !trimmedLine.match(/^[#*-]\s/)
      ) {
        htmlOutput.push(`<p>${trimmedLine}</p>`);
      } else if (trimmedLine !== "") {
        htmlOutput.push(trimmedLine); // Keep lines that are already HTML or empty
      }
      // Skip empty lines to avoid empty <p> tags
    }
  });

  // Close any open list at the end of the text
  if (inList) {
    htmlOutput.push("</ul>");
  }

  return htmlOutput.join("\n");
}

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
    // Re-render parts if they were cleared
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
          "duration-200"
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
    notesLanguageSelect.value = "Hindi";
    notesLengthSelect.value = "dynamic";
    subjectSelect.value = "none"; // Reset subject select
    syllabusDisplay.classList.add("hidden"); // Hide syllabus display
    syllabusTitle.textContent = "";
    syllabusText.innerHTML = "";

    currentMainTopic = "";
    currentLanguage = "Hindi";
    currentLength = "dynamic";
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
