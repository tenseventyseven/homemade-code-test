import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import Persons from "./components/Persons";

export default function App() {
  // Use react-query to manage server state
  const { isPending, error, data } = useQuery({
    queryKey: ["persons"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/v1/persons");

      if (!response.ok) {
        throw new Error("Failed to fetch persons");
      }
      return response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          HomeMade code test
        </Typography>
        <Persons initial={data.persons} />
      </Box>
    </Container>
  );
}
