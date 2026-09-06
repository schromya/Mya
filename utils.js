/**
 * Loads an SVG into the container.
 * @param {string} containerID DOM ID of container to be overwritten with SVG HTML
 * @param {string} pathToSVG Path to the SVG file to load
 */
export async function loadSVG(containerID, pathToSVG) {
  const container = document.getElementById(containerID);
  
  try {
    const response = await fetch(pathToSVG);
    const svgText = await response.text();
    
    container.innerHTML = svgText;
  } catch (error) {
    console.error('Error loading the SVG:', error);
  }
}


/**
 * Removes the section navigation hash from the URL without reloading the page.
 * Keeps the current path, query parameters, and history state.
 */
export function clearURL() {
    if (window.location.hash) {
        history.replaceState(history.state, '', window.location.pathname + window.location.search);
    }
}
