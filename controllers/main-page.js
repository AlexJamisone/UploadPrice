export function getMainPage(req, res, next) {
    res.render('index', {
        pageTitle: 'Home Page',
    })
    next()
};