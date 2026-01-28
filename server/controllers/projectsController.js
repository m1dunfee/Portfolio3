const { Project } = require('../models/ContentSchema');

const getProjects = async (req, res) => {
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Project.find({}); 
        return res.json({ ok: true, count: docs.length, projects: docs });
    }catch (err) {
        console.log('project ontroller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProjectsByDiscipline = async (req, res) => {
    const { discipline } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Project.find({ "metadata.index.discipline": discipline}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, projects: docs });
    }catch (err) {
        console.log('project discipline controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProjectsBySkill = async (req, res) => {
    const { skill } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Project.find({ "metadata.index.skill": skill}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, projects: docs });
    }catch (err) {
        console.log('project skill ontroller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

const getProjectsByTechnology = async (req, res) => {
    const { technology } = req.params;
    try {
        // could add additional search logic like .select().sort.().lean()  here
        const docs = await Project.find({ "metadata.index.technology": technology}).collation({ locale: "en", strength: 2 });; 
        return res.json({ ok: true, count: docs.length, projects: docs });
    }catch (err) {
        console.log('project technology ontroller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

module.exports = { 
    getProjects,
    getProjectsByDiscipline,
    getProjectsBySkill,
    getProjectsByTechnology
}