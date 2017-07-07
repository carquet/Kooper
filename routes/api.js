'use strict'

const express = require('express')
const CollaboratorCtrl = require('../controllers/api')
// const ProjectCtrl = require('../controllers/projects')
const api = express.Router()

//set home page
api.get('/', (req, res) =>{
	res.sendFile('../public/index.html')
})

api.get('/v1/collaborators', CollaboratorCtrl.getCollaborators)
// api.get('/v1/collaborators/:id', CollaboratorCtrl.getCollaborator)
// api.get('/v1/projects', ProjectCtrl.getProjects)
// api.get('/v1/project/:id', ProjectCtrl.getProject)


module.exports = api