const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Emissao extends Model {}
Emissao.init(
    {
        idEmissao:{
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        }, emissaoIngresso:{
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }, 
    {
        sequelize: dbConfig(),
        modelName: "PATRICK_EMISSAOCINEMA_MVC",
        timestamps: false,
    }
)
exports.Emissao = Emissao;