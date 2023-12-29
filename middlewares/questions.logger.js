const fs = require('fs');
const path = require('path');

// Create a logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create a write stream to log to a file
const logFilePath = path.join(logsDir, 'app.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

// Logger function
function logger(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;

  // Log to console
  console.log(logMessage);

  // Log to file
  logStream.write(logMessage + '\n');
}

module.exports = logger;