import React, {useEffect} from "react";
import './FlashMessage.styles.css'
const FlashMessage = ({setShowFlashMessage, attending}) => {

  const showFlashMessage = () => {
    let flashMessage = document.getElementById('flash_message');
    // Add show class
    flashMessage.className += " show";
    // Remove show class after 3 seconds and hide the message
    setTimeout(function () {
      flashMessage.className.replace(/\bshow\b/g, "");
      setShowFlashMessage(false);
    }, 3000);
  }

  // Trigger showFlashMessage on render
  useEffect(() => showFlashMessage());

  return (
    <div id="flash_message" className="flash-message">
      <span>
        {
          attending &&
          "Great, see you there :)"
        }
        {
          !attending &&
          "Sorry you can't make it :("
        }
      </span>
    </div>
  )
}

export default FlashMessage;
