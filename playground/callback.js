// https://maps.google.com/maps/api/geocode/json?key=value&keytwo=valuetwo

let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Vikram'
    };
    
    
    setTimeout( () => {
        callback(user);
    }, 3000);
    
};

getUser(31, (userObject) => {
    console.log(userObject);
});