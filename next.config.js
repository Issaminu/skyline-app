/** @type {import('next').NextConfig} */
let consolewarn = console.warn
console.warn = (...args) => {
  if (args.length > 1 && args[1].startsWith("You should not access 'res' after getServerSideProps")) {
    // ignore message until this is fixed: https://github.com/auth0/nextjs-auth0/issues/524
  } else {
    consolewarn(...args)
  }
}
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com',
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`],
  },
}
const intercept = require("intercept-stdout");
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return ''
  }
  return text
}

// Intercept in dev and prod
intercept(interceptStdout)
module.exports = nextConfig
