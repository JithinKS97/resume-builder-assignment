import { FormGroup, Label, Input } from 'reactstrap';

export default () => {
  return (
    <div className="experience">
      <FormGroup>
        <Label>Company/Institute</Label>
        <Input/>
      </FormGroup>
      <FormGroup>
        <Label>Year</Label>
        <Input/>
      </FormGroup>
      <FormGroup>
        <Label>Designation/Degree</Label>
        <Input/>
      </FormGroup>
    </div>
  );
};
