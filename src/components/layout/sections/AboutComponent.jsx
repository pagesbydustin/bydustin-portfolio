import CardComponent from "../CardComponent";

export default function AboutComponent({ show }) {
  const Person = JSON.parse(sessionStorage.getItem("person"));
  return (
    <div id="about">
      <CardComponent
        props={{
          title: "About " + Person.name,
          body: Person.name + " is: " + Person.summary,
          show: true,
        }}
      />
    </div>
  );
}
