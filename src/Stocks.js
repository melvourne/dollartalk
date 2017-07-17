import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Stocks extends Component {

  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr: 'stocks'
    };
    this.getReddit = this.getReddit.bind(this);
  }

  render(){
    return(
      <div>
        {this.state.posts.map(post =>

        <Card 
        style={{width: '80%',
        padding: '20px',
        margin: '0 auto',
        marginTop: '10',
        display: 'flex'}}>
            <CardHeader
            title={post.title}
            subtitle={post.url}
            actAsExpander={false}
            showExpandableButton={false}
            />
                <div style={styles.wrapper}>
                    <Chip 
                    backgroundColor='#FFCDD2'
                    style={styles.chip}>
                        <Avatar backgroundColor='#F44336' size={32}>{post.ups}</Avatar>
                    </Chip>
                    <Chip
                    backgroundColor='#90CAF9'
                    style={styles.chip}>
        
                        <Avatar backgroundColor='#1565C0' icon={<FontIcon className="material-icons">face</FontIcon>} />
                        {post.author}
                    </Chip>
                    <Chip
                    backgroundColor='#81C784'
                    style={styles.chip}>
                        <Avatar backgroundColor='#4CAF50' size={32}>{post.num_comments}</Avatar>
                        comments
                    </Chip>
                </div>
    

            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
             </CardText>
        </Card>
        )}   
      </div>
    );
  }
}

class Showstocks extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: true
    }
  }

  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
        </div>
        {
          this.state.childVisible
            ? <Stocks />
            : null
        }
      </div>
    )
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};


export default Showstocks;







