'use client'
import { useState } from 'react'
import { useMarkerColor } from '@/context/MarkerContext'
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Button } from './ui/button';

export default function ChangeMapPinColors({ type, label }: MapPinColors) {

  const getColorByType = () => {
    let rawColor = ''
    switch (type) {
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
      return rawColor || '#ffffff'
    } catch (err) {
      console.error('Geçersiz renk:', rawColor)
      return '#ffffff'
    }
  }

  const {
    background,
    borderColor,
    glyphColor,
    changeBgColor,
    changeBorderColor,
    changeGlyphColor } = useMarkerColor()

  const [color, setColor] = useState(getColorByType() || '#fff')

  const handleColorChange = () => {
    if (color) {
      switch (type) {
        case 'background':
          changeBgColor(color)
          break
        case 'border':
          changeBorderColor(color)
          break
        case 'glyph':
          changeGlyphColor(color)
          break
      }
    }
  }

  return (
    <div>
      <div className='grid grid-cols-2 items-center gap-2'>
        <HexColorPicker color={getColorByType()} onChange={setColor} />
        <HexColorInput color={color} onChange={setColor} />
        <div>
          <p>{label}</p>
          <Button type='button'
            variant='outline'
            size="sm"
            onClick={handleColorChange}
            className='mt-2'
          >Rengi kaydet</Button>
        </div>
      </div>
    </div >
  )
}