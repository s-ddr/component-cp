const createTestID = (context, events, done) => {
  context.vars.id = Math.floor(Math.random() * 1000001) + 9000000
  return done();
}

module.exports = { createTestID }