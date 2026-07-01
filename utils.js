// TODO: FUNCTION COMMENT
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