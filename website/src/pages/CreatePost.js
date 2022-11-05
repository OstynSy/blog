import React, {useState} from "react";
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../firebase";

function CreatePost() {
    const [author, setAuthor] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "BlogPosts")
    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText})
    }

    return <div className="CreatePostPage">
        <div className="CreatePostForm">
            <h1>Create a Post</h1>
            <div className="input">
                <label>Title:</label>
                <input placeholder="Title..." onChange={(event) =>{
                    setTitle(event.target.value);
                }}></input>
            </div>
            <div className="input">
                <label>Text Area:</label>
                <input placeholder="Post..." onChange={(event) =>{
                    setPostText(event.target.value);
                }}></input> 
            </div>
            <button onClick={createPost}>Submit Post</button>
        </div>
    </div>
}

export default CreatePost;