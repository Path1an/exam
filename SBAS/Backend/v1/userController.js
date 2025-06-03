const {pool} = require('./db');

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

//GET BY ID
const getUserById = async (req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM users WHERE userID = ?', [req.params.id]);
       
        res.status(200).json({success: true, data: resoult});

    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}

//POST
const createUser = async (req, res) => {
    try {
        const [resoult] = await pool.execute(
            'INSERT INTO users (userName, userOffice, dateEmployed) VALUES (?, ?, ?)', 
            [req.body.userName, req.body.userOffice, req.body.dateEmployed]
        );
        
        res.status(200).json({success: true, data: resoult});
    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }

}

//PUT
const updateUser = async(req, res) => {
    try {
        const [resoult] = await pool.execute(
            'UPDATE users SET userName = ?, userOffice = ?, dateEmployed = ? WHERE userID = ?',
            [ req.body.userName, req.body.userOffice, req.body.dateEmployed, req.params.id]);

        if (resoult.affectedRows === 0) {
            res.status(404).json({success: false, error: 'user not found'});
        }
        else {
            res.status(200).json({success: true, data: resoult});
        }
    }
    catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

//DELETE
const deleteUser = async (req, res) => {
    try {
        const [resoult] = await pool.execute('DELETE FROM users WHERE userID = ?', [req.params.id]);
        
        if (resoult.affectedRows === 0) {
            res.status(404).json({success: false, error: 'user not found'});
        }
        else {
            res.status(200).json({success: true, data: resoult});
        }
    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};