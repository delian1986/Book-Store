const Book=require('../models/Book');

module.exports = {
    last: async(req, res) => {
        let lastBooks=await Book.find().sort({'added':-1}).limit(6);
        res.status(200).json(lastBooks);
    }
}