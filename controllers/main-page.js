export function getMainPage(req, res, next) {
    res.render('home', {
        pageTitle: 'Home Page',
        time: new Date().toLocaleTimeString( {timeZone: "Europe/Moscow"}).slice(0, -3),
        weekDay: new Intl.DateTimeFormat('ru-RU', { weekday: 'short'}).format(),
        weekNum: new Intl.DateTimeFormat('ru-RU', { day: 'numeric'}).format(),
        month: new Intl.DateTimeFormat('ru-RU', { month: 'short'}).format(),
    })
    next()
};