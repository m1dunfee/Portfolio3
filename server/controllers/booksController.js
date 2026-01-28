const { Book } = require('../models/ContentSchema')

const getBooks = async (req, res) => {
    try {
        const docs = await Book.find({}); // could add additional search logic like .select().sort.().lean()  here

        return res.json({ ok: true, count: docs.length, books: docs });
    }catch (err) {
        console.log('Books controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getBooksByDiscipline = async (req, res) => {
    const { discipline } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Book.find({ "metadata.index.discipline": discipline}).collation({ locale: "en", strength: 2 });
        return res.json({ ok: true, count: docs.length, Books: docs });
    }catch (err) {
        console.log('Books discipline controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getBooksBySkill = async (req, res) => {
    const { skill } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Book.find({ "metadata.index.skill": skill}).collation({ locale: "en", strength: 2 });
        return res.json({ ok: true, count: docs.length, Books: docs });
    }catch (err) {
        console.log('Books skill controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getBooksByTechnology = async (req, res) => {
    const { technology } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Book.find({ "metadata.index.technology": technology}).collation({ locale: "en", strength: 2 });
        return res.json({ ok: true, count: docs.length, Books: docs });
    }catch (err) {
        console.log('Books technology controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getBooksByStatus = async (req, res) => {
    const { status } = req.params;
    try{
        const docs = await Book.find({"metadata.index.status": status});
        return res.json({ok: true, count: docs.length, Books: docs});
    }catch (err){
        console.log('Books status controller eorror:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

module.exports = {
    getBooks,
    getBooksByDiscipline,
    getBooksBySkill,
    getBooksByTechnology,
    getBooksByStatus
}