const controller = require('../controllers/methods')
module.exports = server => {
    server.post('/index',[
        controller.createindex
    ])

    server.del('/index', [
        controller.deleteindex
    ])

    server.put('/index/mapping',[
        controller.putmapping
    ])

    server.get('/search', [
        controller.matchsearch
    ])

    server.put('/updatebyquery', [
        controller.updateindexbyquery
    ])

    server.put('/update', [
        controller.updateindex
    ])
}