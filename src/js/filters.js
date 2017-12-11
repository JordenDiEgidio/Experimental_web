const seriouslyCallback = Seriously => {
  const seriously = new Seriously();
  const target = seriously.target(`#canvas2`);
  const sepiafilter = seriously.effect(`sepia`);
  console.log(seriously);
  console.log(target);
  console.log(sepiafilter);
  const src = seriously.source(`#canvas`);
  sepiafilter.source = src;
  target.source = sepiafilter;
  seriously.go();
};

export default () => {
  require([
    `./lib/effects/seriously`,
    `./lib/effects/seriously.sepia`
  ], seriouslyCallback);
};
