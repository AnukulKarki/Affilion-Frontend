const Notice = () => {
  const notices = [
    "You've successfully enrolled in 'A-Level Economics Complete Course.'",
    "New blog post alert! Check out 'Tips to Ace Your A-Level Exams' in the blog section.",
    "New study material added: Biology notes for Chapter 4 are now available.",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      {notices.length === 0 ? (
        <p className="text-gray-500 text-center">No new notices</p>
      ) : (
        <ul className="space-y-8 mt-4 w-full">
          {notices.map((notice, index) => (
            <li key={index} className="border-b pb-4 text-gray-800">
              • {notice}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notice;
