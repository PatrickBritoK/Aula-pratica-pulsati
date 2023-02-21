const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Sala extends Model {}
Sala.init({
  idSala: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }, capacidadeMaxima: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }, 
},
{
    sequelize: dbConfig(),
    modelName: "PATRICK_SALACINEMA_MVC",
    timestamps: false,
}
);
exports.Sala = Sala;
