function getProjects() {
    const urlGithub = 'https://api.github.com/users/Edwalbert/repos';

    fetch(urlGithub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            console.log('erro!')
        })
}

getProjects();