import emailIcon from "../assets/icons/iconmonstr-email-1.svg";
import githubIcon from "../assets/icons/iconmonstr-github-1.svg";
import linkedinIcon from "../assets/icons/iconmonstr-linkedin-1.svg";
import shareIcon from "../assets/icons/iconmonstr-share-9.svg";

function copyURL() {
    navigator.clipboard.writeText("http://edenrp.net/frontoge");
    alert("Copied URL to clipboard!");
}

export default function Sidebar() {

    return (
        <div className="links">
            <a id="email" href="mailto:widenhousematthew@gmail.com"><img src={emailIcon} /></a>
            <a id="github" href="https://github.com/frontoge"><img src={githubIcon} /></a>
            <a id="linkedin" href="https://linkedin.com/in/mattwidenhouse"><img src={linkedinIcon} /></a>
            <a id="share" onClick={copyURL}><img src={shareIcon} /></a>
            <div className="vl"></div>
        </div>
    )
}