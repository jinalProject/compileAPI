const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirFile = path.join(__dirname, "codeFiles");

if (!fs.existsSync(dirFile)) {
	fs.mkdirSync(dirFile, { recursive: true });
}

const fileGenerator = async (language, code) => {
	const jobId = uuid();
	const fileName = `${jobId}.java`;

	const filePath = path.join(dirFile, fileName);

	await fs.writeFileSync(filePath, code);
	return filePath;
};

module.exports = {
	fileGenerator,
};
