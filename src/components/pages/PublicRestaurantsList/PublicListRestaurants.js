import React from 'react';
import { Label, Button, List, Grid, Segment, Form } from 'semantic-ui-react';
import Restaurant from "./Restaurant"

import api from "../../../api"

import './PublicListRestaurants.css'

class PublicListRestaurants extends React.Component {

  constructor() {
    super()
    api.restaurant_public.getRestaurants()
  }

  redirect = () => this.props.history.push("/login") 
  
  numbers = [
    { 
      name: "COCA-COLA",
      school: "FIEC",
      score: "1.5"
    },
    { 
      name: "MAMITA",
      school: "FIMCP",
      score: "0.5"
    },
    { 
      name: "CHABELA",
      school: "FIMCBOR",
      score: "0.2"
    },
    { 
      name: "COCA-COLA",
      school: "EDCOM",
      score: "0.0"
    },
  ]

  render() {

    return (
      <Grid centered>

        <Grid.Column mobile={12} tablet={9} computer={6}>

          <Segment>
            <Grid columns='equal'>
              <Grid.Column>
                <Label color='blue' size="big" ribbon>RESTAURANTS LIST</Label>
              </Grid.Column>
            </Grid>
          </Segment> 

          <Form>
            <Form.Input 
              name="search"
              placeholder="Search restaurant"
            />
          </Form>

          <List selection verticalAlign='middle' size="large" className="restaurant">
            {
              this.numbers.map((restaurant, index) => 
                <Restaurant
                  key={index} 
                  name={restaurant.name} 
                  school={restaurant.school} 
                  score={restaurant.score}>
                </Restaurant>
              )
            }
          </List>
          
          <Grid.Column>
              <Button 
              id="btnLogin"
                onClick={this.redirect}>
                LOGIN
            </Button>
          </Grid.Column>

        </Grid.Column>
      
      </Grid>
    )
  }
};

export default PublicListRestaurants;