const conn = require('../databese/connection');

module.exports = {
    async store (req, res) {
        const { id } = req.body;

        const ong = await conn('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return res.status(404).json({ error: 'Ong not found or not created!'});
        }

        return res.json(ong);
    },
}