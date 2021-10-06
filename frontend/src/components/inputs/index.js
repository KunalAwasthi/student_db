import { FormGroup, Label, Input, } from 'reactstrap';
export const renderInput = ({ input, id, required, label, type, placeholder, meta: { touched, error } }) => {
    return (
        <FormGroup className="mt-3">
            <Label for={id}>{label} {required && <span className="astrik">*</span>}</Label>
            <Input {...input} id={id} placeholder={placeholder} type={type} />
            {touched && error && <span className="text-danger">{error}</span>}
        </FormGroup>
    );
}