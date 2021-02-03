import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Card, CardBody } from "reactstrap";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SkillList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: skills.map((skill) => ({ id: skill, text: skill })),
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tags: newTags });
  }

  render() {
    const { suggestions } = this.state;
    const { tags, onDelete, onAdd } = this.props;
    return (
      <Card className="skill-list-container">
        <CardBody>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            handleDelete={onDelete}
            handleAddition={onAdd}
            handleDrag={this.handleDrag}
            delimiters={delimiters}
            placeholder="Type a skill and press enter"
            autofocus={false}
          />
        </CardBody>
      </Card>
    );
  }
}

export default SkillList;

const skills = [
  "Java",
  "Javascript",
  "Php",
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "c#",
];
