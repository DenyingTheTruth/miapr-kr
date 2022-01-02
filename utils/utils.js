const configTesseractRU = require ('../config/recognize-config-ru');
const configTesseractEN =  require('../config/recognize-config-en');

const prepareConfig = (lang) => {
  switch (lang) {
    case "en": {
      return configTesseractEN;
    }
    case "rus": {
      return configTesseractRU;
    }
    default: {
      return {};
    }
  }
};

const processedData = (resultRec) => {
  const params = ['1', 'А', 'а'];

  const clearText = resultRec.replaceAll('\n', ' ').replaceAll('\f', '').trim();

  return {
    desired_result: params.map(x => ({
      value: x,
      result: !!clearText.split('').find(ch => ch === x)
    })),
    recognized_text: clearText,
  };
}

module.exports = {
  prepareConfig,
  processedData
};
