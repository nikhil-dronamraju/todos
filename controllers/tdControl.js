const Todos = require('../models/Todos');


/**This works perfectly.*/
const getReq = async (req, res) => {
    Todos.find().then(
        (data) => {
            res.json(data);
        }
    )
};

/**This also works perfectly */
const postReq = async (req, res) => {
    const newTodos = await Todos.create(req.body);
    res.json(newTodos);
};


/** OK, so this one works like a charm now */
const putReq = async (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body).then(
        data => {
            Todos.find().then(
                (mySol) => {
                    res.json(mySol);
                }
            )
        }
    )
};


/** Same goes for this one */
const deleteReq = async (req, res) => {
    Todos.findByIdAndRemove(req.params.id).then(
        whatever => {
            Todos.find().then(
                myList => {
                    res.json(myList)
                }
            )
        }
    )
};


module.exports = {getReq, postReq, putReq, deleteReq};