import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './CommunityImgCard.css';
import instalogo from "../../assets/instagram-btn.png";

const useStyles = makeStyles({
  root: {
    height: 282,
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

const CommunityImgCard = props => {
  const classes = useStyles();
  const { src } = props;
  return (
    <div className="CommunityImgCard">
      <img className="insta-tag" alt="Instagram Logo" src={instalogo} />
      <Card className={classes.root}>
        <CardContent>
          <img className="img-card" alt="instagram post" src={src} />
        </CardContent>
      </Card>
    </div>
  );
}

export default CommunityImgCard;