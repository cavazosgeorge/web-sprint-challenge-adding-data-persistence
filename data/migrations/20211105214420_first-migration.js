exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name").notNullable();
      table.string("project_description");
      table.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resouce_name").notNullable().unique();
      table.string("resource_description");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};
