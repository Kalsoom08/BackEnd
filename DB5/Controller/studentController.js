const Students = require('../Model/studentModel')

const addStudent = async(req, res)=>{
    try {
       const {name,rollNumber, age, address, fees}  = req.body;
       const add = await Students.create({name ,rollNumber, age, address, fees});
       res.status(201).json({
        message : "Student Added Successfully",
        data : add
       })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getStudents = async(req,res)=>{
    try {
        const students = await Students.find();
        if(students.length == 0){
            return res.json('No Student Found')
        }

        res.status(201).json({
            message: 'Data Fetched Successfully',
            data : students
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}




const getSpecificStudents = async (req, res) => {
    try {
        const students = await Students.find({
            // $and: [{ age: { $gt: 16 } },{ fees: { $gt: 2000 } }]
            // $or:([{age: {$gt : 16}},{age: {$lt: 3000}}])
            // $nor:([{age: {$gt: 18}}]), multiple
            // age: {$not: {$gt : 40}}, for single
        });

        if (students.length === 0) {
            return res.status(404).json({
                message: 'Students of specific condition not found'
            });
        }

        res.status(200).json({
            message: 'Students retrieved successfully',
            data: students
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

   
module.exports = {addStudent, getStudents, getSpecificStudents}