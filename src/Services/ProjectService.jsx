import Cookies from "js-cookie";

const projectUrl = "http://localhost:8080/projects";
export const getProjectsForUser = async () => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  // Fetch all the projects for a given user and set the list of projects available.
  return fetch(projectUrl + "/user/" + userDetails.id, {
    method: "get",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    },
    (error) => {
      console.log(`Error during backend response : ${error}`);
    }
  );
};

export const createProject = (projectDetails) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  //
  projectDetails.userId = userDetails.id;
};
