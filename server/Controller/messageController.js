let message = require("../model/messageSchema");

exports.create = async (req,res) => {
    try {
        const messageSchema = new message(req.body);
        await messageSchema.save();
        req.io.emit('newMessage',{messageSchema});
        res.status(201).send('Message Saved Successfully');
    } catch (error) {
        res.status(500).send('Error saving Message')
    }
}