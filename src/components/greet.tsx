type GreetProps = {
	name?: string // ? means the props is opotional
}

const Greet = (props: GreetProps) => {
	const { name } = props

	return (
		<>Hello {name}</>
	)
}

export default Greet;