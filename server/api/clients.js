const router = require('express').Router()
const {Client} = require('../db/models')
module.exports = router

//get all clients
router.get('/', async (req, res, next) => {
  try {
    const clients = await Client.findAll()
    res.json(clients)
  } catch (err) {
    next(err)
  }
})

//get a single client
router.get('/:id', async (req, res, next) => {
  try {
    const client = await Client.findOne({where: {id: req.params.id}})
    res.json(client)
  } catch (err) {
    next(err)
  }
})

//post new client
router.post('/', async (req, res, next) => {
  try {
    const client = await Client.create(req.body)
    res.json(client)
  } catch (err) {
    next(err)
  }
})

//update a client
router.put('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id)
    await client.update(req.body)
    await client.save()
    const clients = await Client.findAll()
    res.json(clients)
  } catch (err) {
    next(err)
  }
})

//delete a client
router.delete('/:id', async (req, res, next) => {
  try {
    const client = await Client.findOne({where: {id: req.params.id}})
    await client.destroy()
    const clients = await Client.findAll()
    res.json(clients)
  } catch (err) {
    next(err)
  }
})
