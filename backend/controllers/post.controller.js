
const PostModel = require("../models/post.model");


module.exports.getNewStudent= async(req, res) => {

    const post = await PostModel.find();
    res.status(200).json(post);
}


module.exports.newStudentView = async (req,res) => {
    
    if (req.body.message) {
        res.status(400).json({message :"Merci de compléter toutes les cases"})
    };

    const post = await PostModel.create({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBorn: req.body.dateOfBorn,
        email: req.body.email

    });

    res.status(200).json(post);
};


module.exports.editNewStudentView= async(req, res) => {

    const post = await PostModel.findById(req.params.id);

    if(!post) {
        res.status(400).json({message: "Cette donnée n'existe pas."})
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post, req.body,{
            new: true
        });

    res.status(200).json(updatePost);
};



module.exports.deleteStudent = async(req, res) => {

    const post = await PostModel.findById(req.params.id);

    if(!post) {
        res.status(400).json({message: "Cette donnée n'existe pas."})
    }

    await post.deleteOne();
    res.status(200).json("Student delete");

};

