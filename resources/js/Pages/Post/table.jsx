import { useState } from "react"

export default function table() {

    const [table, setTable] = useState('oke');

    useEffect(() => {
        console.log('selamat datang');
    }, [])
    

  return (
    <div>table</div>
  )
}
