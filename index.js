const baseURL = 'https://api.github.com';
const baseURL = 'https://api.github.com';
const user = 'jsbenning';

function getToken() {
  return 'df37d75097c4d706ccf5423ad3d8481c821ef8ff';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let token = getToken();
  fetch('https://github.com/' + repo, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => console.log(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
