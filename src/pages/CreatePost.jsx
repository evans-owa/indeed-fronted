// import React, { Profiler } from "react";
import { useState } from "react";
import Header from "../components/Header";
import {Box, Typography, styled, TextField, Button} from '@mui/material';
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

// styling
const Component = styled(Box) ({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const Container = styled(Box)({
    display: "flex",
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize:35,
        fontWeight:700,
        opacity: '.7',
    } 
})

const FormWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    padding: 20,
    background: '#ffffff',
    borderRadius: 20,
    '& > *':{
        marginTop: '20px !important'
    }
})

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [],
    salary: ""

}
const options = {
    type: ["online", "offline"],
    experience: ["0-2 years", "3-5 years", "6-8 years", "8 and more years"],
    technology: ["Java", "Jvascript","R", "angular", "react", "Node js", "Docker", " AWS", " HTML", "CSS", "C++"],
    salary : ["Ksh 40000", "Ksh 45000", "Ksh 49000", "Ksh 50000","Ksh 55000", "Ksh 60000", "Ksh 72000"]
}

const CreatePost = () => { 

    const [data, setData] = useState(defaultObj);

    const navigate = useNavigate();

    const image = "https://www.talentprise.com/wp-content/uploads/2023/02/Talentprise-job-posting.svg";
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const saveJob = async() => {
        await savePost(data);
        navigate(routePath.posts);
    }

    return (
        <>
            <Header />
                <Component>
                    <Container>
                        <Typography> Create  job post </Typography>
                        <img src={image} alt="post" style={{ width: 150}} />
                    </Container>
                    <FormWrapper>
                            <TextField
                                placeholder="Job Title"
                                name="profile"
                                onChange={handleChange}
                            />
                            <Dropdown
                                label="Job type"
                                id="job-type-label"
                                value={data.type}
                                handleChange={handleChange}
                                name="type"
                                options={options.type}
                            />
                            <TextField 
                                placeholder="Job Description"
                                name="description"
                                onChange={handleChange}
                            />
                            <Dropdown
                                label="Experience"
                                id="job-experience-label"
                                value={data.experience}
                                handleChange={handleChange}
                                options={options.experience}
                                name="experience"
                            />
                            <Dropdown
                                label="Technology"
                                id="job-technology-label"
                                value={data.technology}
                                handleChange={handleChange}
                                options={options.technology}
                                name="technology"
                                multiple
                            />
                            <Dropdown
                                label="Salary"
                                id="job-salary-label"
                                value={data.salary}
                                handleChange={handleChange}
                                options={options.salary}
                                name="salary"
                            />
                            <Button onClick={()=> saveJob()} variant="contained" >Save Jobs</Button>
                    </FormWrapper>
                </Component>
        </>
    )
}

export default CreatePost;