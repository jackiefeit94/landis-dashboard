'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Client} = require('../server/db/models')
const json = require('./data.js')

function parseData(data) {
  let newData = []
  for (let i = 0; i < data.length; i++) {
    newData.push(JSON.parse(data[i]))
  }
  return newData
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  let newData = parseData(json)

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: 'a7e!r3'}),
    User.create({email: 'murphy@email.com', password: 'mp8%hb2'})
  ])

  for (let i = 0; i < newData.length; i++) {
    await Client.create(newData[i])
  }

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
