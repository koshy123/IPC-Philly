import React from 'react';
import Feature from '../../components/feature/Feature';
import "./features.css";

const Features = () => {

  const featuresData = [
    {
      title: 'The One True God     ',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
    {
      title: 'Salvation',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Baptism with the Holy Spirit',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Second Coming Of Jesus     ',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'THE ONE TRUE GOD      ',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ];

  return (
    <div className="ipc__features section__padding" id="features">
    <div className="ipc__features-heading">
      <h1 className="gradient__text">“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." -John 3:16</h1>
      <p>Our Beliefs</p>
    </div>
    <div className="ipc__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features