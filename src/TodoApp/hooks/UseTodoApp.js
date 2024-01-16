import { useState } from "react"

export const UseTodoApp = () => {
    const [progress, setProgress] = useState('To Do')

    const onProgressButton = (progressValue) => {
       if( progressValue === 'To Do') return setProgress('In Progress')
       if( progressValue === 'In Progress') return setProgress('Done')
       if( progressValue === 'Done') return setProgress('To Do')
    }

    

return {
    onProgressButton,
    progress
}
}