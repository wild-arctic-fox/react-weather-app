import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    button_more: {
        backgroundColor: "#123360"
    },
});

const ImgMediaCard = ({cityName, windSpeed, temp}) => {
    const classes = useStyles();
    let history = useHistory();

    let img;
    if (+temp >= 30) {
        img = "https://static9.depositphotos.com/1013513/1148/i/450/depositphotos_11488218-stock-photo-drought-land-and-hot-weather.jpg";
    } else if (+temp >= 20) {
        img = "https://www.visitaparadise.com/wp-content/themes/yootheme/cache/sunset-d863fdd4.jpeg";
    } else if (+temp <= 8) {
        img = "https://n1s1.hsmedia.ru/51/73/d4/5173d4be4eac386cd342dd030b7700e5/620x462_1_c072ac34feefeaceafd93829d1307ea2@1000x745_0xac120003_16141990241579768825.jpg";
    } else {
        img = "https://freedesignfile.com/upload/2017/05/Dark-storm-sky-with-rain-vector-background-02.jpg";
    }


    const showCityWeather = () => {
        history.push(`/forecast/${cityName}`);
    };


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="190"
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {cityName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Wind speed = {windSpeed}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Temperature = {temp}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" disabled variant="contained">
                    Share
                </Button>
                <Button variant="contained" color="secondary" size="medium" className={classes.button_more} onClick={showCityWeather}>
                    More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ImgMediaCard;