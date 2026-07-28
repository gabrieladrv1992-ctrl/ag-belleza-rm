const PALETTE = [
  { bg: 'F0E2D0', fg: '1C1C1C' },
  { bg: '1C1C1C', fg: 'EBD8A0' },
  { bg: 'E0C572', fg: '1C1C1C' },
  { bg: 'E6CFB4', fg: '2E2E2E' },
]

export function placeholderTile(text, index = 0, size = '900x1100') {
  const { bg, fg } = PALETTE[index % PALETTE.length]
  return `https://placehold.co/${size}/${bg}/${fg}/png?text=${encodeURIComponent(text)}&font=montserrat`
}
