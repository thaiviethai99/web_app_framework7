import React, { Component } from "react";
import axios from "axios";
import { App, Card, Col, View, Page, Navbar, Block, CardContent, List, ListItem, Preloader } from 'framework7-react';
import ConfigParam from './ConfigParams';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get(ConfigParam.API_URL)
      .then((response) => {
        this.setState({ listData: response.data.articles, isLoading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    /* Main Framework7 App component where we pass Framework7 params */
    if (this.state.isLoading === true) {
      return (<App>
        <View main>
          <Page id="panel-page">
            <Navbar title="News"></Navbar>
            <Block>
              <Col className="page-content display-flex flex-direction-column justify-content-center">
                <Preloader />
              </Col>
            </Block>
          </Page>
        </View>
      </App>
      )
    }

    return (<App>
      <View main>
        <Page id="panel-page">
          <Navbar title="News"></Navbar>
          <Block>
            <Card title="New Releases:">
              <CardContent padding={false}>
                <List medial-list>
                  {this.state.listData.map((item, index) => (
                    <ListItem
                      title={item.title}
                      key={index}
                    >
                      <img
                        slot="media"
                        alt={item.title}
                        src={item.urlToImage}
                        width="44"
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Block>
        </Page>
      </View>
    </App>
    )
  }
};

export default HomePage;