import React from 'react';
import '../App.css';


class Post extends React.Component{
  render (){

    return (
      <div>
        <div>
          <img className="imagem" src={this.props.url_imagem} />
          <div>Titulo: {this.props.titulo} </div>
          </div>   
          <button onClick={() => this.props._excluirPost(this.props.id)}>Excluir</button>      
      </div>
    )
    }
    }  
    export default Post;