const Todo = require('../models/Todo');

const getTodo = async(req,res)=>{
    try{
        //fetch all todo items from the database
        const todos = await Todo.find({})  //find({}) method MongoDB mein ek query hai jo ek collection mein stored documents ko retrieve karne ke liye use hota hai. Yahan, {} empty braces ka matlab hai ki hum saare documents ko retrieve karna chahte hain, bina kisi specific condition ke.

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:'entire data is fetched successfully'
        })

    }catch(err){
        console.log('error fetching in todo');
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"internal server error",
        })
    }
}

 



//................................................................................................................................

// exporting data on the basis of ID 
const getTodoID = async (req, res) => {
    try {
        //extract id from user by rew object
        const id = req.params.id;       //req.params.id se URL se extract kiye gaye ID ko nikala ja raha he, yaha data body me nahi aaraha he post ke trah url se fetch ho raha he data yaha
        const todo = await Todo.findById({_id: id});          //Todo.findById({_id: id}) ek query hai jiska madhyaam se MongoDB se specific Todo item ko retrieve kiya ja raha hai. Yaha id variable, jo req.params.id ke madhyaam se aata hai, ek specific Todo item ka unique identifier (ID) hai.




        //if id not found
        if(!todo){
            return res.status(404).json({   //code check karta hai ki kya todo variable mein koi value hai ya nahi. Agar nahi hai, toh client ko 400 status code ke saath "Data not found with given ID" message bheja jata hai.
                success:false,
                message:"Data not found with given  ID"
            })
        }

        //if data has found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        }) 

    } 
    catch (err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"internal server error",
        })
    }
       
}

module.exports = {      //dono function ko ek sath export kar rahe he { } ke under
    getTodo,
    getTodoID
};