import  {useState, useEffect} from 'react';

const useResources = resource => {
    const [resources,setResources] = useState([])

    useEffect(
        () => {
            (async () => {
                let response = await fetch(`http://jsonplaceholder.typicode.com/${resource}`);
                let data = await response.json();
                setResources(data)
            })(resource)

        },[resource])

    return resources
}

export  default useResources