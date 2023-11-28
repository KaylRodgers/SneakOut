const listProducts = async (signal) => {
    try {
        let response = await fetch('/products', {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

const listUsers = async (signal) => {
    try {
        let response = await fetch('/api/users', {
            method: 'GET',
            signal: signal,
        })
        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

const create =  async (user) => {
    try {
        let response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

const update = async (user) => {
    try {
        let response = await fetch('/api/users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

const remove = async (user) => {
    try {
        let response = await fetch('/api/users', {
            'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

const findOneUser = async(user) => {
    console.log("complete this");
};

export default { listProducts, listUsers, create, update, remove, findOneUser };