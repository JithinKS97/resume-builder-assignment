import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default () => {
  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="text" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" />
        </FormGroup>
        <FormGroup>
            <Label placeholder="Address">Address</Label>
            <Input type="textarea" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Phone number</Label>
            <Input type="text" />
        </FormGroup>
      </div>
    </>
  );
};

const style = `
    .resume-builder-container {
        width: 50vw;
        margin:auto;
        margin-top:15px;
    }
`