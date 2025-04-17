export type RawLocation = [string, { lat: number, lng: number }]

type Locations = {
  key: string
  name: string
  lat: number
  lng: number
}

export const locationList: RawLocation[] = [
  ['Gülhane Parkı', { lat: 41.01342926504891, lng: 28.981949988983793 }],
  ['Sultan Ahmet Cami', { lat: 41.00554716713816, lng: 28.97745753894663 }],
  ['Galata Kulesi', { lat: 41.0257551034955, lng: 28.974203709155958 }],
  ['Tarihi İstanbul Surları', { lat: 41.02012791367057, lng: 28.924871582474314 }]
]