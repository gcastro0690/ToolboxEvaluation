module.exports = {
  ping: async (req, res) => {
    let string = req.body.params.string;
    res.status(200).json(string);
  },
};
