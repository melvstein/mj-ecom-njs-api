import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LuSun, LuMoonStar } from "react-icons/lu";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
	return null
	}

	return (
		<div className="select-none fixed bottom-5 right-5 border-2 border-foreground bg-background rounded-full sm:p-2 p-1 z-10">
			{theme === "light" ?
				<LuSun onClick={() => setTheme("dark")} className="ms:size-[30px] size-[25px] cursor-pointer fill-yellow-200 stroke-yellow-500" /> 
				:  
				<LuMoonStar onClick={() => setTheme("light")} className="ms:size-[30px] size-[25px] cursor-pointer fill-blue-300 stroke-blue-400" />
			}
		</div>
	)
}

export default ThemeSwitch