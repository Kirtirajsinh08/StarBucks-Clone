const  introductionmodel= require('../model/introductionmodel')
exports.addintro = async (req, res) => {
    var data = await introductionmodel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.viewintro = async (req, res) => {
    var data = await introductionmodel.find()
    res.status(200).json({
        status: "success",
        data
    })
}