import React from 'react';
import useState from 'react';
import useStyles from 'react';
import useEffect from 'react';
import list from 'react';
import userRouter from './api-user';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import ArrowForward from '@material-ui/core/ArrowForward';

export default function Users() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        userRouter.listUsers(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error);
            } else {
                setUsers(data);
            }
            });
            return function abort() {
                abortController.abort();
            }
        }, []);

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                {users.map((item, i) => {
                    return /**<Link to={"/user/"} key={i}>*/ <ListItem button>
                            <ListItemAvatar>
                                <Avatar>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            {/* <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction> */}
                        </ListItem>
                    // </Link>
                })}
            </List>
        </Paper>
    )
}