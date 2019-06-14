module.exports = (req, res, next) => {
   
    if (req.session.passport) {
        res.locals.isAuth = true;
        res.locals.close = true;
        res.locals.username = req.session.passport.user.username;
        res.locals.fullname=req.session.passport.user.fullname;
        if(req.session.passport.user.role==2)
        res.locals.writer=true;
        if(req.session.passport.user.role==3)
        res.locals.editor=true;
        if(req.session.passport.user.role==4)
        res.locals.admin=true;
        next()
    } else next();
}