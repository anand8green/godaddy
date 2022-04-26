import { useEffect, useState } from 'react'
import ListItem from '../component/ListItem'
import { gitDataProps } from '../component/ListItem'


const List = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [gitData, setGitData] = useState<gitDataProps[] | null>(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        let fetchAbort = new AbortController()
        fetch("https://api.github.com/orgs/godaddy/repos", { signal: fetchAbort.signal })
            .then(res => {
                if (!res.ok) throw Error("Uh Oh! Page not found")
                return res.json()
            })
            .then(data => {
                setGitData(data);
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log(err.message);
                } else {
                    setError(err.message)
                    setIsLoading(false)
                    setGitData(null);
                }
            })

        return () => fetchAbort.abort()

    }, [])

    return (
        <div className='listContainer'>
            {isLoading && <h1 className='loading'>Loading...</h1>}
            {error && <h1 className='error'>{error}</h1>}
            {
                gitData?.map(repo => (<ListItem key={repo.id} {...repo} />
                ))
            }
        </div>
    )
}
export default List