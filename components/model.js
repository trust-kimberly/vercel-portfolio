import "@google/model-viewer"

export default function Model () {
  return (
    <model-viewer 
      src="/nameplate01.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      interaction-prompt="none"
      shadow-intensity="0"
      exposure="2"
      shadow-softness="0"
      // environment-image="/joshuatree.jpg"
      // skybox-image="/joshuatree.jpg"
      camera-orbit="0deg 90deg 0m"
    ></model-viewer>
  )
}
