import { FormGroup, Label, Input, Card, CardBody } from "reactstrap";

export default (props) => {
  const { personalInfo, onChange } = props;
  const { name, email, address, phonenumber } = personalInfo;

  const handleFieldChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <Card>
        <CardBody>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              onChange={handleFieldChange}
              name="name"
              type="text"
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              onChange={handleFieldChange}
              name="email"
              value={email}
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label placeholder="Address">Address</Label>
            <Input
              onChange={handleFieldChange}
              name="address"
              value={address}
              type="textarea"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Phone number</Label>
            <Input
              onChange={handleFieldChange}
              name="phonenumber"
              value={phonenumber}
              type="text"
            />
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};
