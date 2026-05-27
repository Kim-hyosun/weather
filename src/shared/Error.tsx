function ErrorMessage({ message }: { message?: string }) {
  return <div className="dataError">{message ?? '데이터를 불러오지 못했습니다.'}</div>;
}

export default ErrorMessage;
