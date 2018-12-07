function response(res, status, type, content, view) {
  res.status(status);

  switch(type) {
    case 'render':
      res.render(view, { content });
      break;

    case 'send':
      res.send(content);
      break;

    case 'json':
      res.json(content);
      break;

    default:
      res.send('Wrong response type');
      break;
  }
}

module.exports = {
  getContentType(request) {
    const reqContentType = request.get('Content-Type').toLowerCase();
    let contentType;
    if(reqContentType.startsWith('multipart/form-data'))
      contentType = 'multipart/form-data';
    if(reqContentType.startsWith('application/json'))
      contentType = 'application/json';

    return contentType;
  },

  factoryResponse(res, status, content, view = '') {
    res.format({
      'text/html': () =>
        response(res, status, 'render', content, view),
      'application/json': () =>
        response(res, status, 'json', content),
      'default': () =>
        response(res, 406, 'send', 'Not Acceptable')
    })
  }
}