const admin = require("firebase-admin");
admin.initializeApp();

// Import the function from the specific file
const {addMessage} = require("./api/addMessage");

// Export the function for development
exports.addMessage = addMessage;
