interface ErrorMessageProps 
{
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-4xl font-bold tracking-wider bg-[#FD9745] border-4 border-black p-4">
        Error: {message}
      </div>
    </div>
  );
};

export default ErrorMessage;