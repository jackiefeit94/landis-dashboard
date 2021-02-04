const Sequelize = require('sequelize')
const db = require('../db')

const Client = db.define('client', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  balance: {
    type: Sequelize.STRING
  },
  credit: {
    type: Sequelize.INTEGER
  },
  picture: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://pbs.twimg.com/profile_images/580363037640536064/1GQH5xpY.jpg'
  },
  name_first: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false
  },
  name_last: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false
  },
  employer: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    isEmpty: false,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT
  },
  comments: {
    type: Sequelize.TEXT
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  progress: {
    type: Sequelize.VIRTUAL,
    get() {
      //find balance percentage out of 20K- highest in dataset
      let balance = Math.ceil(Number(this.balance)) / 20000 * 100
      //find credit score percentage out of highest possible
      let creditStatus = Math.ceil(this.credit / 850) * 100
      //average those 2 values
      return Math.ceil((balance + creditStatus) / 2)
    }
  }
})

Client.addHook('beforeCreate', 'beforeUpdate', client => {
  if (String(client.phone).length !== 10 || isNaN(client.phone))
    return Promise.reject(new Error('Phone number must be 10 digits'))
})

module.exports = Client
