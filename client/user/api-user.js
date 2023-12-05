
const create = async (user) => {
    try {
        let response = await fetch('http://localhost:3001/api/users/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode: "cors",
          // credentials: "same-origin",
          body: JSON.stringify(user)
        });
        if (response) {
          return await response.json();
        }
        return "Error: No response"
    } catch(err) {
      console.log(err)
    }
  }
  
  const list = async (signal) => {
    try {
      let response = await fetch('http://localhost:3001/api/users/', {
        method: 'GET',
        signal: signal,
        mode: "no-cors",
        credentials: "same-origin"
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const read = async (params, credentials, signal) => {
    try {
      let response = await fetch('http://localhost:3001/api/users/', {
        method: 'GET',
        signal: signal,
        mode: "no-cors",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const update = async (params, credentials, user) => {
    try {
      let response = await fetch('http://localhost:3001/api/users/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        mode: "no-cors",
        credentials: "same-origin",
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('http://localhost:3001/api/users/', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        mode: "no-cors",
        credentials: "same-origin"
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const stripeUpdate = 0;
  
  export {
    create,
    list,
    read,
    update,
    remove,
    stripeUpdate
  }     