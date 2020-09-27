import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "nobrix-shop.netlify.app",
  cookies: true
});

export default auth;
