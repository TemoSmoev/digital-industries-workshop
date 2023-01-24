export let counter = () => {
  let count = 0;
  return {
    increase: () => {
      count++;
    },
    decrease: () => {
      count--;
    },
    getCount: () => {
      return count;
    },
  };
};

export let obj = {
  a: 7,
  b: 9,
};
