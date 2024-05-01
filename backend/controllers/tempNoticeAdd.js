const tempNoticeModel = require("../models/userModel");

exports.TempNoticeAdd= async (req, res) => {
    try {
        const tempNotice = new tempNoticeModel(req.body);
        await tempNotice.save();
        res.status(201).send(tempNotice);
    } catch (e) {
        res.status(400).send(e);
    }
}