const apiUrl = process.env.REACT_APP_URL_API;

export const get = async (endpoint) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json()
  } catch (error) {
    return console.log(error);
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}

export const httpDelete = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({id: data})
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}

export const put = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data)
    });
    return response.json()
  } catch (error) {
    return console.log(error);
  }
}