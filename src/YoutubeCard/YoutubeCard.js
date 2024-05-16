import React from 'react'

function YoutubeCard(){
 return (
   <div style={{margin:"6px"}}>
       <img src='https://i.ytimg.com/vi/CW6jDJdmloo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuA32vulBzdBjjQmxWhKxs-5_4ow' alt='Hanuman image' style={{borderRadius:"15px"}} />
       <h4 style={{textAlign:"center"}}>Hanuman Chalisha</h4>
       <div style={{textAlign:"center" , marginBottom:"4px"}}>
           <span>8.4k views</span><span> 10 days ago</span>
       </div>
   </div>
 )
}
export default YoutubeCard;
