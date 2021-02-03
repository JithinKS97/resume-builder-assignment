import { FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";

export default (props) => {
  const { index, onChange, educationExperience, onDelete } = props;

  const handleFieldChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

  const handleDelete = () => {
    onDelete(index)
  }

  const { company_institute, year, designation_degree } = educationExperience;

  return (
    <>
      <Card className="education-experience-card">
        <CardBody>
          <div className="education-experience-container">
            <FormGroup>
              <Label>Company/Institute</Label>
              <Input
                value={company_institute}
                onChange={handleFieldChange}
                name="company_institute"
              />
            </FormGroup>
            <FormGroup>
              <Label>Year</Label>
              <Input value={year} onChange={handleFieldChange} name="year" />
            </FormGroup>
            <FormGroup>
              <Label>Designation/Degree</Label>
              <Input
                value={designation_degree}
                onChange={handleFieldChange}
                name="designation_degree"
              />
            </FormGroup>
          </div>
        </CardBody>
        <div className='delete-button'>
          <Button onClick={handleDelete} color="danger" size="sm">X</Button>
        </div>
      </Card>
      
    </>
  );
};
