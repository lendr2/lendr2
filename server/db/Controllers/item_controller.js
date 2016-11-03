const sequelize = require('../database');
const itemSchema = require('../Models/item_model');

// creates the Item table
let Item = sequelize.define('item', itemSchema);

// defines all of the functions that will be executed on the Item table
let itemController = {
  // creates an item
  createItem: (req, res, next) => {
    console.log(req.body, '------------------------------------------------------');
    sequelize.sync({ logging: console.log }).then(() => {
      Item.create(req.body)
        .then(() => {
          res.status(200).end();
        })
        .catch((error) => {
          console.log('error:', error)
          res.status(400).end();
        });
    });
  },

  // gets all items for the home browse page
  getAllItems: (req, res, next) => {
    Item.findAll()
      .then((data) => {
        res.status(200);
        res.send(data.sort());
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },

  // gets all owner items for the account page
  getAllOwnerItems: (req, res, next) => {
    Item.findAll({ where: { ownername: req.cookies.username } })
      .then((data) => {
        console.log('allowneritems', data);
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },

  // gets all lendee items for the account page
  getAllLendeeItems: (req, res, next) => {
    Item.findAll({ where: { lendee: req.cookies.username } })
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },
  //requests to borrow an item
  borrowItem: (req, res, next) => {
    console.log(`-------------item_controller borrowItem: username is ${req.body.username} and ownername is ${req.body.tileData.ownername}`)
    if (!req.body.tileData.lendee && req.body.username !== req.body.tileData.ownername) {
      Item.update({ lendee: req.body.username }, { where: {itemname: req.body.tileData.itemname } })
        .then(() => { res.status(200).end() })
    } else { console.log(`${req.body.username} attempted to borrow (${req.body.tileData.itemname}).`) }
  },
  //deletes an item
  deleteItem: (req, res, next) => {
    Item.destroy({ where: { ownername: req.body.username, itemname: req.body.itemname } })
      .then(() => { res.status(200).end() })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  }
}

module.exports = itemController;
