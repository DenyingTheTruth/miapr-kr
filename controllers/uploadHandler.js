const { tryRecognize } = require('../recognize-cli/recognize');

module.exports = {
  uploadHandler: async (req, res) => {
    try {
      const image = req.file;
      const { lang, dpi, psm } = req.query;

      console.log(lang, dpi, psm, image);

      if(!image) {
        return res.status(500).send('Ошибка при загрузке файла');
      }

      const { buffer: imageBuffer } = image;

      const resultRec = await tryRecognize(imageBuffer, lang, dpi, psm);

      return res.status(200).json(resultRec);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
};
