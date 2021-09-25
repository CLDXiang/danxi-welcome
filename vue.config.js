module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const newArgs = [...args];
      newArgs[0].title = '旦夕 | 可能是复旦学生最好的第三方校园服务APP';
      return newArgs;
    });
  },
};
