import React from 'react';
import {useState, useEffect} from 'react'

function Chat({currentUser, setCurrentUser}){
    const [tweet, setTweet] = useState ('')
    const [addTweet, setAddTweet] = useState ([])


    function handleTweet(e) { 
        e.preventDefault();
          fetch("http://localhost:3000/tweets", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "tweet":  tweet,
                "user_id": currentUser.id,
              }),
            })
              .then((res) => res.json())
              .then((newtweet) => setAddTweet([...addTweet, newtweet]))
       }
       
       function deletedTweet(id){
        fetch(`http://localhost:3000/tweets/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {console.log(data)})
            filteredTweets(id);
        }
       
        const filteredTweets = (id) => {
          const deletedTweets = addTweet.filter(item => item.id !== id)
          setAddTweet(deletedTweets)
        }
    
    return(
        <div>
          <form onSubmit={handleTweet} id="input-div" className="tweets-div">
                <h6>What's on your mind?</h6>
                    <div id="textbox-profile" className="ui input">
                    <input onChange={(e) => setTweet(e.target.value)} type="text" placeholder="What's on your mind?"
                        value={tweet}/> </div>
                    </form>

                    <div> 
                    {addTweet.map(tweet =><div>
                        <p> {tweet.tweet} <i style={{cursor: 'pointer'}} 
                        onClick={()=>deletedTweet(tweet.id)}>✖️
                    </i></p>
                </div>)}
            </div> 
        </div>

  )
}

export default Chat;
