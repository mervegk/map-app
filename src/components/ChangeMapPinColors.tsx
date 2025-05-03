'use client'
import { useState } from 'react'
import { useMarkerColor } from '@/context/MarkerContext'
import { HexColorPicker } from "react-colorful";
import { Button } from './ui/button';

type Props = {}

export default function ChangeMapPinColors({ type, label }: MapPinColors) {
  const { markerColor,
    background,
    borderColor,
    glyphColor,
    changeMarkerColor,
    changeBgColor,
    changeBorderColor,
    changeGlyphColor } = useMarkerColor()

  const [color, setColor] = useState('#fff')

  /* const handleColorChange = () => {
    if (color) {
      switch (type) {
        case 'marker':
          changeMarkerColor(color.toString('hex'))
          break
        case 'background':
          changeBgColor(color.toString('hex'))
          break
        case 'border':
          changeBorderColor(color.toString('hex'))
          break
        case 'glyph':
          changeGlyphColor(color.toString('hex'))
          break
      }
    }
  }

  const getColorByType = () => {
    let rawColor = ''
    switch (type) {
      case 'marker':
        rawColor = markerColor
        break
      case 'background':
        rawColor = background
        break
      case 'border':
        rawColor = borderColor
        break
      case 'glyph':
        rawColor = glyphColor
        break
    }

    try {
      return parseColor(rawColor || '#ffffff')
    } catch (err) {
      console.error('Geçersiz renk:', rawColor)
      return parseColor('#ffffff')
    }
  } */

  return (
    <div>
      <div className='grid grid-cols-3 items-center gap-2'>
        <p>{label}:</p>
        <HexColorPicker color={color} onChange={setColor} />
        <Button type='button'
          variant='outline'
          size="sm"
        >Rengi kaydet</Button>
      </div>
    </div >
  )
}