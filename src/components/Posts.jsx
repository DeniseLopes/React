import React from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post';
import Axior from 'axios';
import Axios from 'axios';

class  Posts extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        posts: objeto.posts,
        titulo: "",
        url: ""
      }

      // Axios.get('http://www.mocky.io/v2/5d7193e0330000f7cf7799a1')

      // .then((result) => {
      //   this.setState({
      //     posts: result.data.posts
      //   })
      // })

      this._excluirPost = this._excluirPost.bind(this)
    }
  
  
  _excluirPost(id){
    var posts = this.state.posts.filter( (post) => {
      return post.id != id;
    }) 
  
    this.setState({posts})
  }

  _salvarPost(){
    var posts = this.state.posts
    var newId = this.state.posts[this.state.posts.length-1].id +1
    
    var newPost = {
      titulo: this.state.titulo,
      url: this.state.url,
      id: newId
    }

    posts.push(newPost)
    this.setState({
      posts:posts,
      titulo:"",
      url: ""
    })
  }

  

  
    render(){
      return (
        <div className="App">
          {
            //foreach
            this.state.posts.map((post, i) => 
              <Post
              id={post.id}
                key={i}
                url_imagem={post.url}
                titulo={post.titulo}
                _excluirPost={this._excluirPost}
                _salvarPost={this._salvarPost}
              />
            )
          }
          
          <div>
            <span>Titulo</span>
            <input value={this.state.titulo}  onChange={ (e) => {
              this.setState({titulo: e.target.value})
            }}/>
          </div>

          <div>
            <span>URL</span>
            <input value={this.state.url} onChange={ (e) => {
              this.setState({url: e.target.value})
            }}/>
          </div>

          <div>
            <button  onClick={ () =>{this._salvarPost() }}>Salvar</button>

          </div>
        </div>
      )
    }
  
  }
  
  export default Posts;
  