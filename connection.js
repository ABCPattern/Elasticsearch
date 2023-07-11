const elasticsearch = require('elasticsearch')
var elasticClient = new elasticsearch.Client({
    host:'localhost:9200',
    log:'trace'
})

module.exports = elasticClient
