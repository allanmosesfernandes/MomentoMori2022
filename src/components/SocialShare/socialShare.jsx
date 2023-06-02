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
    const url = 'https://dailystoicreminders.uk/#wisdom';
    clipboardCopy(url);

    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }



  return (
    <SocialsContainer className='quote-container'>
      <div>
        <h2>Share quote: <img src={ShareIcon} alt="Share Icon"/></h2>
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
            <WhatsappShareButton url={shareURL}>
              <p className="number">02</p>
                Whatsapp
              <img src={Plus} alt="Plus Sign" />
            </WhatsappShareButton>
          </li>
          <li>
            <TwitterShareButton url={shareURL}>
              <p className="number">03</p>
                Twitter
              <img src={Plus} alt="Plus Sign" />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton url={shareURL}>
            <p className="number">04</p>
              LinkedIn
            <img src={Plus} alt="Plus Sign" />
            </LinkedinShareButton>
          </li>

        </StyledList>
      </div>
    </SocialsContainer>
  )
}

export default SocialShare