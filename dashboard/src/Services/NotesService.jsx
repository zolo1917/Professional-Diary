import Cookies from "js-cookie";
const noteUrl = "http://localhost:4301/notes";
export async function getNotes() {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  return fetch(noteUrl, {
    method: "get",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  });
}

export const createNote = async (noteObject) => {
  let userDetails = JSON.parse(Cookies.get("userDetails"));
  const response = await fetch(noteUrl, {
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
  const response = await fetch(noteUrl + `/${noteId}`, {
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
  const response = await fetch(noteUrl + `/${noteId}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userDetails?.accessToken}`,
    },
  });
};
