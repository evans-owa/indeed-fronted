import Header from "../components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import manhaving from "../assets/img/man-having.jpg";
import { useNavigate } from "react-router-dom";
import  { routePath } from "../routes/route";


const Component = styled(Box)({ 
    marginTop: 70,
    display: 'flex',
    height: '100vh',
    alignItems: "center",
    margin: '0 130px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justfyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize:56,
            lineHeignth: 1.24,
            letterSpacing: -1,
        },
        '& > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform:'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48,
        }
    }
})

    const Home = () => {

        const navigate = useNavigate();

        const animateImage = manhaving;
        
        return (
            <div>
            <Header />
            <Component> 
                <Box>
                    <Typography> Let make you next <br /> great Hire. Fast </Typography>
                    <Button variant="contained" onClick={() => navigate(routePath.create)} > Post a job </Button>
                </Box>
                <Box>
                <img src={animateImage} alt="cover" style={{ width: 600 }}/>
                </Box>
            </Component>
            <p>Hello this home</p>
            </div>
        );
    };

export default Home;
