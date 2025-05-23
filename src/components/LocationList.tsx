"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import PageTitle from "@/components/PageTitle"
import { useMapPinColors } from "@/hooks/useMapPinColors"
import { useLocationList } from "@/hooks/useLocationList"

type Props = {}

export default function LocationList({ }: Props) {
  const { background, borderColor, glyphColor } = useMapPinColors()
  const { locations } = useLocationList()

  return (
    <section className='container mx-auto max-md:p-4 mt-4'>
      <PageTitle title="Konum Listesi" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4'>
        {
          locations && locations?.map((location: SavedLocationType) =>
            <Link key={location.id} href={`/location-detail/${location.id}`}>
              <Card className="h-full">
                <CardContent>
                  <div className="grid grid-cols-2 justify-between items-center gap-1 ">
                    <h5>{location.name}</h5>
                    <Popover>
                      <PopoverTrigger asChild className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="38px" viewBox="0 0 26 37" className="block justify-self-end">
                          <g fill="none" fillRule="evenodd">
                            <path fill={borderColor} d="M13 0C5.8175 0 0 5.77328 0 12.9181C0 20.5733 5.59 23.444 9.55499 30.0784C12.09 34.3207 11.3425 37 13 37C14.7225 37 13.975 34.2569 16.445 30.1422C20.085 23.8586 26 20.6052 26 12.9181C26 5.77328 20.1825 0 13 0Z">
                            </path>
                            <path fill={background} d="M13.0167 35C12.7836 35 12.7171 34.9346 12.3176 33.725C11.9848 32.6789 11.4854 31.0769 10.1873 29.1154C8.92233 27.1866 7.59085 25.6173 6.32594 24.1135C3.36339 20.5174 1 17.7057 1 12.6385C1.03329 6.19808 6.39251 1 13.0167 1C19.6408 1 25 6.23078 25 12.6385C25 17.7057 22.6699 20.55 19.6741 24.1462C18.4425 25.65 17.1443 27.2193 15.8793 29.1154C14.6144 31.0442 14.0818 32.6135 13.749 33.6596C13.3495 34.9346 13.2497 35 13.0167 35Z">
                            </path>
                            <path d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z" fill={glyphColor}></path>
                          </g>
                        </svg>
                      </PopoverTrigger>
                      <PopoverContent>
                        {location.coordinates.lat}, {location.coordinates.lng}
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        }
      </div>
    </section>
  )
}