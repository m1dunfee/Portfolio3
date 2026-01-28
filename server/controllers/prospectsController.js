const { Prospect } = require('../models/ContentSchema')

const getProspects = async (req, res) => {
    try {
        const docs = await Prospect.find({}); // could add additional search logic like .select().sort.().lean()  here

        return res.json({ ok: true, count: docs.length, prospects: docs });
    }catch (err) {
        console.log('Prospects controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProspectsByDiscipline = async (req, res) => {
    const { discipline } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Prospect.find({ "metadata.index.discipline": discipline}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, prospects: docs });
    }catch (err) {
        console.log('Prospects discipline controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProspectsBySkill = async (req, res) => {
    const { skill } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Prospect.find({ "metadata.index.skill": skill}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, prospects: docs });
    }catch (err) {
        console.log('Prospects skill controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProspectsByTechnology = async (req, res) => {
    const { technology } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Prospect.find({ "metadata.index.technology": technology}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, prospects: docs });
    }catch (err) {
        console.log('Prospects technology controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

module.exports = {
    getProspects,
    getProspectsByDiscipline,
    getProspectsBySkill,
    getProspectsByTechnology
}