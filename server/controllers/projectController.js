const Project = require('../models/schemaProject');

const getProjects = async (req, res) => {
    try {
        const docs = await Project.find({}); // could add additional search logic like .select().sort.().lean()  here

        return res.json({ ok: true, count: docs.length, projects: docs });
    }catch (err) {
        console.log('project controller error:', err);
        return res.status(500).json({ok: false, error: 'server error'});
    }
}

module.exports = { 
    getProjects
}