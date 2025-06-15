import { json } from 'express';
import Data from '../Model/dataModel.js'

export const addData = async(req, res)=>{
    try {
        const {title, description} = req.body;
        const add = await Data.create({title, description});
        res.status(201).json({
            message: 'Data Added Successfully',
            data : add
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        }) 
    }
} 

export const getData = async (req, res)=>{
    try {
        // const data = await Data.find();
        // const data = await Data.find().limit(2);
        //const data = await Data.find().skip(3).limit(2);
        // const data = await Data.find().sort({title: 1});
        //const data = await Data.find().sort({title: -1});
        // const data = await Data.find({number: {$gt : 5}}).count();
        

        res.json({
            data : data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

