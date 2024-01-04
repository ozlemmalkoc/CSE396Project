import React from 'react';
import Card from './Card';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center', // Center horizontally
};

const cardStyle = {
  width: '20%', // Her kartın genişliği
  marginBottom: '20px', // İstediğiniz kadar boşluk ekleyebilirsiniz
};

const Cards = ({ members }) => {
  const totalCards = members.length;
  const centerCardIndex = Math.floor(totalCards / 2);

  return (
    <div style={containerStyle}>
      {members.map((member, index) => (
        <Card
          key={member.id}
          member={member}
          style={index === centerCardIndex ? { ...cardStyle, width: '100%' } : cardStyle}
        />
      ))}
    </div>
  );
};

export default Cards;
