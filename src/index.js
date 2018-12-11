
import React,{ Component } from 'react';
import ReactDom from 'react-dom';

import JSON from './db.json';
//Componets
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{

    state = {
        news:JSON,
        filtered:[]
    }

    getKeyword = (event) =>{
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered 
        })
       // console.log(filtered)
    }
    render(){
    let newsFiltere = this.state.filtered;
    let newswhole = this.state.news
return(
    <div>
        <Header keyword={this.getKeyword}/>
        <NewsList news={this.state.filtered.length === 0 ? this.state.news: this.state.filtered}/>
        </div>
)
    }
}

ReactDom.render(<App/>,
document.getElementById("root")
)

