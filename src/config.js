env = process.env.NODE_ENV || 'dev';

const dev = {
  port: 4000,
};

const test = {
  port: 5000,
};

const config = {
  test,
  dev
};

module.exports = config[env];
