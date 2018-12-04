module.exports = {
  getContentType(request) {
    const reqContentType = request.get('Content-Type').toLowerCase();
    let contentType;
    if(reqContentType.startsWith('multipart/form-data'))
      contentType = 'multipart/form-data';
    if(reqContentType.startsWith('application/json'))
      contentType = 'application/json';

    return contentType;
  }
}