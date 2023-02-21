const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Ingresso extends Model{}
Ingresso.init(
    {
        idIngresso:{
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        },codigoSessao: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    },
    {
        sequelize: dbConfig(),
        modelName: "PATRICK_INGRESSOCINEMA_MVC",
        timestamps: false,
    }
)

exports.Ingresso = Ingresso;