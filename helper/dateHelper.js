module.exports = {
  dateToString(date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${year}-${month}-${day} ${hour}:${minute}`;
  }
}