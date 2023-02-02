import { useState } from 'react'
/**
 * function to open or close the modal
 * @function
 * @returns  {boolean | function}
 */
export function useModal() {
    const [isShowing, setIsShowing] = useState(false)

    function toggle() {
        setIsShowing(!isShowing)
    }
    return { isShowing, toggle }
}
