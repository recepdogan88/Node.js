import {Student} from "../data/sequelize.js"

export async function findAll(){
    return await Student.findAll();
}

export async function findById(pId){
    return await Student.findByPk(pId);
}

export async function add(pObj){
    await Student.create(pObj);
}

export async function update(pId, pObj){

    return await Student.update(pObj, {
        where: {id: pId}
      });
}

export async function remove(pId){
    return await Student.destroy({
        where: {id: pId}
      });
}