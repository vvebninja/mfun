import type { TrackResource } from '../model/types'
import { cn } from '../../../shared/lib/css.ts'

type TrackProps = {
  isSelected: boolean
  onTrackClick: (id: TrackResource['id']) => void
  className?: string
} & TrackResource

export function Track({
  id,
  attributes,
  isSelected = false,
  onTrackClick,
  className,
}: TrackProps) {
  const handleClick = () => {
    onTrackClick(id)
  }

  const title
    = attributes.title.length > 18
      ? attributes.title.slice(0, 18)
      : attributes.title

  return (
    <div
      className={cn(isSelected && 'outline-2 outline-blue-600', className)}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <audio controls src={attributes.attachments[0]?.url} />
    </div>
  )
}
