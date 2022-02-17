import { Htag, Button, P, Tag, Rating } from "../components";
import { useState } from "react";
import { withLoyout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next/types";

function Home({ menu }: HomeProps): JSX.Element {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number
}
