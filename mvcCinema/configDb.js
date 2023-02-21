const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "oracle",
  database: "xe",
  username: "system",
  password: "pulsati2023",
  host: "192.168.0.50",
  port: 1521,
  dialectOptions: { connectTimeout: 30000 },
});

sequelize.sync();

exports.getDbConfig = () => sequelize;
