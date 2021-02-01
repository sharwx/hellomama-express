'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
      location_name : 'Bedok Point',
      slug: 'bedok-point',
      location_description : 'Level 1 near restrooms',
      location_level : 'Level 1',
      address : '799 New Upper Changi Road, Singapore 467351',
      photo: 'https://www.sassymamasg.com/wp-content/uploads/2016/04/bugis-junction-bhg-nursing-room.jpg',
      latitude: 1.325053028,
      longitude: 103.932225578,
      changing_station: true,
      sink: true,
      hot_water_dispenser: true,
      power_point: false,
      lockable: false,
      user_id: 1,
      created_at : new Date(),
      updated_at : new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
