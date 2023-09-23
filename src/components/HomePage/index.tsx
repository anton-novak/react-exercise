import { Heading, Box } from "@cruk/cruk-react-components"
import { useState } from "react"
import Form from "../Form/Form"
import Results from "../Results/Results"
import { NasaSearchParams } from "../../types"

export const HomePage = () => {
	// We use undefined as the initial state value not to trigger the useNasaQuery hook.
	const [searchParams, setSearchParams] = useState(undefined as unknown as NasaSearchParams);

	return (
		<Box marginTop="s" paddingTop="s">
			<Heading h1>React Exercise</Heading>
			<Form 
				setSearchParams={setSearchParams}
			/>
			<Results 
				searchParams={searchParams}
			/>
		</Box>
	)
}

export default HomePage
