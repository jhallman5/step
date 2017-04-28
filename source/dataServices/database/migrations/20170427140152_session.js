exports.up = ( knex, Promise ) =>
  Promise.all( [
    knex.schema.createTable( 'session', table => {
      table.string( 'sid' ).notNullable()
      table.json( 'sess' ).notNullable()
      table.timestamp( 'expire' ).notNullable()
    })
  ] )

exports.down = ( knex, Promise ) =>
  Promise.all( [
    knex.schema.dropTable( 'session' )
  ] )
