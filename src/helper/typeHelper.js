const isString = (text) => {
  return Object.prototype.toString.call(text) === '[object String]';
};

export { isString };
