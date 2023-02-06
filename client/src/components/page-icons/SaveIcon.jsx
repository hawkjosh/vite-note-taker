export default ({ iconSize, iconColor, ...props }) => {
	return (
		<svg
			width={iconSize}
			fill='none'
			stroke={iconColor}
			strokeWidth='40'
			{...props}
			viewBox='0 0 448 512'>
			<path d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7c-12-12-28.3-18.7-45.3-18.7H64zm0 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64zm160 288c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z' />
		</svg>
	)
}
