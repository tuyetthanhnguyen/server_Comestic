const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/windy_Comestic', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Thành công!!!');
  } catch (error) {
    console.log('Thử lại!!!');
  }
}


module.exports = {
  connect
}