'use client'
import { useState } from 'react'
import { Button, Color, ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"
import { useMarkerColor } from '@/context/MarkerContext'

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

  const [color, setColor] = useState(parseColor('#fff'))

  const handleColorChange = () => {
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
  }

  return (
    <div>
      <div className='grid grid-cols-3 items-center gap-2'>
        <p>{label}:</p>
        <ColorPicker.Root defaultValue={getColorByType()} maxW="200px" onValueChange={e => setColor(e.value)} >
          <ColorPicker.Control>
            <ColorPicker.Input />
            <ColorPicker.Trigger />
          </ColorPicker.Control>
          <Portal>
            <ColorPicker.Positioner className='!z-[1550]' >
              <ColorPicker.Content>
                <ColorPicker.Area />
                <HStack>
                  <ColorPicker.EyeDropper size="xs" variant="outline" />
                  <ColorPicker.Sliders />
                </HStack>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </Portal>
        </ColorPicker.Root>
        <Button type='button'
          onClick={handleColorChange}
          variant='outline'
          size="sm"
          colorPalette='red'
        >Rengi kaydet</Button>
      </div>
    </div >
  )
}