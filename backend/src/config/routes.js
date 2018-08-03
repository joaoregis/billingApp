const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const billingCycles = require('../api/billingCycle/billingCycleService')
    billingCycles.register(router, '/billingcycles')
}