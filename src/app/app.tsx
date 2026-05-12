import type { ComponentProps } from "react"

const mergeClass = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ')
}

const Button = ({ className = '', children }: ComponentProps<'button'> & { className?: string }) => {
	return <button className={mergeClass("bg-emerald-500 bg-blue-600", className)}>Button</button>
}

export const App = () => {


	return (
		<div className="h-screen flex items-center justify-center">
			<Button>Button</Button>
		</div>
	)
}

