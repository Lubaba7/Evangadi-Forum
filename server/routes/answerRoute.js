const express = require('express')
const router = express.Router()
const { postAnswer, allAnswer } = require('../controllers/answerController')


router.post("/postanswers", postAnswer)

router.get("/all-answers", allAnswer)

module.exports = router