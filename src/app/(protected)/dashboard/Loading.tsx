type LoaderProps = {
  // existing props
  message?: string; // Add the message prop as optional
};
const Loader = (props: LoaderProps) => {
  return (
    <div>
      {/* existing loader implementation */}
      {props.message && <p>{props.message}</p>} {/* Render the message if provided */}
    </div>
  );
};