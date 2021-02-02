const router = require('express').Router()
const {Client} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const clients = await Client.findAll()
    res.json(clients)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const client = await Client.create(req.body)
    res.json(client)
  } catch (err) {
    next(err)
  }
})

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
