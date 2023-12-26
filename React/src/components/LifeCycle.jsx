import { useState, useEffect } from 'react';

const LifeCycle = () => {
    
    const [posts, setPosts] = useState(false);
    const [ data, setData ] = useState({})
    const [ reload, setReload ] = useState(false)


    useEffect(() => {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(json => {
            setPosts(json)
            console.log(json)
        })
        .catch(error => console.log(error));

        console.log("useEffect called");

        return () => {
            console.log("Date fetched");
        }
    }, []);  

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(json => {
            ////Reload the data from the server
            // setReload(!reload)
            ////Empty the form
            // setData({})
            // document.querySelector('input[name="title"]').value = '';
            // document.querySelector('textarea[name="content"]').value = '';
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>Form Handling & Life Cycle</h1>
            <hr />
            <div>
                <h2>New Post</h2>
                <form>
                    <label htmlFor="name">Post Title:</label>
                    <input type="text" name="title" value={data?.title} onChange={handleChange} /><br />
                    <label htmlFor="message">Post Content:</label>
                    <textarea name="content" onChange={handleChange} value={data?.content} ></textarea><br />
                    <button type="submit" onClick={handleSubmit} >Submit</button>
                </form>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LifeCycle;