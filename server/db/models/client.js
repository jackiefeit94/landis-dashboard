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
    defaultValue: ''
  },
  name_first: {
    type: Sequelize.STRING
  },
  name_last: {
    type: Sequelize.STRING
  },
  employer: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.BIGINT
  },
  address: {
    type: Sequelize.TEXT
  },
  comments: {
    type: Sequelize.TEXT
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Client
