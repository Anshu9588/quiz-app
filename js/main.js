// js/main.js

// Constants
const LOCAL_STORAGE_API_KEY = 'geminiApiKey';

// DOM elements for message box (should be present in all HTML files)
const messageBox = document.getElementById('message-box');
const messageTitle = document.getElementById('message-title');
const messageContent = document.getElementById('message-content');
const messageBoxOkButton = document.getElementById('message-box-ok-button');

/**
 * Displays a custom message box instead of alert().
 * @param {string} title - The title of the message box.
 * @param {string} message - The content message.
 */
function showMessageBox(title, message) {
    messageTitle.textContent = title;
    messageContent.textContent = message;
    messageBox.style.display = 'block';
}

// Event listener for the OK button in the message box
if (messageBoxOkButton) {
    messageBoxOkButton.addEventListener('click', () => {
        messageBox.style.display = 'none';
    });
}

/**
 * Loads API key from local storage and sets it to the provided input element.
 * @param {HTMLInputElement} apiKeyInputElem - The API key input element.
 */
function loadApiKey(apiKeyInputElem) {
    const savedApiKey = localStorage.getItem(LOCAL_STORAGE_API_KEY);
    if (savedApiKey && apiKeyInputElem) {
        apiKeyInputElem.value = savedApiKey;
    }
}

/**
 * Saves API key to local storage.
 * @param {string} apiKey - The API key to save.
 */
function saveApiKey(apiKey) {
    try {
        localStorage.setItem(LOCAL_STORAGE_API_KEY, apiKey);
    } catch (e) {
        console.warn("Could not save API key to local storage:", e);
        showMessageBox("Warning", "Could not save API key to local storage. You may need to enter it again next time.");
    }
}
