import React from 'react';
import LogoGithub from "../../assets/logosgithub/GitHub-Mark-64px.png"
import LogoLi from "../../assets/logoli/LI-In-Bug.png"

function Footer() {   
    return (
    <div className="page-footer" id="footer">
        <a href="https://github.com/laynewegenast"><img src={LogoGithub} alt="Github-logo" class="icon"/></a>
        <a href="https://www.linkedin.com/in/layne-wegenast/"><img id="linkedin" src={LogoLi} alt="linkedin-logo" class="icon"/></a>
    </div>
    )
}

export default Footer;