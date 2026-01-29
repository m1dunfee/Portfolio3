const { Topic } = require('../models/ContentSchema')

const getTopics = async (req, res) => {
    try {
        const docs = await Topic.find({}); // could add additional search logic like .select().sort.().lean()  here
        return res.json(docs);
    }catch (err) {
        console.log('Topics controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getTopicsByDiscipline = async (req, res) => {
    const { discipline } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Topic.find({ "metadata.index.discipline": discipline}).collation({ locale: "en", strength: 2 });; 
        return res.json(docs);
    }catch (err) {
        console.log('Topics discipline controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getTopicsBySkill = async (req, res) => {
    const { skill } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Topic.find({ "metadata.index.skill": skill}).collation({ locale: "en", strength: 2 });; 
        return res.json(docs);
    }catch (err) {
        console.log('Topics skill controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getTopicsByTechnology = async (req, res) => {
    const { technology } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Topic.find({ "metadata.index.technology": technology}).collation({ locale: "en", strength: 2 });; 
        return res.json(docs);
    }catch (err) {
        console.log('Topics technology controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

module.exports = {
    getTopics,
    getTopicsByDiscipline,
    getTopicsBySkill,
    getTopicsByTechnology
}