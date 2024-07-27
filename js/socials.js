document.addEventListener("DOMContentLoaded", function() {
    // fontawesome kit
    const fontAwesomeCustomKit = document.createElement('script');
    fontAwesomeCustomKit.src = 'https://kit.fontawesome.com/097bc99926.js';
    fontAwesomeCustomKit.crossOrigin ="anonymous";
    document.head.appendChild(fontAwesomeCustomKit);
    // Add Font Awesome stylesheet link
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fontAwesomeLink);
    
    // sidebar social link custom css
    const stickySocialsLink = document.createElement('link');
    stickySocialsLink.rel = 'stylesheet';
    stickySocialsLink.href = 'css/stickysocials.css'
    document.head.appendChild(stickySocialsLink);



    // Create the social media icon bar
    const socialMediaIcons = document.createElement('div');
    socialMediaIcons.className = 'icon-bar';
    socialMediaIcons.innerHTML = `
        <a href="https://www.instagram.com/smokin.joeee/" class="instagram"><i class="fa fa-instagram"></i></a>
        
        <a href="https://www.youtube.com/channel/UCA96Dvb8ZidJkn6ZIpE6vmQ" class="youtube"><i class="fa fa-youtube"></i></a>
        <a href="https://soundcloud.com/bipolarprotagonist" class="soundcloud"><i class="fa fa-soundcloud"></i></a>
        <a href="https://discord.gg/YAznhvdg9p" class="discord"><i class="fa fa-discord"></i></a>
        `;

    // Append the social media icon bar to the body
    document.body.appendChild(socialMediaIcons);
});