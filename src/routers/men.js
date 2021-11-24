const express = require('express');
const mensRanking = require('../models/mens');
const homeController = require('../Controller/Home')

const router = new express.Router();

router.post("/api",homeController.store);

// i will handle get request

router.get("/api",homeController.fetch);


// i will handle get requests of indivisule

router.get("/api/:id",homeController.fetch_id);

// i will handle patc requests for indvi

router.patch("/api/:id",homeController.updateMen);

// i will handle delete requests for indvi

router.delete("/api/:id",homeController.deleteMen);


module.exports = router;