const noteUrl = "http://localhost:4301/notes";
export async function getNotes() {
  let response = await fetch(noteUrl)
    .then(
      (response) => {
        return response.json();
      },
      (response) => {
        console.log(response);
      }
    )
    .then((data) => {
      return data;
    });
  console.log(response);
}

export const createNote = async (noteObject) => {
  const response = await fetch(noteUrl, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(noteObject),
  });
};

export const updateNote = async (noteId, noteObject) => {
  const response = await fetch(noteUrl + `/${noteId}`, {
    method: "put",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(noteObject),
  });
};

export const deleteNote = async (noteId) => {
  const response = await fetch(noteUrl + `/${noteId}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json",
    },
  });
};
