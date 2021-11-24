const MensRanking = require("../models/mens");

const store = async (req, res) => {
    try {
        const mensrecord = MensRanking(req.body)
        const insertmens = await mensrecord.save();
        res.send(insertmens);

    } catch (err) {
        res.send(err)
    }
}
const fetch = async (req, res) => {
    try {
        const getmens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.status(200).send(getmens);
    } catch (err) {
        res.status(400).send(err)
    }
}

const fetch_id = async (req, res) => {
    try{
        const _id = req.params.id;
        const getmen = await MensRanking.findById(_id);
        res.status(200).send(getmen);
    }catch(err){
        res.status(400).send(err)
    }
}

const updateMen = async (req, res) => {
    try{
        const _id = req.params.id;
        const getmen = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.status(200).send(getmen);
    }catch(err){
        res.status(500).send(err)
    }

}

const deleteMen = async (req, res) => {
    try{
        const delmen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(200).send(delmen)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = { store, fetch, fetch_id, updateMen, deleteMen}