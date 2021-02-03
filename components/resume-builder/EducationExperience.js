import { FormGroup, Label, Input, Card, CardBody } from "reactstrap";

export default (props) => {
  const { index, onChange, educationExperience } = props;

  const handleFieldChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

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
      </Card>
    </>
  );
};
