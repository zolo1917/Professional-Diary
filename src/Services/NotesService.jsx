import Cookies from "js-cookie";
const noteUrl = "http://34.42.111.229/notes";
export async function getNotes() {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  return fetch(noteUrl, {
    method: "get",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  }).then((response) => {
    if (response.status === 200 || response.status === 304) {
      return response.json();
    }
  });
}

export const createNote = async (noteObject) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  await fetch(noteUrl, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
    body: JSON.stringify(noteObject),
  });
};

export const updateNote = async (noteId, noteObject) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  await fetch(noteUrl + `/${noteId}`, {
    method: "put",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
    body: JSON.stringify(noteObject),
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
  });
};
