import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const NewsTable =({news})=> {

    const handleDeleteNew = async(newItem)=>{
        console.log('delete action', newItem);
    };

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    news.length ? news.map(newItem=>(
                        <tr key={newItem._id}>
                            <td>{newItem.titulo}</td>
                            <td>{newItem.autor}</td>
                            <td>
                                <img style={{"width":"100px"}} src={newItem.imagen} alt=""/>
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>handleDeleteNew(newItem)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))
                    :
                    null
                }
            </tbody>
        </Table>
    );
}
export {NewsTable};