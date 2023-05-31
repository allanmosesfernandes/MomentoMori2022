import React, { useState } from 'react';
import { SocialsContainer, StyledList } from './StyledSocials';
import ShareIcon from "../../assets/images/Share-icon.svg";
import Plus from "../../assets/images/plus.svg";
import clipboardCopy from 'clipboard-copy';
import { WhatsappShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share';

const SocialShare = () => {
  const [copied, setCopied] = useState(false);
  const shareURL = "https://dailystoicreminders.uk/#wisdom";
  const handleCopyLink = () => {
    const url = 'https://dailystoicreminders.uk/';
    clipboardCopy(url);

    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }



  return (
    <SocialsContainer className='quote-container'>
      <div>
        <h2>Share: <img src={ShareIcon} alt="Share Icon"/></h2>
      </div>
      <div>
        <StyledList>
          <li>
            <p className="number">01</p>
            <p onClick={handleCopyLink}>
              {copied ? "Copied!" : "Copy Link"}
            </p>
            <img src={Plus} alt="Plus Sign" />
          </li>
          <li>
            <p className="number">02</p>
            <WhatsappShareButton url={shareURL}>
              Whatsapp
            </WhatsappShareButton>
            <img src={Plus} alt="Plus Sign" />
          </li>
          <li>
            <p className="number">03</p>
            <TwitterShareButton url={shareURL}>
              Twitter
            </TwitterShareButton>
            <img src={Plus} alt="Plus Sign" />
          </li>
          <li>
            <p className="number">04</p>
              <LinkedinShareButton url={shareURL}>
                Linkedin
              </LinkedinShareButton>
            <img src={Plus} alt="Plus Sign" />
          </li>

        </StyledList>
      </div>
    </SocialsContainer>
  )
}

export default SocialShare