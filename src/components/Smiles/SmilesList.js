import React from "react";

import classes from "./SmilesList.module.css";

import Card from "../UI/Card";
import SmileItem from "./Smile/SmileItem";

const LIST_OF_SMILE = [
  {
    id: "C1",
    name: "Big smile",
    description: `Whooooowww ça c'est un putain de smile !`,
    emoji: "😀",
  },
];

const SmilesList = (props) => {
  const listOfSmile = LIST_OF_SMILE.map((item) => (
    <SmileItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      emoji={item.emoji}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{listOfSmile}</ul>
      </Card>
    </section>
  );
};

export default SmilesList;
