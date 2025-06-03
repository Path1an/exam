const {pool} = require('../db');

//GET ALL
const getUsers = async (req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM users');
        res.status(200).json({success: true, data: resoult});

    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}



module.exports = {
    getUsers
};