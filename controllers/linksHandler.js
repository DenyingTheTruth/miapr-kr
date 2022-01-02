const { tryRecognize } = require('../recognize-cli/recognize');

module.exports = {
  linksHandler: async (req, res) => {
    try {
      const { links } = req.body;
      const { lang, dpi, psm } = req.query;

      console.log(lang, dpi, psm);

      if(!links && !links.length) {
        return res.status(500).json('Массив ссылок пуст!');
      }

      const resultRec = await Promise.all(links.map(x => {
        return tryRecognize(x, lang, dpi, psm)
      }));

      return res.status(200).json(resultRec);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
};
