const DataLoader = require('dataloader');
const sampleRepo = require('@app/database/repo/sample.repo');

const batchUserIds = async (ids) => {
  const samples = await sampleRepo().getSamples();
  const groupedById = ids.map((id) =>
    samples.filter((sample) => sample.user.equals(id))
  );
  return Promise.resolve(groupedById);
};

module.exports = new DataLoader(batchUserIds);
