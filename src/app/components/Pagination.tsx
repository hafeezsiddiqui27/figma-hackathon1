// type PaginationProps = {
//     currentPage: number;
//     totalPages: number;
//     onPageChange: (page: number) => void;
//   };
  
//   export default function Pagination({
//     currentPage,
//     totalPages,
//     onPageChange,
//   }: PaginationProps) {
//     const handlePageClick = (page: number) => {
//       if (page >= 1 && page <= totalPages) {
//         onPageChange(page);
//       }
//     };
  
//     return (
//       <div className="flex justify-center items-center gap-4 mt-8">
//         <button
//           onClick={() => handlePageClick(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Previous
//         </button>
  
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageClick(index + 1)}
//             className={`px-4 py-2 rounded ${
//               currentPage === index + 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
  
//         <button
//           onClick={() => handlePageClick(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     );
//   }
  "use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 ${
            currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200"
          } rounded-lg`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}