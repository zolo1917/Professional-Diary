import Cookies from "js-cookie";

const projectUrl = "http://localhost:8080/project";
export const getProjectsForUser = async () => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  // Fetch all the projects for a given user and set the list of projects available.
  console.log(userDetails);
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

export const getProjectById = (projectId) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  return fetch(projectUrl + `/${projectId}`, {
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
  console.log(Cookies.get("userDetails").toString());
  let userDetails = JSON.parse(Cookies.get("userDetails").toString());
  projectDetails.userId = userDetails.id;
  return fetch(projectUrl, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails.accessToken}`,
    },
    body: JSON.stringify({ ...projectDetails, userId: userDetails?.id }),
  }).then(
    (response) => {
      if (response.ok) {
        console.log(response);
        return response.body;
      }
    },
    (error) => {
      console.log(`Error during backend response: ${error}`);
    }
  );
};

export const updateProject = (projectId, projectDetails) => {
  console.log(projectDetails);
  console.log(Cookies.get("userDetails").toString());
  let userDetails = JSON.parse(Cookies.get("userDetails").toString());
  projectDetails.userId = userDetails.id;
  return fetch(projectUrl + `/${projectId}`, {
    method: "put",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
    body: JSON.stringify({ ...projectDetails, userId: userDetails?.id }),
  }).then(
    (response) => {
      if (response.ok) {
        return response.body;
      }
    },
    (error) => {
      console.log(`Error during backend Response : ${error}`);
    }
  );
};
