import React, { Component } from "react"
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class YoutubeResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
       
    }
    
    





    render(){
        if((this.props.inp === "")|| (this.props.results === "")){
            return(
                <div>
                    Blank Input
                </div>
            )
        }

        return(
            <div>
                {this.props.inp}
                {this.props.results.items.map( (result)=>
                    (
                   
                        <Row key={result.etag}> 
                        <Col className="col-6 offset-3">
                                <Card style={{marginTop: 10, marginBottom: 10, marginLeft: 'auto', 'backgroundColor': 'darkgrey'}}>
                                    <Row >
                                        <Col>
                                            <CardImg top src={result.snippet.thumbnails.default.url} alt="Default video image" style={{ margin:5}}   />
                                        </Col>
                                        <Col>
                                            <CardBody >
                                            <CardTitle style={{ color: 'black', 'fontWeight': 'bold' }} >{result.snippet.title}</CardTitle>
                                            <CardText style={{ color: 'black' }}>{result.snippet.description}</CardText>
                                            </CardBody>
                                        </Col>
                                    </Row> 

                                </Card>
                        </Col>
                        </Row> 
                    )
                )}
                
            </div> 
            
        )
    }

}
export default YoutubeResult;