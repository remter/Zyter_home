import React, { Component } from "react"
import YoutubeResult from "./YoutubeResultComponent";

import APIKey from "../APIKey";

var youtube_url = "https://www.googleapis.com/youtube/v3/search"

class YoutubeSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inp: "",
            result: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }
    search = "";

    handleChange(e) {
        this.setState({ inp: e.target.value });
    }
    handleSubmit(){
        console.log("The current input is: " + this.state.inp);
        this.search = this.state.inp;
        this.getList(this.search);
    }
    handleKey(ev){
        if(ev.keyCode === 13) {
            this.handleSubmit();
        }
    }
    async getList(Search){
        this.list_get(APIKey, Search);
    }
    async list_get(APIKey, Search){
        console.log("This is the search parm: " + Search);
        //Input parameters
        var params = {
            "part" : "snippet",
            "key" : APIKey.key,
            "q" : Search
        }
        //Full url with all params 
        var f_url = youtube_url + "?" + (new URLSearchParams(params)).toString();
        
        //Get from server data
        var ret = await fetch(f_url, { 
            method: "GET"
        }).then( response => response.json() )
       
        //Log the response to console to check if it is good.
        this.setState({result: ret});
        console.log(ret)
        //Return the data
        return ret;

    }

    render(){
        return(
            <div>
                <div>
                    <input type="text"
                    placeholder={"search youtube"}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKey}
                    />
                    <button type = "button" onClick= {this.handleSubmit}> Submit</button>
                </div>
                <div>
                    <YoutubeResult inp = {this.search} results = {this.state.result} />
                </div>
            </div>

        )
    }

}
export default YoutubeSearch;