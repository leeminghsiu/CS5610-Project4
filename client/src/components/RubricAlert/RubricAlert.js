function RubricAlert(props) {
  const rubricData = [
    ["Does the app accomplish all the requirements approved in #project   15"],
    ["Is the app usable? Does it include instructions on how to be used?    5"],
    ["Is the app actually useful? Would a final user use it?    5"],
    [
      "The code includes an eslint config file and it doesn't throw any error    5"
    ],
    [
      "Is the code properly organized. Each react component in its own file. Database files separate, CSS into folders, etc.    5"
    ],
    ["Does it implement at least 3 React Components (using hooks)   15"],
    ["Is the project deployed on a public server? Does it work there?    10"],
    [
      "Does it use at least 2 Mongo Collections, supporting CRUD operations on them?. Each student implements full CRUD in at least one of them.   15"
    ],
    ["Is the database populated with at least 1k synthetic records?    10"],
    ["Does the app use node + express    5"],
    ["All the code is formatted using Prettier    5"],
    [
      "Doesn't use non standard tags for accomplishing tasks that should be done with standard components? e.g. Buttons implemented with divs or spans    5"
    ],
    [
      "Is the CSS organized by Modules? Each module has its own css file as shown in class    5"
    ],
    [
      "Clear and descriptive README including at least: * Author * Class Link * Project Objective * Screenshot * Instructions to build    5"
    ],
    [
      "It doesn't expose any secret credentials such as the Mongo USER and Password    5"
    ],
    [
      " Does it include a package.json file listing all the dependencies of the project    5"
    ],
    ["Does it use MIT license    5"],
    [
      "The project doesn't include leftover code that isn't used. e.g. routes/users.js or the default react faveicon    5"
    ],
    [
      "Is the google Form submission correct (thumbnail displays correctly, and links work as well)    5"
    ],
    [
      "Does it include a short public and narrated video demonstrating the application     10"
    ],
    [
      "The code was frozen on time (24 hours before class). Video, slides and deployment were completed before class    5"
    ],
    ["Defines PropTypes for every React Collection 5"],
    ["Does it implement the hierarchy of design? The most important elements are salient and from the top left    5"],
    [
      "Is everything properly aligned and spaced    10"
    ],
    [
      "Does the app use a color consistent color palette that is aligned with the app purpose. "],
    [
      "Does it use consistent approval - cancel colors accross the whole app?    10"], 

    [
      "Does it implement an adequate typography, using typography matching or other techniques and using fonts different than the default ones    10"],
    [
      "Can the whole application be used just with the keyboard?    10"],
    [
      "Does the application pass the accessibility tests with axe or at least lighthouse without generating any errors/warnings without proper justification?    10"],
    [
      "Usability study report with 3 participants per project member    30"],
    [
      "Is it top 3 of the class (according to TA)    20"],
  ];
  const propsId = props.id;
  const propsMsg = props.msg;

  function clickHandle() {
    alert(propsMsg);
  }

  return (
    <div>
      <a href="" onClick={clickHandle}>
        {rubricData[propsId]}
      </a>
    </div>
  );
}

RubricAlert.propTypes = {};

export default RubricAlert;