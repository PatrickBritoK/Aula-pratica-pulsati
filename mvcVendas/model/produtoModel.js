const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Produto extends Model {}
Produto.init({
  idProduto: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
},
{
  sequelize: dbConfig(),
  modelName: "PATRICK_PRODUTO_MVC",
  timestamps: false,
}
);

exports.Produto = Produto;