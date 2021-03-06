import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const Tank = props => {
  return (
    <Card>
      <Image src={props.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        {/* <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a> */}
      </Card.Content>
    </Card>
  );
};

export default Tank;
