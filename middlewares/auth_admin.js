module.exports = (req, res, next) => {
    if (req.session.passport) {
        if (req.session.passport.user.role == 4) {
            next();
        } else
            res.send('Ban khong the truy cap vao trang nay');
    } else {
        res.redirect('/account/login');
    }
}