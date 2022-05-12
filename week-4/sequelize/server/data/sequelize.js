import { Sequelize , Model, DataTypes} from "sequelize";

const sequelize = new Sequelize("finalproject", "root", "yugo1910", {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {},
    define: {
      freezeTableName: true
    }
  });

  const Student= sequelize.define("Student", {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
  },{
      tableName: 'Student'
  });

await sequelize.sync({ alter: true });

export {Student};