// A file to store all support functions which aren't possible to put in a 
// special class.

function getAnswerFromApi(path) {
  return fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("The handling of the API was unsuccessful.");
      }
      return response.json();
    })
    .then((data) => { return data; })
    .catch((error) => { console.log(error); });
}

export { getAnswerFromApi };