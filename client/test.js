fetch("https://whrl2d74-3000.euw.devtunnels.ms/api/users/get")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
