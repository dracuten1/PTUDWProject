module.exports = (req, res, next) => {
   
    if (req.session.passport) {
        res.redirect('/');
    } else next();
}