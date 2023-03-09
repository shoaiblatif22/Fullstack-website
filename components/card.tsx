const Card: React.FC<{ href: string; header: string; content: string }> = ({
  href,
  header,
  content,
}) => {
  return (
    <a
      href={href}
      className="m-4 p-5 text-left no-underline border border-solid border-gray-200 rounded-lg w-45/100 hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600"
    >
      <h2 className="m0 mb-4 text-2xl">{header}</h2>
      <p className="m-0 text-xl">{content}</p>
    </a>
  );
};

export default Card;
