const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise

db.connect('mongodb+srv://db_user_nodejs:Hny8jkO2dZGPYhCi@cluster0.qmoiu.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'telegrom'
});

console.log('[db] Conectada con éxito')


const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessage = async () => {
  const message = await Model.find();
  return message;
}

const updateText = async (id,message) => {
  const foundMessage = await Model.findById(id);

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText
}
