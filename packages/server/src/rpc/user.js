const { USER } = require("../models");

const user_create = "/user/create";
const user_read = "/user/read";
const user_update = "/user/update";
const user_delete = "/user/delete";


const UserType = ({ email, password }) => ({ email, password })

const userCreate = (user_type = UserType) => {
    // const user = new USER({ ...user_type })
    console.log(user_type);
}

userCreate(UserType({ email: "phalbrilliant@gmail.com", password: "123" }))