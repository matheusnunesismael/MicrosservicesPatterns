export default () => {
  const mongoUsername = process.env.MONGO_USERNAME;
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoHost = process.env.MONGO_HOST;
  const mongoUri = `${process.env.ENV === 'PROD'
    ? `mongodb+srv://${mongoUsername}:${mongoPassword}@`
    : 'mongodb://'
    }:${mongoHost}`;

  return {
    databaseConnection: {
      uri: mongoUri,
      options: {
        newUrlParser: true,
      },
      masterDatabase: process.env.MONGO_MASTER_DATABASE,
    },
  };
};
