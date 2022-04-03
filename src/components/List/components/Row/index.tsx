import * as React from "react"
import "./row.scss"

type ListRowProps = {
  onClick: () => void
  checked: boolean
  onDelete: () => void
  text: string
  onKeyUp: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

export const ListRow = ({ checked, text, onClick, onDelete, onKeyUp }: ListRowProps) => (
  <div className="row">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="row-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={checked}
      />
      <span className={checked ? "row-checked" : ""}>{text}</span>
    </div>
    <button type="button" className="row-delete" onClick={onDelete}>
      x
    </button>
  </div>
)