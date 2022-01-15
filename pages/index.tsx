import { Htag, Button, P, Tag, Rating } from "../components";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)
  useEffect(() => {
    console.log('Counter ' + counter);
    return () => {
      console.log('Unmount')
    }
  });
  

  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" arrow="down" onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearance="ghost" arrow="right">Button</Button>
      <P size="s">small</P>
      <P>medium</P>
      <P size="l">big</P>
      <Tag size='s'>Small</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="m" color="green">Green</Tag>
      <Tag size="s" color="primary">Primary</Tag>
      <Rating rating={4} />
    </div>
  );
}
