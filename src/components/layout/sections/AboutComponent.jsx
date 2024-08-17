import CardComponent from "../CardComponent";

export default function AboutComponent({ show }) {
  const Person = JSON.parse(sessionStorage.getItem("person"));
  return (
    <CardComponent
      props={{
        title: "About " + Person.name,
        body: Person.name + " is: " + Person.summary,
        show: true,
      }}
    />
  );
}
