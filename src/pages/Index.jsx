import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, Heading, Image, Input, Link, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box h={["50vh", "70vh"]} backgroundImage="https://images.unsplash.com/photo-1530904655194-92d55d4a006b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwYW5kJTIwd29tYW4lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcxMzA2OTU3OXww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" color="white" mb={4}>
            Threads
          </Heading>
          <Text fontSize="2xl" color="white">
            Modern, minimal fashion
          </Text>
        </Container>
      </Box>

      {/* Categories */}
      <Container maxW="container.lg" my={20}>
        <Grid templateColumns={["1fr", "1fr 1fr 1fr"]} gap={8}>
          <Link>
            <Image src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwd2VhcmluZyUyMGJsYWNrfGVufDB8fHx8MTcxMzA2OTU4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Men" />
            <Text align="center" fontSize="xl" mt={4}>
              Men
            </Text>
          </Link>
          <Link>
            <Image src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tYW4lMjB3ZWFyaW5nJTIwYmxhY2t8ZW58MHx8fHwxNzEzMDY5NTgwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Women" />
            <Text align="center" fontSize="xl" mt={4}>
              Women
            </Text>
          </Link>
          <Link>
            <Image src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwd2F0Y2h8ZW58MHx8fHwxNzEzMDY5NTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Accessories" />
            <Text align="center" fontSize="xl" mt={4}>
              Accessories
            </Text>
          </Link>
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container maxW="container.lg" my={20}>
        <Heading size="xl" mb={8}>
          Featured Products
        </Heading>
        <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMHQtc2hpcnR8ZW58MHx8fHwxNzEzMDY5NTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Black T-Shirt" />
            <Text fontWeight="bold" mt={4}>
              Black T-Shirt
            </Text>
            <Text fontSize="lg">$29</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDB8fHx8MTcxMzA2OTU4Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="White Sneakers" />
            <Text fontWeight="bold" mt={4}>
              White Sneakers
            </Text>
            <Text fontSize="lg">$79</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1606715791286-6e43e9838f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8fHwxNzEzMDY5NTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Leather Jacket" />
            <Text fontWeight="bold" mt={4}>
              Leather Jacket
            </Text>
            <Text fontSize="lg">$250</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRyZXNzfGVufDB8fHx8MTcxMzA2OTU4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Black Dress" />
            <Text fontWeight="bold" mt={4}>
              Black Dress
            </Text>
            <Text fontSize="lg">$149</Text>
          </Box>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="black" py={12} mt={20}>
        <Container maxW="container.lg">
          <Flex direction={["column", "row"]} justify="space-between">
            <Box mb={[8, 0]}>
              <Heading size="md" color="white" mb={4}>
                Sign up and save
              </Heading>
              <form>
                <FormControl id="email">
                  <FormLabel srOnly>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email" size="lg" color="white" focusBorderColor="white" borderColor="gray.700" bgColor="gray.900" _hover={{ bgColor: "gray.800" }} />
                </FormControl>
                <Button type="submit" colorScheme="white" variant="outline" size="lg" mt={4} _hover={{ bg: "white", color: "black" }}>
                  Subscribe
                </Button>
              </form>
            </Box>
            <Stack direction="row" spacing={6}>
              <Link href="#" color="white" _hover={{ color: "gray.400" }}>
                <FaFacebookF size={24} />
              </Link>
              <Link href="#" color="white" _hover={{ color: "gray.400" }}>
                <FaTwitter size={24} />
              </Link>
              <Link href="#" color="white" _hover={{ color: "gray.400" }}>
                <FaInstagram size={24} />
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
