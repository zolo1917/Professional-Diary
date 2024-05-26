const userServiceUrl = "http://localhost:4300";
export const login = async (email, password) => {
  const response = await fetch(userServiceUrl + "/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log(`The response status : ${response.status}`);
      }
    },
    (response) => {
      console.log(`There is an error in the call ${response.status}`);
    }
  );
  return response;
};
export const signup = async (email, password) => {
  await fetch(userServiceUrl + "/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log(`The response status : ${response.status}`);
      }
    },
    (response) => {
      console.log(`There is an error in the call ${response.status}`);
    }
  );
};
