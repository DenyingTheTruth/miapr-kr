const tesseract = require("node-tesseract-ocr");
const { prepareConfig, processedData } = require('../utils/utils');

const tryRecognize = async (data, lang, dpi = 72, psm = 11) => {
  const configTesseract = prepareConfig(lang);

  const resultRec = await tesseract.recognize(data, { ...configTesseract, dpi, psm });

  return processedData(resultRec);
}

module.exports = {
  tryRecognize
};
