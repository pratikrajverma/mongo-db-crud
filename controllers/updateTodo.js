const Todo  = require('../models/Todo');

const updateTodo = async (req,res) =>{
    try{
        const {id} =  req.params;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate( 
             {_id:id},          //here it is finding document id
             {title, description, updatedAt: Date.now()}    //here it is updating document value
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully updated`, 
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"internal server error",
        })
    }
}

module.exports = {
    updateTodo
}