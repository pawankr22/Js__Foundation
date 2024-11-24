function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));

// What is promise chaining?
// Promise chaining is a technique used to handle asynchronous 
// operations in a more readable and maintainable way.

// Which statement best describes the Promise.all() method?
// The Promise.all() method returns a promise that resolves when all
// of the promises in the array have resolved, or rejects with the reason of the first promise that
// rejects.