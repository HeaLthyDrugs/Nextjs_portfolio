import { InfinitySpin } from 'react-loader-spinner';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-opacity-100 bg-white z-50">
      <div className="mb-4 text-xl animate-fade-in">Welcome to Manish Vishwakarma Portfolio</div>
      <InfinitySpin 
        width='200'
         color="#4fa94d"
      />
      <div className="mt-6 text-sm">Please be patient while the portfolio is loading...</div>
    </div>
  );
};

export default Loading;

