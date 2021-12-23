'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email :'skinny@gmail.com',
      password: '123456',
      firstName: 'John',
      lastName: 'Nguyen',
      address:'Sài Sơn - Quốc Oai - Hà Nội',
      gender:1,
      typeRole : 'ROLE',
      keyRole:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};
