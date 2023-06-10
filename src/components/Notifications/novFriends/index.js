import React from 'react'
import './styles.css'


export default function index({user}) {


    const userFriends = [
      { imgSrc: '/assest/person/1.jpeg', text: 'Congratulate Shoaib for starting a new position' ,timestamp: '2023-05-31 09:30 AM'},
      { imgSrc: '/assest/person/2.jpeg', text: 'New message received',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/3.jpeg', text: 'Friend request from John',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/4.jpeg', text: 'You have a new follower',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/5.jpeg', text: 'Congratulations! You won a prize',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/6.jpeg', text: 'Important update: System maintenance',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/7.jpeg', text: 'Upcoming event: Annual company picnic',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/8.jpeg', text: 'Product back in stock: XYZ',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/1.jpeg', text: 'Congratulate Shoaib for starting a new position' ,timestamp: '2023-05-31 09:30 AM'},
      { imgSrc: '/assest/person/2.jpeg', text: 'New message received',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/3.jpeg', text: 'Friend request from John',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/4.jpeg', text: 'You have a new follower',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/5.jpeg', text: 'Congratulations! You won a prize',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/6.jpeg', text: 'Important update: System maintenance',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/7.jpeg', text: 'Upcoming event: Annual company picnic',timestamp: '2023-05-31 09:30 AM' },
      { imgSrc: '/assest/person/8.jpeg', text: 'Product back in stock: XYZ',timestamp: '2023-05-31 09:30 AM' }
      
      
    ];
    
    return (
      <>
        {userFriends.map((friend, index) => (
          <div className='nov' key={index}>
            <img src={friend.imgSrc} className='novPhoto' alt='' />
            <p>{friend.text}</p>
          </div>
        ))}
      </>
    );
    
    
    
    
    
    
    
}
