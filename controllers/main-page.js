export function getMainPage(req, res, next) {
    res.render('main', {
        pageTitle: 'Home Page',
        
    })

    next()
};