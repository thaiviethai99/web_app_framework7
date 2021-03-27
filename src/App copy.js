import React, { Component } from "react";
import { App, Card, Panel, View, Page, Navbar, Block, CardContent, List, ListItem, CardFooter } from 'framework7-react';
class HomePage extends Component {
  render() {
    /* Main Framework7 App component where we pass Framework7 params */
    return (<App>
      <View main>
        <Page id="panel-page">
          <Navbar title="News"></Navbar>
          <Block>
            <Card title="New Releases:">
              <CardContent padding={false}>
                <List medial-list>
                  <ListItem title="Yellow Submarine" subtitle="Beatles">
                    <img
                      slot="media"
                      src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg"
                      width="44"
                    />
                  </ListItem>
                  <ListItem title="Don't Stop Me Now" subtitle="Queen">
                    <img
                      slot="media"
                      src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg"
                      width="44"
                    />
                  </ListItem>
                  <ListItem title="Billie Jean" subtitle="Michael Jackson">
                    <img
                      slot="media"
                      src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg"
                      width="44"
                    />
                  </ListItem>
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