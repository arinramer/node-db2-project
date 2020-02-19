
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments().notNullable();
      tbl.string('VIN').notNullable().index();
      tbl.string('Make').notNullable();
      tbl.string('Model').notNullable();
      tbl.integer('Milage').notNullable();
      tbl.string('Transmission');
      tbl.string('Title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
