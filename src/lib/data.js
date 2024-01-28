import { Post, User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = Post.find();
        return posts;       
    } catch (error) {
    console.log(error); 
    throw new Error ("failed  to fetch")
    }
};
export const getPost = async (slug) => {
    try {
        connectToDb() 
        const post = Post.find({slug});
        return post;       
    } catch (error) {
    console.log(error); 
    throw new Error ("failed  to fetch post")
    }
};
export const getUser = async (id) => {
    try {
        connectToDb() 
        const user = User.findById();
        return user;       
    } catch (error) {
    console.log(error); 
    throw new Error ("failed  to fetch user")
    }
};
export const getUsers = async (id) => {
    try {
        connectToDb() 
        const users = User.find();
        return users;       
    } catch (error) {
    console.log(error); 
    throw new Error ("failed  to fetch users")
    }
};
