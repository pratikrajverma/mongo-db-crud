const Todo = require('../models/Todo')

const deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully deleted`,
        })

 
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"internal server error",
        })

    }


}

module.exports = {
    deleteTodo
}