import Cookies from "js-cookie";
// const noteUrl = "https://noteserver.lazycoder.xyz/notes";
const noteUrl = "http://localhost:4301/notes";
export async function getNotes() {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  return fetch(noteUrl, {
    method: "get",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  }).then(
    (response) => {
      if (response.status === 200 || response.status === 304) {
        return response.json();
      }
    },
    (response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Error in call");
      }
    }
  );
}

export function getNoteById(noteId) {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  return fetch(noteUrl + `/${noteId}`, {
    method: "get",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  }).then(
    (response) => {
      if (response.status === 200 || response.status === 304) {
        return response.json();
      }
    },
    (response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Error in call");
      }
    }
  );
}

export const createNote = async (noteObject) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  await fetch(noteUrl, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
    body: JSON.stringify({ ...noteObject, userId: userDetails?.userId }),
  }).then(
    (response) => {
      if (response.status === 200 || response.status === 304) {
        return response.json();
      }
    },
    (response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Error in call");
      }
    }
  );
};

export const updateNote = async (noteId, noteObject) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  await fetch(noteUrl + `/${noteId}`, {
    method: "put",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
    body: JSON.stringify({ ...noteObject, userId: userDetails?.userId }),
  }).then((response) => {
    if (response.status === 200 || response.status === 304) {
      return response.json();
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Error in call");
    }
  });
};

export const deleteNote = async (noteId) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  await fetch(noteUrl + `/${noteId}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  }).then(
    (response) => {
      if (response.status === 200 || response.status === 304) {
        return response.json();
      }
    },
    (response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Error in call");
      }
    }
  );
};
