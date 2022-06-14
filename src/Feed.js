import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'
// import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { collection, getDocs, addDoc, serverTimestamp, orderBy } from '@firebase/firestore'

function Feed() {

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    const postsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef, orderBy('created_at'));
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
    });
    // useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) =>
    //     setPosts(
    //         snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         }))
    //     )
    // );

    // }, []);

    const sendPost = async (e) => {
        e.preventDefault()
        await addDoc(postsCollectionRef, {
            name: 'Newson Thokchom',
            description: 'Description',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp(),
        })

        setInput('')
        // db.collection('posts').add({
        //     name: 'Newson Singh',
        //     description: 'This is firebase test',
        //     message: input,
        //     photoUrl: '',
        //     timestamp: '',
        //     timestamp: serverTimestamp(),
        // })
        // setPosts([...posts])
    }

    return (
        <div className='feed'>
            <div div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
                </div>
            </div>
            {posts.map(({ id, name, description, message, photoUrl }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

            {/* {posts.map((id, data: {name, description, message, photoUrl} }) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
            ))} */}

        </div>
    )
}

export default Feed