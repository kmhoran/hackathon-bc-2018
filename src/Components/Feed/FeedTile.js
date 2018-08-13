import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import './FeedStyles.css';

const styles = theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    imgFullHeight: {
        height: 5
    }
});


class FeedTile extends React.Component {

    state = {
        isFavorite: false,
        isHover: false
    };

    onFavorite = () => {
        this.setState(prevSate => ({
            isFavorite: !prevSate.isFavorite
        }));
    }

    displayFavorite = () => {
        if (!this.state.isFavorite) {
            return (<i className="far fa-heart feed-tile-icon"></i>);
        } else {
            return (<i className="fas fa-heart feed-tile-icon"></i>);
        }
    }


    render() {
        const { classes, tile } = this.props;
        return (
            <div className="feed-tile-frame"
                 onClick={this.onFavorite}>
                <GridListTile className="feed-tile" key={tile.id}>
                    <div className="feed-tile-img-frame">
                        <img className="feed-tile-img" src={tile.img} alt={tile.title} />
                        <div className="feed-tile-icon">
                {this.displayFavorite()}
                
            </div>
                    </div>
                </GridListTile>
                <div className='feed-tile-info'>
                  <div className='tile-company'>{tile.company}</div>
                   <div className='tile-title'>{tile.title}</div>
                </div>
            </div>)
    }
}

FeedTile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedTile);
