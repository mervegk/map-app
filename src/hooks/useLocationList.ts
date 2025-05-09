import { useSelector } from "react-redux"
import { RootState } from "@/lib/Redux/store"

export const useLocationList = () => {
  const locations = useSelector((state: RootState) => state.locationList.value)
  return { locations }
}
