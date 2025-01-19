// "use client";
// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Import social icons

// const SocialShare = () => {
//   const shareUrl = window.location.href; // Get the current URL

//   const handleShare = (platform: string) => {
//     let url = "";
//     switch (platform) {
//       case "facebook":
//         url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
//         break;
//       case "twitter":
//         url = `https://twitter.com/intent/tweet?url=${shareUrl}`;
//         break;
//       case "instagram":
//         // Instagram doesn't support sharing via URL, so we can open their app or web
//         url = `https://www.instagram.com/`;
//         break;
//       case "linkedin":
//         url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
//         break;
//       case "whatsapp":
//         url = `https://wa.me/?text=${shareUrl}`;
//         break;
//       default:
//         break;
//     }
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="flex space-x-4">
//       <button onClick={() => handleShare("facebook")} title="Share on Facebook">
//         <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
//       </button>
//       <button onClick={() => handleShare("twitter")} title="Share on Twitter">
//         <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700" />
//       </button>
//       <button onClick={() => handleShare("instagram")} title="Share on Instagram">
//         <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
//       </button>
//       <button onClick={() => handleShare("linkedin")} title="Share on LinkedIn">
//         <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
//       </button>
//       <button onClick={() => handleShare("whatsapp")} title="Share on WhatsApp">
//         <FaWhatsapp className="text-green-500 text-2xl hover:text-green-700" />
//       </button>
//     </div>
//   );
// };

// export default SocialShare;
"use client";
import React from "react";
import { ForwardIcon } from "lucide-react";

const SocialShare = () => {
  // Function to trigger the Web Share API
  const handleShare = async () => {
    const shareUrl = window.location.href; // Current URL

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // Optional: share the page title
          text: "Check this out!", // Optional: share a custom message
          url: shareUrl, // Share the current URL
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported in this browser.");
      // Fallback: Optionally show a message or provide links to share manually
    }
  };

  return (
    <button
      onClick={handleShare}
      title="Share"
      className="text-blue-500 hover:text-blue-700 text-2xl"
    > <ForwardIcon />
    </button>
  );
};

export default SocialShare;
