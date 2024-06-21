import "./footer.css";
import MailIcon from "../../images/mail.jpg";
import YoutubeIcon from "../../images/youtube.jpg";
import DisordIcon from "../../images/discord.jpg";
import InstaIcon from "../../images/insta.jpg";

function footer(){
  
  return (
      <div className="group-child">
        <a href="https://discord.com/channels/@me">
        <img className="group-child4" alt="" src={DisordIcon} /></a>
        <a href="https://www.instagram.com/seem_akumari792/">      <img className="group-child1" alt="" src={InstaIcon} />
        </a>
        <a href="https://www.youtube.com/channel/UCli8ZKUwJou_0KKja02Tr1Q">      <img className="group-child2" alt="" src={YoutubeIcon} />
        </a>
        <a href="https://drive.google.com/file/d/1NlGIs3pD9OK805d0bCi4AKZ2Dckj8iao/view?usp=drive_link">          <img className="group-child3"alt="" src={MailIcon} />
        </a>
      <div className="design-by-seema">Made by Seema Kumari |<br/> Electrical Engineer @NIT Patna </div></div>
  );
 
};
export default footer;
