import React from 'react';

import classes from './SmilesList.module.css';

import Card from '../UI/Card';
import SmileItem from './Smile/SmileItem';

const LIST_OF_SMILE = [
  {
    id: 'C1',
    name: 'Big smile',
    description: `Whooooowww ça c'est un putain de smile !`,
    emoji: '😀',
  },
  {
    id: 'C2',
    name: 'small smile',
    description: `On pourrait faire mieux, mais bon...`,
    emoji: '🙂',
  },
];

const SmilesList = props => {
  // const listOfSmile = LIST_OF_SMILE.map(item => (
  //   <SmileItem
  //     id={item.id}
  //     key={item.id}
  //     name={item.name}
  //     description={item.description}
  //     emoji={item.emoji}
  //     onDelete={props.onDelete}
  //   />
  // ));

  return (
    <section>
      <Card className={classes.list}>
        <ul>
          {props.onSmiles.map(smile => (
            <SmileItem
              id={smile.id}
              key={smile.id}
              name={smile.name}
              description={smile.description}
              emoji={smile.emoji}
              onDeleteConfirmation={props.onDelete}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default SmilesList;
