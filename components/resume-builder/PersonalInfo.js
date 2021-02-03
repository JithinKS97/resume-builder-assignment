import { FormGroup, Label, Input } from "reactstrap";

export default (props) => {

  const { personalInfo } = props;
  const { name, email, address, phonenumber } = personalInfo

  const handleNameChange = () => {
    
  }

  return (
    <>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input onChange={handleNameChange} value={name} type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input value={email} type="email" />
      </FormGroup>
      <FormGroup>
        <Label placeholder="Address">Address</Label>
        <Input value={address} type="textarea" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Phone number</Label>
        <Input value={phonenumber} type="text" />
      </FormGroup>
    </>
  );
};
