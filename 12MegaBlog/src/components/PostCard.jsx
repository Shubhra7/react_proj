import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom"

// appwrite pass id as '$id', just nomencletaure 
// const PostCard = ({$id, title, featuredImage}) => {
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className="w-full bg-gray-100 rounded-xl p-4">
//             <div className="w-full justify-center mb-4">
//                 <img src={appwriteService.getFileView(featuredImage)} alt={title} className="rounded-xl" />
//                 {/* <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" /> */}

//             </div>
//             <h2 className="text-xl font-bold">
//                 {title}</h2>
//         </div>
//     </Link>
//   )
// }

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-48 bg-black flex items-center justify-center">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
export default PostCard