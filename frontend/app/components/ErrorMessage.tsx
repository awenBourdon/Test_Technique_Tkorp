interface ErrorMessageProps 
{
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-4xl font-bold tracking-wider bg-black text-white  p-4">
        Erreur:  {message}
      </div>
    </div>
  );
};

export default ErrorMessage;