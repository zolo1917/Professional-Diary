const userServiceUrl = "http://localhost:4300";
export const login = async (email, password) => {
  console.log(JSON.stringify({ email, password }));
  const response = await fetch(userServiceUrl + "/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(
    (response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        console.log(`The response status : ${response.status}`);
      }
    },
    (response) => {
      console.log("There is an error in the call");
    }
  );
  return response;
};
