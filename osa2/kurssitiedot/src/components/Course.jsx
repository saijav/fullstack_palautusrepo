const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  const differentContent = props.parts.map(element => { return <Part key={element.id} parts={element} />})
  return (
    <div>
      {differentContent}
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, order) => sum + order.exercises, 0)
  return (
    <div>
      <h3>total of {totalExercises} exercises</h3>
    </div>
  )
}

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course