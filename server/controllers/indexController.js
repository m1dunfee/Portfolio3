const health = (req, res) => {
    res.json({ ok: true });
}

const dbtest = async (req, res) => {
    const state = require("mongoose").connection.readyState; // 1 means connected
    res.json({ mongoReadyState: state });
}

module.exports = {
    health,
    dbtest
}