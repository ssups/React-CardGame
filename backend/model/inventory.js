const Sequelize = require("sequelize");

class Inventory extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
        },
        card_pack_basic: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        card_pack_rare: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        card_pack_ultraRare: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        point_5000: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        point_10000: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Inventory",
        tableName: "inventorys",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Inventory.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
}

module.exports = Inventory;
