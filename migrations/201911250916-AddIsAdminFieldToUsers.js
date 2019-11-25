 'use strict';

 const columnAddTypes = [{
     name: 'is_admin', 
     type: (Sequelize) => {
         return {
             type: Sequelize.BOOLEAN,
             allowNull: true,
             defaultValue: false
         }
     }
 }];

 module.exports = {
     up: (queryInterface, Sequelize) => {
         return Promise.all(
             columnAddTypes.map(c => {
                 return queryInterface.addColumn(
                     'Users',
                     c.name,
                     c.type(Sequelize)
                 )
             })
         );
     },

     down: (queryInterface, Sequelize) => {
         return Promise.all(
             columnAddTypes.map(c => {
                return queryInterface.removeColumn(
                    'Users',
                    c.name,
                )
             })
         )
     }
 };