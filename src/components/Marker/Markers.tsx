import { useState } from "react"
import MarkerItem from "./MarkerItem"

type Props = {
  points: SavedLocationType[]
  markerColors: Pick<MarkerContextType, 'background' | 'borderColor' | 'glyphColor'>
}

export default function Markers({ points, markerColors }: Props) {
  const [showLocationName, setShowLocationName] = useState<number | null>(null)

  return (
    points.map((point, index,) =>
      <MarkerItem
        key={index}
        index={index}
        point={point}
        markerColors={markerColors}
        showLocationName={showLocationName}
        setShowLocationName={setShowLocationName}
      />
    )
  )

}