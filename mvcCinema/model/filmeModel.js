const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Filme extends Model{}
Filme.init(
    {
        idFilme:{
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        }, nomeFilme:{
            type: DataTypes.STRING,
            allowNull: false,
        }, horarioSessao: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }, ingressosComprados: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    },
    {
        sequelize: dbConfig(),
        modelName: "PATRICK_FILMECINEMA_MVC",
        timestamps: false,
    }
)

exports.Filme = Filme;