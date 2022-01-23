import { Htag, Button, P, Tag, Rating } from "../components";
import { useState } from "react";
import { withLoyout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  

  return (
    <>
      <Htag tag="h1">Htag</Htag>
      <Button appearance="primary" arrow="down">Button</Button>
      <Button appearance="ghost" arrow="right">Button</Button>
      <P size="s">small</P>
      <P>medium</P>
      <P size="l">big</P>
      <Tag size='s'>Small</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="m" color="green">Green</Tag>
      <Tag size="s" color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLoyout(Home);
