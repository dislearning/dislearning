const locate = (value, fromIndex) => value.indexOf('[', fromIndex);

const youtube = (eat, value, silent) => {
  var match = /^\[(\s*)youtube(\s+)id=(\w+)(\s*)\/]/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    return eat(match[0])({
      type: 'element',
      data: {
        hName: 'div',
        hProperties: {
          className: ['youtube-wrapper']
        }
      },
      children: [
        {
          type: 'element',
          data: {
            hName: 'iframe',
            hProperties: {
              width: '560',
              height: '315',
              src: `https://www.youtube.com/embed/${match[3]}`,
              frameborder: '0',
              allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen: true
            }
          },
          children: []
        }
      ]
    });
  }
};

youtube.locator = locate;
youtube.loose = false;

function parser() {
  const Parser = this.Parser;
  const tokenizers = Parser.prototype.blockTokenizers;
  const methods = Parser.prototype.blockMethods;
  tokenizers.youtube = youtube;
  methods.splice(methods.indexOf('html'), 0, 'youtube');
}

export default {
  parser
};
