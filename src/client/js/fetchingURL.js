// here we should fetch the url and return the data to use what we need from it


const fetchData = async (url = '', data = { url: '' }) => {
  console.log("i=sd")
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const newData = await response.json();
    return newData;
  } catch (error) {
    alert('Sorry, something went wrong!');
    return error;
  }
};

module.exports = {
  fetchData
};