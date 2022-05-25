/**
 * L'API ne répond que si le front tourne sur localhost:8080
 * 
 * Ce script permet de dev sur sa machine et de pouvoir débugger sur le Mac sans faire tourner le projet dessus.
 * 
 * 1. Faire tourner le projet sur son PC de dev
 * 2. Remplacer l'IP de ce sript par l'IP locale du PC de dev
 * 3. Lancer ce script et accéder à localhost:8080 sur le Mac.
 */

const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://192.168.1.xxx:8080' })
})

server.listen(8080)