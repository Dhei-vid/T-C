import Reveal from "../../utility/reveal";
import { useForm } from "react-hook-form";
import { TextField, Button, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "none",
      },
    },
  },
});

const FormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const form = useForm({ FormValues });

  const { register, handleSubmit } = form;
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="md:px-44 px-6 pb-12">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <h1 className="md:text-7xl text-[3rem] font-bold leading-none tracking-wider">
            Our Contacts
          </h1>
        </Reveal>
      </div>

      {/* FORM COMPONENT */}
      <div className="md:px-44 px-6" onSubmit={handleSubmit(() => onSubmit)}>
        <div className="border-t-2 border-black pt-20 px-6">
          <h2 className="md:text-4xl text-2xl pb-16 font-bold">
            Leave us a message
          </h2>
          <form method="post" noValidate>
            <Stack spacing={8}>
              <div className="grid md:grid-cols-2 md:gap-3">
                <TextField
                  label="Your Name"
                  variant="standard"
                  type="text"
                  sx={{ paddingTop: "20px", borderBottom: 1 }}
                  {...register("name", { required: "Your name is required" })}
                />
                <TextField
                  label="Your Email"
                  type="email"
                  variant="standard"
                  sx={{ paddingTop: "20px", borderBottom: 1 }}
                  {...register("email", { required: "Email is required" })}
                />
                <TextField
                  className="md:col-span-2"
                  label="Your Message"
                  type="text"
                  variant="standard"
                  sx={{ paddingTop: "50px", borderBottom: 1 }}
                  {...register("message", { required: "Type something" })}
                />
              </div>
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    borderRadius: 0,
                    width: 150,
                    padding: 2,
                    alignSelf: "center",
                  }}
                >
                  send message
                </Button>
              </ThemeProvider>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
