
const SHADOW_DOM_ID = 'cappi-app'
const CONTAINER_ID = 'cappi-container'

function injectShadowDOM() {
  // console.log("injecting shadow dom")
  if (document.getElementById(SHADOW_DOM_ID) != null) return null

  // Create a container div for the Shadow DOM
  const shadowHost = document.createElement('div');
  shadowHost.id = SHADOW_DOM_ID;

  // Attach the Shadow DOM to the container
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

  const reactAppContainer = document.createElement('div');
  reactAppContainer.id = CONTAINER_ID;
  shadowRoot.appendChild(reactAppContainer);

  // Add the container to the webpage's body
  document.body.prepend(shadowHost);

  // Inject the React app script into the shadow DOM
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('webcontent.js');
  script.type = "module"
  shadowRoot.appendChild(script);


  // Apply styles to content
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = chrome.runtime.getURL('webcontent.css');
  shadowRoot.appendChild(styleLink);
}

injectShadowDOM()