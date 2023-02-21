const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Sessao extends Model {}
Sessao.init(
    {
        idSessao: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        }, dataSessao: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }, nomeFilme: {
            type: DataTypes.STRING,
            allowNull: false,
        }, valorIngresso: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }, ingressosVendidos: {
            type: DataTypes.NUMBER,
            allowNull: false,
        } 
    },
    {
        sequelize: dbConfig(),
        modelName: "PATRICK_SESSAOCINEMA_MVC",
        timestamps: false,
    }
)

exports.Sessao = Sessao;