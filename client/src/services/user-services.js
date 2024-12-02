const userService = {
    get: function(id) {
        // return fetch('http://localhost:4000/user/' + id, {
         return fetch('https://eazy-bytes-final-project.vercel.app/user/' + id, {
           method: 'GET',
           credentials: 'include'
        }).then(res => res.json());
    },
    register: function(data) {
        // return fetch(`http://localhost:4000/user/register`, {
         return fetch(`https://eazy-bytes-final-project.vercel.app/user/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    login: function(data) {
        // return fetch(`http://localhost:4000/user/login`, {
         return fetch(`https://eazy-bytes-final-project.vercel.app/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.json();
        }).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    logout: function() {
        // return fetch(`http://localhost:4000/user/logout`, {
         return fetch(`https://eazy-bytes-final-project.vercel.app/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text()).then(() => sessionStorage.clear());
    }
}

export default userService;
