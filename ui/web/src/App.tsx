interface Props {
    title: string
}

const Button = ({ title }: Props) => (
    <button>{title}</button>
)

const App = () => {
    return (
        <>
            <Button title="foo" />
            <Button title="bar" />
            <Button title="foobarz" />
            helloworld
        </>
    )
}

export default App

