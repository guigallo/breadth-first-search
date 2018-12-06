function messageOrError(errors, defaultMessage) {
  let content;

  if(errors.length > 0) {
    content = errors
  } else {
    content = defaultMessage;
  }

  return content;
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

  //response(res, status, type, errors, message, view) {
  response(res, status, type, content, view) {
    res.status(status);
    //const content = messageOrError(errors, message);

    switch(type) {
      case 'render':
        res.render(view, { message: content });
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
}