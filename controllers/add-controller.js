export const AddPage = (req, res, next) => {
    res.render('add', {
        pageTitle: 'Add Coffee'
    })
};