var express = require('express');
var router = express.Router();
var todo = require('../src/models/todo');


router.get('/',function(req,res) {
    todo.get(res, req);
});
router.get('/:id',function(req,res) {
    todo.getByID(req.params.id,res, req);
});

router.get('/author/:id',function(req,res) {
    todo.getByAuthor(req.params.id,res, req);
});

router.get('/parent/:id',function(req,res) {
    todo.getByParentId(req.params.id,res, req);
});
router.post('/',function(req,res) {
    console.log(req);
    todo.create(req.body,res, req);
});
router.put('/:id',function(req,res) {
    todo.update(req.body,req.params.id,res, req);
});
router.delete('/:id',function(req,res) {
    todo.delete(req.params.id,res, req);
});

module.exports = router;
