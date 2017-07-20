import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { PocketButton, TwitterTweetButton } from 'react-social-sharebuttons';

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
        key={post.id}
        style={{width: '80%',
        padding: '20px',
        margin: '0 auto',
        marginTop: '10px',
        backgroundColor: '#F5F5F5',
        display: 'flex'}}>
            <CardHeader
            title={post.title}
            subtitle={post.url}
            actAsExpander={true}
            showExpandableButton={true}
            />
                <div style={styles.wrapper}>
                    <Chip 
                    backgroundColor='#FFEBEE'
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
              {post.body}
                <p>Messenger bag semiotics pour-over you probably haven't heard of them, thundercats tattooed cred raw denim before they sold out pickled selfies raclette polaroid. Gluten-free squid yr copper mug green juice snackwave, DIY keffiyeh typewriter vexillologist deep v. 
                Yr iPhone chia pug tbh yuccie neutra ethical flexitarian offal. Mixtape 8-bit literally, affogato scenester etsy hot chicken. Tumblr craft beer austin subway tile, waistcoat fanny pack whatever gochujang humblebrag. Narwhal XOXO literally kinfolk humblebrag succulents direct trade cliche before they sold out chillwave pok pok VHS. 
                Taiyaki palo santo single-origin coffee semiotics 3 wolf moon ugh 90's. Synth pitchfork vaporware humblebrag, ugh bespoke copper mug lo-fi gochujang you probably haven't heard of them palo santo keytar hexagon locavore biodiesel. Everyday carry yr keytar godard blue bottle intelligentsia gochujang.
                </p>
                <p>
                Flannel seitan distillery wolf 8-bit franzen. Succulents williamsburg taiyaki godard. Adaptogen photo booth bicycle rights, echo park literally wayfarers irony neutra kombucha biodiesel man braid whatever snackwave. Gastropub raw denim migas, echo park put a bird on it glossier sartorial microdosing fanny pack meditation. 
                Normcore street art actually swag, four dollar toast aesthetic raclette deep v vape keffiyeh gochujang affogato. Subway tile af gentrify single-origin coffee tacos bespoke. Small batch fanny pack trust fund butcher hot chicken typewriter. Scenester forage banjo freegan, semiotics chicharrones echo park listicle VHS pour-over. 
                Chartreuse deep v direct trade poke wayfarers kombucha selfies selvage XOXO chillwave chia neutra. Hell of man bun kale chips shoreditch twee, photo booth fam banjo you probably haven't heard of them. Organic next level jean shorts palo santo seitan wolf master cleanse, artisan poke hexagon occupy farm-to-table pug small batch microdosing. La croix pinterest tattooed, hell of fingerstache ennui franzen hexagon bicycle rights pickled jianbing squid flannel post-ironic. Cray iceland keffiyeh authentic pork belly craft beer chartreuse four loko. Prism street art hot chicken, heirloom hexagon iceland typewriter activated charcoal narwhal. Austin food truck actually hexagon.
                </p>
                    <div style={styles.wrapper}>
                    <Chip
                    backgroundColor='#FFE57F'
                    style={styles.chip}>
        
                        <Avatar backgroundColor='#FFAB00' icon={<FontIcon className="material-icons">link</FontIcon>} />
                        <a style={{ textDecoration: 'none', color: 'black' }} href={post.url}>Go to Article</a>
                    </Chip>
                    <PocketButton url={post.url} text={post.title}/>
                    <TwitterTweetButton url={post.url} text={post.title} />
                </div>
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







