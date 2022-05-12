import express from 'express';
import * as studentService from '../service/student-service.js';
const router = express.Router();

router.get("/students", async (req, res)=>{
    const list = await studentService.getStudents();
    res.status(200).send(list);
})

router.get("/students/:id", async (req, res)=>{
    const studentId = req.params.id;
    const student = await studentService.getStudent(studentId);
    res.status(200).send(student);
})

router.post("/students", async (req, res)=>{
    const student = req.body;
    const newStudent = await studentService.createStudent(student);
    res.status(201).send(newStudent);
})

router.put("/students/:id", async (req, res)=>{
    const studentId = req.params.id;
    const existingStudent = req.body;
    const updatedStudent = await studentService.updatedStudent(studentId, existingStudent);
    
    res.status(200).send(updatedStudent);
})

router.delete("/:id", async (req, res)=>{
    const studentId = req.params.id;
    await studentService.removeStudent(studentId);
    res.status(200).send(null);
})

export {router};