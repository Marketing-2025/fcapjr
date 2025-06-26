import { BlogPost } from "../blogPost/BlogPost";
import { Container } from "@mui/material";

function Connection() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[400px] bg-gray-300">
        <img
          src="/placeholder.jpg"
          alt="Background image showing a hand writing"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">BLOG</h1>
        </div>
      </div>
      <Container maxWidth="lg" className="py-8">
        <BlogPost />
      </Container>
    </div>
  );
}

export default Connection;
