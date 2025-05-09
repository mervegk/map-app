import { useSelector } from "react-redux"
import { RootState } from "@/lib/Redux/store"

export const useMapPinColors = () => {
  const { background, borderColor, glyphColor } = useSelector(
    (state: RootState) => state.mapPinColors.value
  )

  return { background, borderColor, glyphColor }
}
