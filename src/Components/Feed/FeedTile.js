import React from 'react';
import { withRouter } from 'react-router';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import './FeedStyles.css';
import { Button } from '../../../node_modules/@material-ui/core';

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
        isHover: false,
        isClicked: false
    };

    onFavorite = () => {
        this.setState(prevSate => ({
            isFavorite: !prevSate.isFavorite
        }));
    }

    displayFavorite = () => {
        if (!this.state.isFavorite) {
            return (
                <IconButton className="feed-tile-icon inactive"
                    onClick={this.onFavorite}>
                    <i className="far fa-heart favorite-icon"></i>
                </IconButton>);
        } else {
            return (
                <IconButton className="feed-tile-icon active"
                    onClick={this.onFavorite}>
                    <i className="fas fa-heart favorite-icon"></i>
                </IconButton>);
        }
    }

    displaySocial = () => {
        return (<IconButton className="feed-tile-icon inactive">
            <i className="fas fa-share-alt social-icon"></i>
        </IconButton>);
    }

    handleImageClick = () => {
        window.location.href = this.props.tile.url;
    }

    handleBuy = () => {
        console.log("Buy")
    }
    handleNotify = () => {
        this.setState({
        isClicked: true
        });
    }
    displayActionButton = () => {
         if(this.props.tile.isAvailable){
             return(<Button className="action-button" 
             variant="contained" 
             color="primary"
             onClick={this.handleBuy}>Buy</Button>)
         } else if(!this.state.isClicked){
            return(<Button className="action-button" 
            variant="contained" 
            color="secondary"
            onClick={this.handleNotify}>Notify Me</Button>)
         } else{
            return(<Button className="action-button" 
            variant="contained" 
            disabled
            color="primary">Notification Sent!</Button>)
         }
    }

    render() {
        const { classes, tile } = this.props;
        return (
            <div className="feed-tile-frame">
                <GridListTile className="feed-tile" key={tile.id}>
                    <div className="feed-tile-img-frame">
                        <img className="feed-tile-img"
                            src={tile.img} alt={tile.title}
                            onClick={this.handleImageClick} />
                        <div className="feed-tile-icon">
                            <div className="tile-icons">
                                {this.displaySocial()}
                                {this.displayFavorite()}
                            </div>
                        </div>
                    </div>
                </GridListTile>
                
                <div className='feed-tile-info'>
                <div>
                    {this.displayActionButton()}
                </div>
                <br/>
                    <div className='tile-company'>{tile.company}</div>
                    <div className='tile-title'>{tile.title}</div>
                </div>
            </div>)
    }
}

FeedTile.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object
};


export default withRouter(FeedTile);
