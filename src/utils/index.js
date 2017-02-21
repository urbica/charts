export const getDomain = (keys, items) => {
  const getValues = item =>
    keys.reduce((acc, key) => {
      const value = item[key];
      if (isNaN(value)) {
        return acc;
      }
      return acc.concat(value);
    }, []);

  const initialValues = getValues(items[0]);
  const initialValue = [Math.min(...initialValues), Math.max(...initialValues)];
  return items.slice(1).reduce(([min, max], item) => {
    const values = getValues(item);
    return [Math.min(...[min].concat(values)), Math.max(...[max].concat(values))];
  }, initialValue);
};
