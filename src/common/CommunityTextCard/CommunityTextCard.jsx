import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CommentIcon from '@material-ui/icons/ModeComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './CommunityTextCard.css';

const useStyles = makeStyles({
  root: {
    height: 233,
    position:'relative',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CommunityTextCard = props => {
  const classes = useStyles();
  const { title, text, comment, likes } = props;
  return (
    <div className="CommunityTextCard">
      <Card className={classes.root}>
        <CardContent>
          <span className="card-title">{title}</span>
          <p className="card-text">{text}</p>
          <div className="card-action">
            <span className="card-comment"><CommentIcon /> &nbsp;{comment}</span>
            <span className="card-likes"><FavoriteIcon /> &nbsp;{likes}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CommunityTextCard;