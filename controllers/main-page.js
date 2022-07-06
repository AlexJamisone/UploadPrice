export function getMainPage(req, res, next) {
    res.render('home', {
        pageTitle: 'Home Page',
    })
    // next()
};