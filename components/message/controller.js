const store = require('./store');

const addMessage = (user,message) => {
  return new Promise((resolve,reject) => {
    if(!user || !message){
      console.log('[messageController] No hay usuario o mensaje')
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }

    store.add(fullMessage)
    resolve(fullMessage);
  })
}

const getMessage = () => {
  return new Promise((resolve,reject) => {
    resolve(store.list())
  })
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if(!id || !message){
      reject('Invalid data');
      return false
    }

    const result = await store.updateMessage(id, message)
    resolve(result);
  })
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage
}
