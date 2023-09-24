/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-extraneous-dependencies */
import { TextField, Select, Button } from "@cruk/cruk-react-components"
// TODO: fix linter error.
import { useFormik } from "formik"
import * as yup from "yup"
import { NasaSearchParams } from "../../types"

type FormProps = {
    setSearchParams: (searchParams: NasaSearchParams) => void;
    isFetching: boolean;
}

export const Form = ({ setSearchParams, isFetching } : FormProps) => {

    // We define a validation schema with yup.
    const validationObject = yup.object({
        keywords: yup
            .string()
            .required("Please enter search keywords")
            .min(2, "Keywords must have at least 2 characters")
            .max(50, "Keywords must have at most 50 characters"),
        mediaType: yup
            .string()
            // We use a default unselectable option to force user to select a media type and
            // prevent the browser from automatically selecting the first option.
            // This necessitates a custom "required" validation test.
            .test("required", "Please select a media type", (value) => value !== "default"),
        yearStart: yup
            .number()
            .typeError("Please enter a valid number")
            .min(1900, "Year must be after 1900")
            .max(new Date().getFullYear(), "Year start must not be in the future")
    });

    // We employ useFormik hook to introduce the states and methods provided by Formik
    // and link them with React components by passing them as props.
    const formik = useFormik({
        initialValues: {
            keywords: "",
            mediaType: "default",
            yearStart: undefined as unknown as number
        },
        validationSchema: validationObject,
        onSubmit: (values) => {
            setSearchParams(values as NasaSearchParams);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                label="Keywords"
                name="keywords"
                type="text"
                value={formik.values.keywords}
                onChange={formik.handleChange}
                hintText="Enter search keywords"
                // We manipulate the errorMessage prop on validation.
                errorMessage={formik.touched.keywords ? formik.errors.keywords : ''}
            />
            <br />
            <Select
                label="Media Type"
                name="mediaType"
                value={formik.values.mediaType}
                onChange={formik.handleChange}
                hintText="Select media type"
                errorMessage={
                    formik.touched.keywords && formik.values.mediaType === "default" ? formik.errors.mediaType : ""
                }
            >
                <option value="default" disabled> </option>
                <option value="audio">Audio</option>
                <option value="video">Video</option>
                <option value="image">Image</option>
            </Select>
            <br />
            <TextField
                label="Year start"
                name="yearStart"
                type="text"
                value={formik.values.yearStart}
                onChange={formik.handleChange}
                hintText="Enter year start"
                errorMessage={formik.touched.yearStart ? formik.errors.yearStart : ''}
            />
            <br />
            <Button type="submit">
                {isFetching ? "Submitting..." : "Submit"}
            </Button>
        </form>
    )
}

export default Form;
