import "@google/model-viewer"
import { useMediaQuery } from "@chakra-ui/react"

export default function Model () {
  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)')

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
      camera-orbit={isSmallerThan400 ? "-45deg 40deg 4m": "0deg 90deg 0m"}
    ></model-viewer>
  )
}
