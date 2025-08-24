import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
import configs from "../configs/sequelize.config.js";

const config = configs[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Đọc toàn bộ file model trong thư mục `models`
const modelFiles = fs
  .readdirSync(__dirname)
  .filter(
    (file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && !file.includes(".test.js")
  );

// Import từng model (dùng file:// URL để tránh lỗi Windows)
for (const file of modelFiles) {
  const fileUrl = pathToFileURL(path.join(__dirname, file)).href;
  const module = await import(fileUrl);
  const model = module.default(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

// Associate (nếu có định nghĩa trong model)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
