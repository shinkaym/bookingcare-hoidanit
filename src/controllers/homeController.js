import db from '../models';

let getHomePage = (req, res) => {
    db.User.findAll()
        .then((data) => {
            console.log(data);
            return res.render('homepage.ejs', { users: data });
        })
        .catch((error) => {
            console.error('Lỗi:', error);
        });
};

module.exports = {
    getHomePage: getHomePage,
};
