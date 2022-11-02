const { rejects } = require("assert");
const { exec } = require("child_process");

const executeCode = (filePath) => {
	return new Promise((resolve, reject) => {
		exec(`java ${filePath}`, { timeout: 8000 }, (error, stdout, stderr) => {
			error && reject({ error, stderr });
			stderr && reject(stderr);
			resolve(stdout);
		});
	});
};

module.exports = {
	executeCode,
};
