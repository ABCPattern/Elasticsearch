const elasticClient = require('../connection')

// module.exports = {
//     ping: function(req,res){
//         elasticClient.ping({
//             requestTimeout:30000,
//         }, function(error){
//             if(error){
//                 res.status(500)
//                 res.json({
//                     success:false,
//                     data: "Elasticsearch cluster is down"
//                 })
//             }
//             else{
//                 res.status(200)
//                 res.json({
//                     success:true,
//                     data:"Elastic search cluser is up"
//                 })
//             }
//         })
//     }
// }

exports.createindex = async (req, res) => {
    const result = await elasticClient.indices.create({
        index: req.query.indexname
    })
    if (result) {
        res.status(200)
        res.json(result)
    }
    else {
        res.status(500)
        res.json({
            success: false,
            message: "Inetrnal server error"
        })
    }
}

exports.deleteindex = async (req, res) => {
    const result = await elasticClient.indices.delete({
        index: req.query.indexname
    })
    if (result) {
        res.status(200)
        res.json(result)
    }
    else {
        res.status(500)
        res.json({
            success: false,
            message: "Inetrnal server error"
        })
    }
}

exports.putmapping = async (req, res) => {
    const result = await elasticClient.indices.putMapping({
        index: req.query.indexname,
        body: {
            properties: {
                "name": {
                    "type": "text"
                },
                "email": {
                    "type": "text"
                },
                "gender": {
                    "type": "text"
                },
                "date-of-birth": {
                    "type": "date",
                    "format": "dd/MM/YYYY"
                },
                "company": {
                    "type": "text"
                },
                "position": {
                    "type": "text"
                },
                "experience": {
                    "type": "integer"
                },
                "country": {
                    "type": "text"
                },
                "phrase": {
                    "type": "text"
                },
                "salary": {
                    "type": "integer"
                }
            }
        }

    })
    if (result) {
        res.status(200)
        res.json(result)
    }
    else {
        res.status(500)
        res.json({
            success: false,
            message: "Inetrnal server error"
        })
    }
}

exports.matchsearch = async (req, res) => {
    const result = await elasticClient.search({
        index:req.query.indexname,
        body:req.body.Query
    })
    if(result){
        res.status(200)
        res.json({
            success:true,
            data:result
        })
    }
    else{
        res.status(500)
        res.json({
            success:false,
            data:"Internal Server Error"
        })
    }
}

exports.updateindexbyquery = async (req, res) => {
    const result = await elasticClient.updateByQuery({
        index: req.query.indexname,
        body:req.body.Query
    })
    if(result){
        res.status(200)
        res.json({
            success:true,
            data:result
        })
    }
    else{
        res.status(500)
        res.json({
            success:false,
            data:"Internal Server Error"
        })
    }
}

exports.updateindex = async (req, res) => {
    const result = await elasticClient.update({
        index: req.query.indexname,
        id:req.query.id,
        body: req.body.Query
    })
    if(result){
        res.status(200)
        res.json({
            success:true,
            data:result
        })
    }
    else{
        res.status(500)
        res.json({
            success:false,
            data:"Internal Server Error"
        })
    }
}