var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = (state) => {
    if (request.readyState === 4) {
        var res = request.response;
        var resObj = JSON.parse(res);
        console.log(resObj.page);
    }
    /* console.log(request); */
};

/* Lo anterior es una petición a la forma antigua*/