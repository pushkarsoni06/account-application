const jsonServer = require('json-server');
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router('database/db.json')
const middlewares = jsonServer.defaults()
var fs = require('fs');
 
server.use(middlewares)
server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
 
router.render = (req, res) => {
  if(req.query.sort_by) {
      if(req.query._index == 1) {
        res.send(JSON.parse(fs.readFileSync('database/'+req.query.sort_by+'/'+req.query.order+'/db1.json')));
      }else if(req.query._index == 2) {
        res.send(JSON.parse(fs.readFileSync('database/'+req.query.sort_by+'/'+req.query.order+'/db2.json')));
      }else if(req.query._index == 3) {
        res.send(JSON.parse(fs.readFileSync('database/'+req.query.sort_by+'/'+req.query.order+'/db3.json')));
      }
    }else{
      if(req.query._index == 1) {
        res.send(JSON.parse(fs.readFileSync('database/db1.json')));
      }else if(req.query._index == 2) {
        res.send(JSON.parse(fs.readFileSync('database/db2.json')));
      }else if(req.query._index == 3) {
        res.send(JSON.parse(fs.readFileSync('database/db3.json')));
      }      
    }
}

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})