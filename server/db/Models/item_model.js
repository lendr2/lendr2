const Sequelize = require('sequelize');
// defining the item schema

itemSchema = {
    // _id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    itemname: {
        type: Sequelize.STRING
    },
    itemtype: {
        type: Sequelize.STRING
    },
    itemdescription: {
        type: Sequelize.STRING
    },
    itempictureurl: {
        type: Sequelize.STRING
    },
    datedue: {
        type: Sequelize.DATE
    },
    ownername: {
        type: Sequelize.STRING
    },
    lendee: {
        type: Sequelize.STRING
    },
    datelent: {
        type: Sequelize.DATE
    }
};

module.exports = itemSchema;
