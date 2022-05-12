import * as studentRepository from "../repositories/student-repository.js"

export async function getStudents(){
    return await studentRepository.findAll();
}

export async function getStudent(studentId){
  return await studentRepository.findById(studentId); 
}
export async function createStudent(student){
  return await studentRepository.add(student);
}
export async function removeStudent(studentId){
  return await studentRepository.remove(studentId);
}
export async function updateStudent(studentId, existingStudent){
  return await customerRepository.update(studentId, existingStudent);
}