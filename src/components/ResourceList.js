import React from "react";
import useResources from "./useResources";

//put all hook stuff in the same function


const ResourceList = ({ resource }) => {
    const resources = useResources(resource)

    /*MOVING THE HOOKS TO ANOTHER COMPONENT
    const [resources,setResources] = useState([])
    const fetchResource = async () => {
        let response = await fetch(`http://jsonplaceholder.typicode.com/${resource}`);
                let data = await response.json();
                setResources(data)
    }


    invoke fetchResource immediately
    useEffect(
        () => {
            (async () => {
                let response = await fetch(`http://jsonplaceholder.typicode.com/${resource}`);
                let data = await response.json();
                setResources(data)
            })(resource)

    },[resource])

    **** converting from the class based version to using hooks
    state = { resources : []}
    async componentDidMount() {
       // const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`)
        let response = await fetch(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
        let data = await response.json();
        this.setState({resources : data})
    }

   async componentDidUpdate(prevProps) {
       if(prevProps.resource !== this.props.resource){
           let response = await fetch(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
           let data = await response.json();
           this.setState({resources : data})
       }
    }*/

        return(
        <ul>
            {resources.map(record => <li>{record.title}</li>)}
        </ul>
        )
}

export default ResourceList