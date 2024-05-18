export const randomizeArray = (data) => {
    return data.map(() => {
      return Math.floor(Math.random() * 100);
    });
  };