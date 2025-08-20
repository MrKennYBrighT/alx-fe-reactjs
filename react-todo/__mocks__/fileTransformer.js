import path from 'path';

const transformer = {
  process(_, filename) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(filename))};`,
    };
  },
};

export default transformer;
