import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewsForm = ()=> {

    const handleSubmitForm = async(event)=>{
        event.preventDefault();
        const newObj = {
            titulo:event.target[0].value,
            cuerpo:event.target[1].value,
            autor:event.target[2].value,
            imagen:event.target[3].value,
            email:event.target[4].value,
        }
        console.log("newObj", newObj);
    };

    return (
        <div className='formContainer'>
            <h1>Registro de noticias</h1>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Ingresar El título de la noticia" />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Ingresar la descripción" />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Ingresar el creador" />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Ingresar la ruta de la imagen" />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Ingresar el email del creador" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    );
}

export {NewsForm};