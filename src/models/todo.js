var connection = require ('../../connection');
connection.init();

function Todo() {
    this.get = function(res, req) {
        connection.acquire(function(err,con) {
            con.query('select * from todo', function(err,result) {
                con.release();
                res.send(result);
                console.log("Get successful");
            });
        });
    };
    this.getByID = function(id,res, req) {
        connection.acquire(function(err,con) {
            con.query('select * from todo where id = ?', id, function(err,result) {
                con.release();
                res.send(result);
                console.log("Get by ID successful");
            });
        });
    };

    this.getByAuthor = function(id,res, req) {
        connection.acquire(function(err,con) {
            con.query('select * from todo where author = ?', id, function(err,result) {
                con.release();
                res.send(result);
                console.log("Get by ID successful");
            });
        });
    };

    this.getByParentId = function(id,res, req) {
        connection.acquire(function(err,con) {
            con.query('select * from todo where parent_todo_id = ?', id, function(err,result) {
                con.release();
                res.send(result);
                console.log("Get by ID successful");
            });
        });
    };
    this.create = function(todo,res, req) {
        connection.acquire(function(err,con) {
            console.log(todo);
            con.query('insert into todo set ?', todo, function(err,result) {
                con.release();
                if (err) {
                    console.log(err);
                    res.send({status:1, message:'TODO creation fail'});
                } else {
                    res.send({status:0, message:'TODO create success'});
                    console.log("Post successful");
                }
            });
        });
    };
    this.update = function(todo,id,res,req) {
        connection.acquire(function(err,con) {
            con.query('update todo set ? where id = ?', [todo, id], function(err,result) {
                con.release();
                if (err) {
                    res.send({status:1, message:'TODO update fail'});
                } else {
                    res.send({status:0, message:'TODO update success'});
                    console.log("Put successful");
                }
            });
        });
    };
    this.delete = function(id,res, req) {
        connection.acquire(function(err,con) {
            con.query('delete from todo where id = ?', id, function(err,result) {
                con.release();
                if (err) {
                    res.send({status:1, message:'TODO delete fail'});
                } else {
                    res.send({status:0, message:'TODO delete success'});
                    console.log("Delete successful");
                }
            });
        });
    };
};

module.exports = new Todo();
