const commonConfig = require('./recongnize-config-common');

const charWhiteListEn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = {
  ...commonConfig,
  lang: "en",
  tessedit_char_whitelist: charWhiteListEn,
};
