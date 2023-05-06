import React from 'react';
import Feature from '../../components/feature/Feature';
import "./features.css";

const Features = () => {

  const featuresData = [
    {
      title: 'One True God',
      text: 'There is one and only one living and true God, everlasting of infinite power, wisdom, and goodness. He is an intelligent, spiritual, and personal being the Creator, Redeemer, Preserver, and the ruler of all things, both visible and invisible. God is infinite in holiness and all other perfections.',
    },
    {
      title: 'Salvation',
      text: 'The grace of God, which brings salvation, has appeared to all men through the preaching of repentance towards God and faith towards the Lord Jesus Christ; man is saved by the washing of regeneration and renewing of the Holy Spirit, and being justified by the grace through faith, he becomes as heir of God.',
    },
    {
      title: 'Baptism with the Holy Spirit',
      text: 'The full consummation of the baptism of Believers in the Holy Ghost is evidenced by the initial physical sign of speaking with other tongues as the Spirit gives utterance and by the subsequent manifestation of spiritual power in public testimony and service.',
    },
    {
      title: 'Second Coming Of Jesus     ',
      text: 'The pre-millennial second coming of Jesus Christ, the resurrection of those who have fallen asleep in Christ, and their translation, together with those who are alive and remain unto the coming of the Lord, is imminent and is the blessed hope of the Church.',
    },
    {
      title: 'The Church',
      text: 'The New Testament Church of the Lord Jesus Christ is the body of baptized believers who are associated by covenant in the faith and fellowship of the Gospel, observing the two ordinances of Christ (Baptism and Lords Supper), committed to His teaching, exercising the gift, rights, and privileges invested in them by His word, and seeking to extend the Gospel to the end of the Earth. ',
    },
  ];

  return (
    <div className="ipc__features section__padding" id="beliefs">
    <div className="ipc__features-heading">
      
      <h1 className="gradient__text">“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." -John 3:16</h1>
      <h1 className='belief_header'>Our Beliefs</h1>
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