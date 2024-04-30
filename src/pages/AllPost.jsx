import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../services/api";
import { Box, Typography, Card, CardContent, InputBase, styled } from '@mui/material';

const SearchWrapper = styled(Box) ({
    marginTop: 74,
    display:'flex',
    justifyContent: 'center',
    '& > div': {
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'center',
        alighItems: 'center',
        marginRight: 20,
        paddingLeft: 10
    }
})

const PostWrapper = styled(Box) ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    flexWrap: 'wrap',
    '& > div' : {
        border: '1px solid #442d0',
        borderRadius: 10,
        margin: 10,
        width: '30%',
        height: 300,
    }
})


const AllPost = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] =useState("");

    useEffect(() => {
        const getData =  async () => {
            const response = await getAllPosts();
            setPosts(response.data);
        }
        getData();
    }, [])

    return(
        <>
            <Header />
            <SearchWrapper>
                <InputBase 
                    placeholder="search by job title"
                    onChange={(e)=> setText(e.target.value)}
                />
            </SearchWrapper>
            <PostWrapper>
                    {
                        posts.filter(post => post.profile.toLowerCase().includes(text.toLowerCase())).map(post =>(
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{post.profile}</Typography>
                                    <Typography>{post.type === "offline" ? "Remote" : "Office"}</Typography>
                                    <Typography>Salary: {post.salary}</Typography>
                                    <Typography
                                    style={{color: '#6f6f6f', margin: '10px 0'}}
                                    >
                                        {post.description.length > 150 ? post.description.substring(0, 150) + "..." : post.description}</Typography>
                                    <Typography><b>Experience:</b> {post.experience}</Typography>
                                    <Typography><b>Technology:</b> {post.technology}</Typography>
                                    <Typography
                                        style={{color: '#6f6f6f', marginTop: 'auto'}}
                                    >
                                        Posted on : {new Date(post.createdAt).toLocaleDateString()} </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
            </PostWrapper>
        </>
    ) 
}

export default AllPost;