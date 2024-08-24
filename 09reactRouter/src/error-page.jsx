import { useRouteError,Link } from "react-router-dom";

export default function ErrorPage() {
	// Note that useRouteError provides the error that was thrown. 
	// When the user navigates to routes that don't exist you'll get an error 
	// response with a "Not Found"
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-gray-600">{error.statusText || error.message}</i>
      </p>
      {/* This is also an a tag but instead of refreshing the page, it does client
      side routing, thus it navigates to that page via js, thus faast */}
      <Link to={'/'}>Go To Home through Link Tag</Link>
      {/* This a tag performs a whole refresh, thus requesting all html and js from server */}
      
      <a href="/">Go To Home through A Tag</a>
    </div>
  );
}