function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "chaicode", url: "chaicode.com" })

    }, 2000);
  })

}

async function getUserData() {
  try {
    console.log('Fetching user data....');
    const userData = await fetchUserData()
    console.log("User data fetched successfully");

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();