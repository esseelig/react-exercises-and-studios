export default function HobbyLinks() {
   let hobbyHeading = "My Hobbies";
    let hobbyLinks = ["https://www.dpreview.com/", "https://www.seriouseats.com/", "https://www.segaretro.org/"];
 
    return (
       <div>
          <h3>{hobbyHeading}</h3>
          <a href= {hobbyLinks[0]}>Digital Photography Review</a><br />
          <a href= {hobbyLinks[1]}>Serious Eats</a><br />
          <a href= {hobbyLinks[2]}>Sega Retro</a><br />
       </div>      
    );
 }