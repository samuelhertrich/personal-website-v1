<template>
  <div class="profiles">
    <div class="profiles-links">
      <a href="https://github.com/samuelhertrich" target="_blank"><svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.81251 0.312547C2.93751 0.625047 0.625006 2.93755 0.312506 5.75005C5.60284e-06 8.68755 1.68751 11.3126 4.25001 12.3126C4.43751 12.3751 4.62501 12.2501 4.62501 12.0001V11.0001C4.62501 11.0001 4.37501 11.0626 4.06251 11.0626C3.18751 11.0626 2.81251 10.3126 2.75001 9.87505C2.68751 9.62505 2.56251 9.43755 2.37501 9.25005C2.18751 9.18755 2.12501 9.18755 2.12501 9.12505C2.12501 9.00005 2.31251 9.00005 2.37501 9.00005C2.75001 9.00005 3.06251 9.43755 3.18751 9.62505C3.50001 10.1251 3.87501 10.2501 4.06251 10.2501C4.31251 10.2501 4.50001 10.1875 4.62501 10.125C4.68751 9.68755 4.87501 9.25005 5.25001 9.00005C3.81251 8.68755 2.75001 7.87505 2.75001 6.50005C2.75001 5.81255 3.06251 5.12505 3.50001 4.62505C3.43751 4.50005 3.37501 4.18755 3.37501 3.75005C3.37501 3.50005 3.37501 3.12505 3.56251 2.75005C3.56251 2.75005 4.43751 2.75005 5.31251 3.56255C5.62501 3.43755 6.06251 3.37505 6.50001 3.37505C6.93751 3.37505 7.37501 3.43755 7.75001 3.56255C8.56251 2.75005 9.50001 2.75005 9.50001 2.75005C9.62501 3.12505 9.62501 3.50005 9.62501 3.75005C9.62501 4.25005 9.56251 4.50005 9.50001 4.62505C9.93751 5.12505 10.25 5.75005 10.25 6.50005C10.25 7.87505 9.18751 8.68755 7.75001 9.00005C8.12501 9.31255 8.37501 9.87505 8.37501 10.4376V12.0626C8.37501 12.2501 8.56251 12.4376 8.81251 12.3751C11.125 11.4376 12.75 9.18755 12.75 6.56255C12.75 2.81255 9.56251 -0.124953 5.81251 0.312547Z"/>
        </svg>
      </a>
      <a href="https://stackoverflow.com/users/13872132/samuelhertrich" target="_blank">
        <svg viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61319 14.6084L2.97728 14.6115L2.97671 13.2062L9.61234 13.2028L9.61319 14.6084ZM14.0972 6.64958L12.962 0.166656L11.5655 0.406943L12.7005 6.88987L14.0972 6.64958ZM9.77275 11.4009L3.16517 10.7972L3.03507 12.1969L9.64278 12.8L9.77275 11.4009ZM10.2087 9.56706L3.80068 7.85899L3.4325 9.21601L9.84095 10.9243L10.2087 9.56706ZM11.0453 7.95959L5.32966 4.61682L4.60931 5.82691L10.3252 9.16988L11.0453 7.95959ZM12.4467 6.97529L11.2759 7.76677L7.53701 2.33049L8.70806 1.53878L12.4467 6.97529ZM10.7401 9.98556H11.868V16.8333H0.902771V9.98556H2.0364V15.7307H10.7401V9.98556Z"/>
        </svg>
      </a>
    </div>
    <div class="contact-email">
      <a class="icon" href="mailto:contact@samuelhertrich.com">
        <svg viewBox="0 0 20 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 3.8.1 (29687) - http://www.bohemiancoding.com/sketch -->
            <title>email [#1572]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"></path>
                    </g>
                </g>
            </g>
        </svg>
      </a>
      <a class="text" href="mailto:contact@samuelhertrich.com">contact@samuelhertrich.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilesComponent',
}
</script>

<style>

.profiles-links a svg,
.contact-email a svg {
    fill: var(--primary-color);
    height: var(--profiles-svg-size);
    width: var(--profiles-svg-size);
}

.contact-email a svg path {
    fill: var(--primary-color);
}


 /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .profiles {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profiles a {
        margin: 0 30px;
    }

    .contact-email .text {
        display: none;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .profiles {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profiles a {
        margin: 0 30px;
    }

    .contact-email .text {
        display: none;
    }

}

@media only screen and (max-width: 1199px) {

    .profiles-links,
    .contact-email {
        height: var(--profiles-svg-size);
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

    .profiles-links {
        position: fixed;
        top: calc(100vh - 2 * 40px);
        left: 80px;
        transform: translateY(-100%);
        display: flex;
        flex-direction: column;
    }

    .profiles-links a {
        margin-bottom: 20px;
    }

    .profiles-links a svg {
        fill: var(--primary-color);
        height: 20px;
        width: 20px;
    }

    .contact-email {
        position: fixed;
        top: calc(100vh - 2 * 40px);
        right: 80px;
        transform: translateY(-100%);
    }

    .contact-email .text {
        display: block;
    }

    .contact-email .icon {
        display: none;
    }

    .contact-email a {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-family: var(--secondary-font);
        color: var(--primary-color);
        margin-bottom: 20px;
    }
  
}

</style>